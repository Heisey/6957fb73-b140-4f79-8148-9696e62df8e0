
import * as React from 'react'

import * as App from 'App'
import * as Icons from 'assets/icons'
import * as Core from 'core'
import * as Hooks from 'hooks'

import * as Styles from './Sidebar.styles'

export interface SidebarProps extends React.PropsWithChildren {

}

const Sidebar: React.FC<SidebarProps> = (props) => {

  const appCtx = App.useAppCtx()
  const location = Hooks.common.useLocation()

  return (
    <Styles.Sidebar>
      <div className='links'>
        <Styles.Link to={Core.Keys.paths.HOME} $active={!appCtx.showArchived}><Icons.Solid.Phone className='link' size='35px' /></Styles.Link>

        <Styles.Link to={Core.Keys.paths.ARCHIVED} $active={appCtx.showArchived}><Icons.Solid.Archive className='link' size='35px' /></Styles.Link>
      </div>

      <div>
        
      </div>
    </Styles.Sidebar>
  )
}

export default Sidebar