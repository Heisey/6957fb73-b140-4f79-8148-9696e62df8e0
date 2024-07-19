
import styled from 'styled-components'

export const App = styled.div`
  background-color: ${props => props.theme.background.primaryColor};
  height: 100vh;
  overflow: hidden;

  color: ${props => props.theme.text.primaryColor};

  display: flex;

  .content {
    display: flex;
    width: 100%;
  }

  .list {
    border-right: 1px solid ${props => props.theme.border.color};
    display: flex;
    flex-direction: column;
    padding-bottom: 30px;
  }

  .app_header {
    margin-top: 30px;
    margin-left: 30px;
    margin-bottom: 30px;
  }
`