
import * as React from 'react'

import * as App from 'App'
import * as Icons from 'assets/icons'
import * as Core from 'core'
import * as Hooks from 'hooks'
import * as Utils from 'utilities'

import * as Styles from './Sidebar.styles'

export interface SidebarProps extends React.PropsWithChildren {

}

const Sidebar: React.FC<SidebarProps> = (props) => {

  const appCtx = App.useAppCtx()
  const location = Hooks.common.useLocation()

  return (
    <Styles.Sidebar>
      <div className='links'>
        <Styles.Link to={Core.Keys.paths.HOME} $active={Utils.nav.isDetailsOrChildPath.test(location.pathname) || location.pathname === Core.Keys.paths.HOME}><Icons.Solid.Phone className='link margin_bottom' size='35px' /></Styles.Link>

        <Styles.Link to={Core.Keys.paths.ARCHIVED} $active={Utils.nav.isArchivedOrChildPath.test(location.pathname)}><Icons.Solid.Archive className='link' size='35px' /></Styles.Link>
      </div>

      <div>
        <Styles.Link to={Core.Keys.paths.SETTINGS} $active={location.pathname === Core.Keys.paths.SETTINGS}><Icons.Solid.Settings className='link' size='35px' /></Styles.Link>
      </div>
    </Styles.Sidebar>
  )
}

export default Sidebar