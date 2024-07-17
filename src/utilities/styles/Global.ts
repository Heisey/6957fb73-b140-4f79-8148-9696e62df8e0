
import * as Styled from 'styled-components'

const Global = Styled.createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`

export default Global