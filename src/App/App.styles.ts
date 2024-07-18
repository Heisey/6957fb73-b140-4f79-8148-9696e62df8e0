
import styled from 'styled-components'

export const App = styled.div`
  background-color: ${props => props.theme.background.primaryColor};
  min-height: 100vh;

  color: white;

  display: flex;

  .content {
    display: flex;
  }

  .list {
    border-right: 1px solid ${props => props.theme.border.color};
    
  }

  .header {
    margin-top: 30px;
    margin-left: 30px;
    margin-bottom: 30px;
  }
`