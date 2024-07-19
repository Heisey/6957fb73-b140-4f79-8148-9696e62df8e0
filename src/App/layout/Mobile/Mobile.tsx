
import * as React from 'react'
import * as Router from 'react-router-dom'

import * as Core from 'core'
import Header from 'components/custom/Header'
import PhoneList from 'components/custom/PhoneList'
import MobileNav from 'components/custom/MobileNav'
import Settings from 'pages/Settings'

import * as Styles from './Mobile.styles'

export interface MobileProps extends React.PropsWithChildren {

}

const Mobile: React.FC<MobileProps> = (props) => {

  return (
    <Styles.Mobile>
      <div className='content'>
        <Header className='header' />
        <Router.Routes>
          <Router.Route path={Core.Keys.paths.HOME} Component={PhoneList}>
            <Router.Route path={Core.Keys.paths.CALL_DETAILS} Component={PhoneList} />
          </Router.Route>

          <Router.Route path={Core.Keys.paths.ARCHIVED} Component={PhoneList}>
            <Router.Route path={Core.Keys.paths.ARCHIVED_DETAILS} Component={PhoneList} />
          </Router.Route>

          <Router.Route path={Core.Keys.paths.SETTINGS} Component={Settings} />
        </Router.Routes>
      </div>
      <MobileNav />
    </Styles.Mobile>
  )
}

export default Mobile