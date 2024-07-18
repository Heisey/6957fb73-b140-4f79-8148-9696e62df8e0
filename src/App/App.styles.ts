
import styled from 'styled-components'

export const App = styled.div`
  background-color: ${props => props.theme.background.primaryColor};
  height: 100vh;
  overflow: hidden;

  color: white;

  display: flex;

  .content {
    display: flex;
  }

  .list {
    border-right: 1px solid ${props => props.theme.border.color};
    display: flex;
    flex-direction: column;
    padding-bottom: 30px;
  }

  .header {
    margin-top: 30px;
    margin-left: 30px;
    margin-bottom: 30px;
  }
`