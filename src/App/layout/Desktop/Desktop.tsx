
import * as React from 'react'
import * as Router from 'react-router-dom'
import * as Joyride from 'react-joyride'

import * as Core from 'core'
import * as Hooks from 'hooks'
import CallDetails from 'pages/Desktop/CallDetails'
import Settings from 'pages/Desktop/Settings'
import Header from 'components/custom/Header'
import PhoneList from 'components/custom/PhoneList'
import Sidebar from 'components/custom/Sidebar'

import * as Ctx from '../../context'

export interface DesktopProps extends React.PropsWithChildren {

}

const Desktop: React.FC<DesktopProps> = (props) => {
  const appCtx = Ctx.useContext()
  const location = Hooks.common.useLocation()
  const navigate = Hooks.common.useNav()
  const calls = Hooks.server.phone.useGetAll(true)
  const archived = Hooks.server.phone.useGetArchived(calls.data?.length === 0 && !calls.isLoading)
  const [onLastSlide, onLastSlideHandler] = React.useState(false)

  const renderList = () => (
    <div className='list'>
      <Header className='app_header' />
      <PhoneList ref={appCtx.listRef} />
    </div>
  )

  const callback = (args: Joyride.CallBackProps) => {
    if (onLastSlide) onLastSlideHandler(false)
    const finishedStatus: Joyride.Status[]  = [Joyride.STATUS.FINISHED, Joyride.STATUS.SKIPPED]
    if (finishedStatus.includes(args.status)) return
    if (args.step.target === '#list' && args.index === 2) navigate(calls.data?.length !== 0 ? Core.Keys.paths.CALL_DETAILS.replace(':id', calls.data![0].id) : Core.Keys.paths.ARCHIVED_DETAILS.replace(':id', archived.data![0].id))
    if (args.step.target === '#details' && args.index === 3) navigate(Core.Keys.paths.SETTINGS)

  }

  return (
    <>
      <Sidebar ref={appCtx.navRef} />
      <div className='content'>
        {location.pathname !== Core.Keys.paths.SETTINGS && renderList()}
        <Router.Routes>
          <Router.Route path={Core.Keys.paths.CALL_DETAILS} Component={CallDetails} />
          <Router.Route path={Core.Keys.paths.ARCHIVED_DETAILS} Component={CallDetails} />
          <Router.Route path={Core.Keys.paths.SETTINGS} Component={Settings} />
        </Router.Routes>
      </div>
      {appCtx.tourPointsLoaded && <Joyride.default run={true} steps={Core.config.tutorials.info()} locale={{ next: 'Next', close: onLastSlide ? 'Close' : 'Next'}} callback={callback} />}
    </>
  )
}

export default Desktop