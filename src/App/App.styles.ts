
import styled from 'styled-components'

export const App = styled.div`
  background-color: ${props => props.theme.app.backgroundColor};
  min-height: 100vh;
  padding: ${props => props.theme.app.padding};

  color: white;
`