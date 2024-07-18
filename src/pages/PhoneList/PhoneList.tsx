
import * as React from 'react'

import * as Hooks from 'hooks'

export interface PhoneListProps extends React.PropsWithChildren {

}

const PhoneList: React.FC<PhoneListProps> = (props) => {

  const callHistory = Hooks.server.phone.useGetAll()

  if (callHistory.isLoading) return <div>loading</div>
  
  return (
    <div>
      PhoneList
    </div>
  )
}

export default PhoneList