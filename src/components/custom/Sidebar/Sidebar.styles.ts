
import * as Router from 'react-router-dom'
import styled from 'styled-components'

export const Sidebar = styled.div`
  background-color: ${props => props.theme.background.secondaryColor};
  padding: 20px;

  border-right: 1px solid ${props => props.theme.border.color};

  .links {
    margin-top: 80px;
    & > :not(:last-child) {
      margin-bottom: 20px;
    }
  }
  .link {
    display: block;
  }
`

interface LinkProps {
  active?: boolean
}

export const Link = styled(Router.Link)<LinkProps>`
  fill: ${props => props.active ? props.theme.nav.activeTextColor : props.theme.nav.textColor};
  transition: fill 0.3s ease-in;
  cursor: ${props => props.active ? 'default' : 'pointer'}
`