
import * as React from 'react'
import * as Router from 'react-router-dom'

import * as Hooks from 'hooks'

import * as Styles from './MobileNavLink.styles'

export interface MobileNavLinkProps extends Router.LinkProps {
  active: boolean
  cb?: () => void
}

const MobileNavLink: React.FC<MobileNavLinkProps> = (props) => {
  const nav = Hooks.common.useNav()

  const onClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    if (props.cb) props.cb()
    nav(props.to)
  }

  return (
    <Styles.Link { ...props } onClick={onClick} $active={props.active}>
      {props.children}
    </Styles.Link>
  )
}

export default MobileNavLink