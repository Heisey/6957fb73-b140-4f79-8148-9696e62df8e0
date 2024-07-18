
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

const PhoneList: React.FC<PhoneListProps> = (props) => {
  const appCtx = App.useAppCtx()
  const callHistory = Hooks.server.phone.useGetAll(!appCtx.showArchived)
  const archiveHistory = Hooks.server.phone.useGetArchived(appCtx.showArchived)

  const [showFiltered, showFilteredHandler] = React.useState<ListFilter>(AllFilter)
  if (callHistory.isLoading || archiveHistory.isLoading) return <div>loading</div>
  
  const showdata = () => {
    const data = appCtx.showArchived ? archiveHistory.data : callHistory.data
    switch(showFiltered) {
      case Core.Keys.callDirection.INBOUND:
        return data?.filter(dataSet => dataSet.direction === showFiltered)
      case Core.Keys.callDirection.OUTBOUND:
        return data?.filter(dataSet => dataSet.direction === showFiltered)
      default: 
      return data
    }
  }
  return (
    <Styles.PhoneList>
      <div className='buttons'>
        <div className='buttons__lists'>
          <Button onClick={() => showFilteredHandler(AllFilter)}>All</Button>
          <Button onClick={() => showFilteredHandler(Core.Keys.callDirection.INBOUND)}>Incoming</Button>
          <Button onClick={() => showFilteredHandler(Core.Keys.callDirection.OUTBOUND)}>Outgoing</Button>
        </div>
        <Button className='buttons__archive'>Archive All</Button>
      </div>
      <ul>
        {(showdata() || []).map(dataSet => <PhoneListItem data={dataSet} />)}
      </ul>
    </Styles.PhoneList>
  )
}

export default PhoneList