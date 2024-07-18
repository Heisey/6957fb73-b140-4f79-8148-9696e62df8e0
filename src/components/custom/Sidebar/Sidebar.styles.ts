
import * as Router from 'react-router-dom'
import styled from 'styled-components'

export const Sidebar = styled.div`
  background-color: ${props => props.theme.background.secondaryColor};
  padding: 20px;

  border-right: 1px solid ${props => props.theme.border.color};
  display: flex;
  flex-direction: column;

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

export const Link = styled(Router.Link).withConfig({
  shouldForwardProp: (prop) => !['active'].includes(prop)
})<LinkProps>`
  fill: ${props => props.$active ? props.theme.nav.activeTextColor : props.theme.nav.textColor};
  transition: fill 0.3s ease-in;
  cursor: ${props => props.$active ? 'default' : 'pointer'}
`