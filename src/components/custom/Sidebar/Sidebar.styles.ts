
import * as Router from 'react-router-dom'
import styled from 'styled-components'

import * as Core from 'core'
import Button from 'components/base/Button'

export const Sidebar = styled.div`
  background-color: ${props => props.theme.background.secondaryColor};

  height: 100vh;
  border-right: 1px solid ${props => props.theme.border.color};
  display: flex;
  flex-direction: column;
  width: 120px;
  padding: 20px;

  @media (min-width: ${Core.Keys.breakpoints.MOBILE}px) and (max-width: ${Core.Keys.breakpoints.TABLET}px) {
    width: 80px;
  }
  .links {
    flex-grow: 1;
    /* margin-top: 180px; */
  }

  .margin_bottom {
    margin-bottom: 20px;
  }

  .link {
    display: block;
  }
`

interface LinkProps {
  $active?: boolean
}

export const Info = styled(Button)<LinkProps>`
  fill: ${props => props.$active ? props.theme.nav.activeTextColor : props.theme.nav.textColor};
  transition: fill 0.3s ease-in;
  cursor: ${props => props.$active ? 'default' : 'pointer'};
  
`

export const Link = styled(Router.Link).withConfig({
  shouldForwardProp: (prop) => !['active'].includes(prop)
})<LinkProps>`
  fill: ${props => props.$active ? props.theme.nav.activeTextColor : props.theme.nav.textColor};
  transition: fill 0.3s ease-in;
  cursor: ${props => props.$active ? 'default' : 'pointer'};

  :hover {
    & > * {
      transform: scale(1.1);
    }
  }
`