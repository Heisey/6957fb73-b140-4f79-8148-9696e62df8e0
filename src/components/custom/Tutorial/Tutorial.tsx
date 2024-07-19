
import * as React from 'react'
import * as Joyride from 'react-joyride'

import * as App from 'App'
import * as Core from 'core'
import * as Hooks from 'hooks'

export interface TutorialProps extends React.PropsWithChildren {

}

const Tutorial: React.FC<TutorialProps> = (props) => {
  const cachedState = Hooks.common.useCachedState()
  const appCtx = App.useAppCtx()
  const navigate = Hooks.common.useNav()
  const calls = Hooks.server.phone.useGetAll(true)
  const archived = Hooks.server.phone.useGetArchived(calls.data?.length === 0 && !calls.isLoading)
  const [onLastSlide, onLastSlideHandler] = React.useState(false)

  React.useEffect(() => {
    if (!appCtx.showTutorial && onLastSlide) onLastSlideHandler(false)
  }, [appCtx.showTutorial])

  const callback = (args: Joyride.CallBackProps) => {
    const finishedStatus: Joyride.Status[]  = [Joyride.STATUS.FINISHED, Joyride.STATUS.SKIPPED]
    if (finishedStatus.includes(args.status)) return
    if (args.step.target === '#list' && args.index === 2) navigate(calls.data?.length !== 0 ? Core.Keys.paths.CALL_DETAILS.replace(':id', calls.data![0].id) : Core.Keys.paths.ARCHIVED_DETAILS.replace(':id', archived.data![0].id))
    if (args.step.target === '#settings' && args.index === 4) navigate(Core.Keys.paths.SETTINGS)
    if (args.step.target === '#info_link' && args.index === 6) {
      navigate(Core.Keys.paths.ABOUT) 
    }
    if (args.step.target === '#info' && args.index === 7) {
      onLastSlideHandler(true)
    }
    if (args.action === 'reset') {
      if (!cachedState.state.ranTutorial) cachedState.setState({ ...cachedState.state, ranTutorial: true })
      if (appCtx.showTutorial) appCtx.toggleShowTutorial()
      navigate(Core.Keys.paths.HOME)
    }
    console.log('puppy args, ', args)
  }
  
  return (
    <Joyride.default 
      run={appCtx.showTutorial} 
      steps={Core.config.tutorials.info()} 
      locale={{ next: 'Next', skip: '', close: onLastSlide ? 'Close' : 'Next'}} 
      callback={callback} 
      styles={{
        buttonClose: {
          display: 'none'
        },
        buttonBack: {
          display: 'none'
        }
      }}
    />
  )
}

export default Tutorial