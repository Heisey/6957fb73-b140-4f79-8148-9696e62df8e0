
import * as React from 'react'
import * as Joyride from 'react-joyride'

import * as App from 'App'
import * as Core from 'core'
import * as Hooks from 'hooks'

export interface TutorialProps extends React.PropsWithChildren {

}

const Tutorial: React.FC<TutorialProps> = (props) => {
  const appCtx = App.useAppCtx()
  const navigate = Hooks.common.useNav()
  const calls = Hooks.server.phone.useGetAll(true)
  const archived = Hooks.server.phone.useGetArchived(calls.data?.length === 0 && !calls.isLoading)
  const [onLastSlide, onLastSlideHandler] = React.useState(false)

  const callback = (args: Joyride.CallBackProps) => {
    if (onLastSlide) onLastSlideHandler(false)
    const finishedStatus: Joyride.Status[]  = [Joyride.STATUS.FINISHED, Joyride.STATUS.SKIPPED]
    if (finishedStatus.includes(args.status)) return
    if (args.step.target === '#list' && args.index === 2) navigate(calls.data?.length !== 0 ? Core.Keys.paths.CALL_DETAILS.replace(':id', calls.data![0].id) : Core.Keys.paths.ARCHIVED_DETAILS.replace(':id', archived.data![0].id))
    if (args.step.target === '#details' && args.index === 3) navigate(Core.Keys.paths.SETTINGS)

  }
  
  return (
    <Joyride.default 
      run={false} 
      steps={Core.config.tutorials.info()} 
      locale={{ next: 'Next', close: onLastSlide ? 'Close' : 'Next'}} 
      callback={callback} 
    />
  )
}

export default Tutorial