
import * as React from 'react'

import * as App from 'App'
import * as Hooks from 'hooks'
import PhoneListItem from 'components/custom/PhoneListItem'

import * as Styles from './PhoneList.styles'

export interface PhoneListProps extends React.PropsWithChildren {

}

const PhoneList: React.FC<PhoneListProps> = (props) => {
  const appCtx = App.useAppCtx()
  const callHistory = Hooks.server.phone.useGetAll(!appCtx.showArchived)
  const archiveHistory = Hooks.server.phone.useGetArchived(appCtx.showArchived)

  if (callHistory.isLoading || archiveHistory.isLoading) return <div>loading</div>
  
  return (
    <Styles.PhoneList>
      <ul>
        {!appCtx.showArchived && callHistory.data?.map(dataSet => <PhoneListItem data={dataSet} />)}
        {appCtx.showArchived && archiveHistory.data?.map(dataSet => <PhoneListItem data={dataSet} />)}
      </ul>
    </Styles.PhoneList>
  )
}

export default PhoneList