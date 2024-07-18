
import * as React from 'react'

import * as Hooks from 'hooks'
import PhoneListItem from 'components/custom/PhoneListItem'

import * as Styles from './PhoneList.styles'

export interface PhoneListProps extends React.PropsWithChildren {

}

const PhoneList: React.FC<PhoneListProps> = (props) => {

  const callHistory = Hooks.server.phone.useGetAll()

  if (callHistory.isLoading) return <div>loading</div>
  
  return (
    <Styles.PhoneList>
      <ul>
        {callHistory.data?.map(dataSet => <PhoneListItem data={dataSet} />)}
      </ul>
    </Styles.PhoneList>
  )
}

export default PhoneList