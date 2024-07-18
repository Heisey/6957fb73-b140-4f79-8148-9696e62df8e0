
import * as React from 'react'

import * as Icons from 'assets/icons'
import * as Hooks from 'hooks'

import * as Styles from './Sidebar.styles'

export interface SidebarProps extends React.PropsWithChildren {

}

const Sidebar: React.FC<SidebarProps> = (props) => {

  const location = Hooks.common.useLocation()

  return (
    <Styles.Sidebar>
      <div className='links'>
        <Styles.Link to='/' active={location.pathname === '/'} className='link'><Icons.Solid.Phone className='link' size='35px' /></Styles.Link>

        <Styles.Link to='/details' active={location.pathname === '/details'} className='link'><Icons.Solid.Archive className='link' size='35px' /></Styles.Link>
      </div>

      <div>
        
      </div>
    </Styles.Sidebar>
  )
}

export default Sidebar