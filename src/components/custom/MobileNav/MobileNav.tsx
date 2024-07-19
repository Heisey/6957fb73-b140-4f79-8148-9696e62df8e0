
import * as React from 'react'

import * as Icons from 'assets/icons'
import * as Core from 'core'
import * as Hooks from 'hooks'
import * as Utils from 'utilities'
import MobileNavLink from 'components/custom/MobileNavLink'

import * as Styles from './MobileNav.styles'
import Button from 'components/base/Button'

export interface MobileNavProps extends React.PropsWithChildren {

}

const MobileNav: React.FC<MobileNavProps> = (props) => {
  const [showSubMenu, toggleShowSubMenu] = Hooks.common.useToggle(false)
  const location = Hooks.common.useLocation()

  return (
    <Styles.MobileNav $showSubMenu={showSubMenu}>
      <div className='menu'>
        <MobileNavLink active={Utils.nav.isDetailsOrChildPath.test(location.pathname) || location.pathname === Core.Keys.paths.HOME} to={Core.Keys.paths.HOME} className='mobile_link link'><Icons.Solid.Phone size='35px' /></MobileNavLink>
        <MobileNavLink active={Utils.nav.isArchivedOrChildPath.test(location.pathname)} to={Core.Keys.paths.ARCHIVED} className='mobile_link link'><Icons.Solid.Archive size='35px' /></MobileNavLink>
        <Styles.SubMenuButton $active={showSubMenu} className='sub_menu__button' onClick={toggleShowSubMenu}><Icons.Solid.PhoneMissed size='35px' /></Styles.SubMenuButton>
      </div>
      <div className='sub_menu'>
        <MobileNavLink cb={toggleShowSubMenu} active={location.pathname === '/'} to={Core.Keys.paths.HOME} className='sub_menu__link link'><Icons.Solid.Phone size='35px' /></MobileNavLink>
        <MobileNavLink cb={toggleShowSubMenu} active={location.pathname === Core.Keys.paths.SETTINGS} to={Core.Keys.paths.SETTINGS} className='sub_menu__link link'><Icons.Solid.Settings size='35px' /></MobileNavLink>
      </div>
    </Styles.MobileNav>
  )
}

export default MobileNav