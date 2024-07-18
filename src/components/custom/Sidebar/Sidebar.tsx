
import * as React from 'react'

import * as Icons from 'assets/icons'
import * as Hooks from 'hooks'

import * as Styles from './Sidebar.styles'

export interface SidebarProps extends React.PropsWithChildren {

}

const Sidebar: React.FC<SidebarProps> = (props) => {

  const theme = Hooks.common.useTheme()

  return (
    <Styles.Sidebar>
      <div className='links'>
        <Icons.Solid.Phone className='link' size='35px' />
        <Icons.Solid.Archive className='link' size='35px' />
      </div>
    </Styles.Sidebar>
  )
}

export default Sidebar