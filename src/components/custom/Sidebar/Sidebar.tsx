
import * as React from 'react'

import * as App from 'App'
import * as Icons from 'assets/icons'
import * as Core from 'core'
import * as Hooks from 'hooks'
import * as Utils from 'utilities'

import * as Styles from './Sidebar.styles'

export interface SidebarProps extends React.PropsWithChildren {
}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>((props, ref) => {
  const appCtx = App.useAppCtx()
  const location = Hooks.common.useLocation()

  return (
    <Styles.Sidebar id='nav' ref={ref}>
      <div className='links'>
        <Styles.Link to={Core.Keys.paths.HOME} $active={Utils.nav.isDetailsOrChildPath.test(location.pathname) || location.pathname === Core.Keys.paths.HOME}><Icons.Solid.Phone className='link margin_bottom' size='35px' /></Styles.Link>

        <Styles.Link to={Core.Keys.paths.ARCHIVED} $active={Utils.nav.isArchivedOrChildPath.test(location.pathname)}><Icons.Solid.Archive className='link' size='35px' /></Styles.Link>
      </div>

      <div>
        <Styles.Link to={Core.Keys.paths.ABOUT} $active={location.pathname === Core.Keys.paths.ABOUT} className='link margin_bottom'><Icons.Solid.Info size='35px' /></Styles.Link>
        <Styles.Link id='settings' ref={appCtx.settingsRef} to={Core.Keys.paths.SETTINGS} $active={location.pathname === Core.Keys.paths.SETTINGS}><Icons.Solid.Settings className='link' size='35px' /></Styles.Link>
      </div>
    </Styles.Sidebar>
  )
})

export default Sidebar