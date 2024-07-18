
import * as React from 'react'

import Page from 'components/templates/Page'
import * as Hooks from 'hooks'

export interface CallDetailsProps extends React.PropsWithChildren {

}

const CallDetails: React.FC<CallDetailsProps> = (props) => {

  const params = Hooks.common.useParams()
  const call = Hooks.server.phone.useGetById(params.id)

  if (call.isLoading) return <div>is loading</div>

  return (
    <Page>
      <div>
        <p>{call.data?.direction}</p>
      </div>
      <div>
        <p>On: {call.data?.created_at} you had a {call.data?.direction} call</p>
        <p>To: {call.data?.to}</p>
        <p>From: {call.data?.from}</p>
        <p>length: {call.data?.duration}</p>
      </div>
    </Page>
  )
}

export default CallDetails