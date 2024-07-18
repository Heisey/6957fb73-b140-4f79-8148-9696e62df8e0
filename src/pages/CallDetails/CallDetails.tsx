
import * as React from 'react'

import * as Hooks from 'hooks'
import * as Utils from 'utilities'

import * as Styles from './CallDetails.styles'
import Button from 'components/base/Button'

export interface CallDetailsProps extends React.PropsWithChildren {

}

const CallDetails: React.FC<CallDetailsProps> = (props) => {

  const params = Hooks.common.useParams()
  const call = Hooks.server.phone.useGetById(params.id)

  if (call.isLoading) return <div>is loading</div>

  return (
    <Styles.CallDetails>
      <div className='header'>
        <p>{call.data?.direction}</p>
      </div>
      <div className='sub_header'>
        <p>On: {Utils.date.format(call.data?.created_at!)} you had a {call.data?.direction} call</p>
      </div>
      <div className='content'>
        <div className='info'>
          
          <p>To: {call.data?.to}</p>
          <p>From: {call.data?.from}</p>
          <p>length: {call.data?.duration}</p>
        </div>
        <Button>settings</Button>
      </div>
    </Styles.CallDetails>
  )
}

export default CallDetails