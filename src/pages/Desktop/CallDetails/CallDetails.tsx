
import * as React from 'react'

import * as App from 'App'
import * as Icons from 'assets/icons'
import * as Core from 'core'
import * as Hooks from 'hooks'
import * as Utils from 'utilities'

import * as Styles from './CallDetails.styles'
import Button from 'components/base/Button'

export interface CallDetailsProps extends React.PropsWithChildren {

}

const CallDetails: React.FC<CallDetailsProps> = (props) => {

  const appCtx = App.useAppCtx()
  const params = Hooks.common.useParams()
  const call = Hooks.server.phone.useGetById(params.id)
  const updateCall = Hooks.server.phone.useUpdateCall()
  const nav = Hooks.common.useNav()
  const windowSize = Hooks.common.useWindowSize()

  if (call.isLoading) return <div>is loading</div>

  const onUpdateCall = async () => {
    await updateCall.mutate({ ...call.data!, is_archived: !call.data?.is_archived })
    nav(!appCtx.showArchived ? Core.Keys.paths.ARCHIVED_DETAILS.replace(':id', call.data?.id!) : Core.Keys.paths.CALL_DETAILS.replace(':id', call.data?.id!))
  }

  return (
    <Styles.CallDetails id='details'>
      <div ref={appCtx.detailsRef} className='header'>
        {appCtx.showArchived && <p>Archived</p>}
        <p>{call.data?.direction}</p>
      </div>
      <div className='sub_header'>
        <p>On: {Utils.date.format(call.data?.created_at!)} you had a {call.data?.direction} call</p>
      </div>
      <div className='content'>
        {windowSize.width <= Core.Keys.breakpoints.TABLET && <Button onClick={() => nav(-1)} className='back' $variant={Core.Keys.buttonVariants.OUTLINE}><Icons.Solid.Arrow size='35px' /></Button>}
        <div className='info'>
          <p>To: {call.data?.to}</p>
          <p>From: {call.data?.from}</p>
          <p>length: {call.data?.duration}</p>
        </div>
        <Button onClick={onUpdateCall} $variant={Core.Keys.buttonVariants.OUTLINE} $theme={!appCtx.showArchived ? Core.Keys.buttonThemes.DANGER : Core.Keys.buttonThemes.PRIMARY}>{appCtx.showArchived ? 'UnArchive' : 'Archive'}</Button>
      </div>
    </Styles.CallDetails>
  )
}

export default CallDetails