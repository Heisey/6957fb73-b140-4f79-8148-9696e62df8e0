
import * as React from 'react'

import * as App from 'App'
import * as Core from 'core'
import * as Hooks from 'hooks'
import Button from 'components/base/Button'
import PhoneListItem from 'components/custom/PhoneListItem'

import * as Styles from './PhoneList.styles'

export interface PhoneListProps extends React.PropsWithChildren {

}

const AllFilter = 'ALL'
type ListFilter = Core.I.CallDirection | typeof AllFilter

const PhoneList = React.forwardRef<HTMLDivElement, PhoneListProps>((props, ref) => {
  const appCtx = App.useAppCtx()
  const callHistory = Hooks.server.phone.useGetAll(!appCtx.showArchived)
  const archiveHistory = Hooks.server.phone.useGetArchived(appCtx.showArchived)
  const archiveCall = Hooks.server.phone.useUpdateCall()

  const [listData, listDataHandler] = React.useState<Core.I.Call[] | undefined>(appCtx.showArchived ? archiveHistory.data : callHistory.data)
  const [showFiltered, showFilteredHandler] = React.useState<ListFilter>(AllFilter)
  const [loading, toggleLoading] = Hooks.common.useToggle(false)

  React.useEffect(() => {
    if (appCtx.showArchived) listDataHandler(archiveHistory.data)
    else if (!appCtx.showArchived) listDataHandler(callHistory.data)
  }, [callHistory.data, archiveHistory.data, appCtx.showArchived])

  const showdata = () => {
    let data: Core.I.Call[] | undefined = []
    switch(showFiltered) {
      case Core.Keys.callDirection.INBOUND:
        data = listData?.filter(dataSet => dataSet.direction === showFiltered)
        break
      case Core.Keys.callDirection.OUTBOUND:
        data = listData?.filter(dataSet => dataSet.direction === showFiltered)
        break
      default: 
        data = listData
        break
    }
    return data
  }

  const onAllUpdate = async () => {
    toggleLoading()
    if (appCtx.showArchived) {
      if (!archiveHistory.data) return toggleLoading()
      await Promise.all(archiveHistory.data.map(async dataSet => await archiveCall.mutateAsync({ ...dataSet, is_archived: false }) ))
      await archiveHistory.refetch()
    }
    else {
      if (!callHistory.data) return toggleLoading()
      await Promise.all(callHistory.data.map(async dataSet => await archiveCall.mutateAsync({ ...dataSet, is_archived: true })))
      await callHistory.refetch()
    }
    setTimeout(toggleLoading, 300)
  }

  const renderList = () => {
    if (callHistory.isLoading || archiveHistory.isLoading || loading) return <div>Loading</div>
    return (showdata() || []).map(dataSet => <PhoneListItem key={dataSet.id} data={dataSet} />)
  }

  return (
    <Styles.PhoneList id='list' ref={ref}>
      <div className='buttons'>
        <div className='buttons__lists'>
          <Styles.FilterButton $active={showFiltered === AllFilter} onClick={() => showFilteredHandler(AllFilter)}>All</Styles.FilterButton>
          <Styles.FilterButton $active={showFiltered === Core.Keys.callDirection.INBOUND} onClick={() => showFilteredHandler(Core.Keys.callDirection.INBOUND)}>Incoming</Styles.FilterButton>
          <Styles.FilterButton $active={showFiltered === Core.Keys.callDirection.OUTBOUND} onClick={() => showFilteredHandler(Core.Keys.callDirection.OUTBOUND)}>Outgoing</Styles.FilterButton>
        </div>
        <Button onClick={onAllUpdate} className='buttons__archive'>{appCtx.showArchived ? 'UnArchive' : 'Archive'} All</Button>
      </div>
      {renderList()}
    </Styles.PhoneList>
  )
})

export default PhoneList
