
import * as React from 'react'

import Page from 'components/templates/Page'
import * as Hooks from 'hooks'

export interface CallDetailsProps extends React.PropsWithChildren {

}

const CallDetails: React.FC<CallDetailsProps> = (props) => {

  const params = Hooks.common.useParams()
  const callData = Hooks.server.phone.useGetById(params.id)

  if (callData.isLoading) return <div>is loading</div>

  console.log('puppy data, ', callData.data)

  return (
    <Page>
      puppy
    </Page>
  )
}

export default CallDetails