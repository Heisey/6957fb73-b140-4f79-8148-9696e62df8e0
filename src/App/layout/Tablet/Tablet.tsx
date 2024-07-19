
import * as React from 'react'
import * as Router from 'react-router-dom'

import * as Core from 'core'
import * as Hooks from 'hooks'
import CallDetails from 'pages/Desktop/CallDetails'
import Settings from 'pages/Desktop/Settings'
import Header from 'components/custom/Header'
import PhoneList from 'components/custom/PhoneList'
import Sidebar from 'components/custom/Sidebar'

import * as Ctx from '../../context'

export interface TabletProps extends React.PropsWithChildren {

}

const Tablet: React.FC<TabletProps> = (props) => {
  const appCtx = Ctx.useContext()
  const location = Hooks.common.useLocation()

  const renderList = () => (
    <div className='list'>
      <Header className='app_header' />
      <PhoneList ref={appCtx.listRef} />
    </div>
  )

  return (
    <>
      <Sidebar />
      {(location.pathname === Core.Keys.paths.HOME || location.pathname === Core.Keys.paths.ARCHIVED) && renderList()}
      <Router.Routes>
        <Router.Route path={Core.Keys.paths.HOME}>
        <Router.Route path={Core.Keys.paths.CALL_DETAILS} Component={CallDetails} />
        <Router.Route path={Core.Keys.paths.ARCHIVED_DETAILS} Component={CallDetails} />
        <Router.Route path={Core.Keys.paths.SETTINGS} Component={Settings} />
        </Router.Route>
      </Router.Routes>
    </>
  )
}

export default Tablet