
import * as React from 'react'
import * as Styled from 'styled-components'

import * as Core from 'core'

export interface ThemeProps extends React.PropsWithChildren {

}

const Theme: React.FC<ThemeProps> = (props) => {

  return (
    <Styled.ThemeProvider theme={Core.config.theme.dark}>
      {props.children}
    </Styled.ThemeProvider>
  )
}

export default Theme