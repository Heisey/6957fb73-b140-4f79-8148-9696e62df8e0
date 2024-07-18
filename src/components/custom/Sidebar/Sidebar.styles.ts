
import styled from 'styled-components'

export const Sidebar = styled.div`
  background-color: ${props => props.theme.background.secondaryColor};
  padding: 10px;

  border-right: 1px solid ${props => props.theme.border.color};

  .links {
    & > :not(:last-child) {
      margin-bottom: 20px;
    }
  }
  .link {
    fill: ${props => props.theme.nav.textColor};
  }
`