
import 'styled-components'

import * as Core from 'core'

declare module 'styled-components' {
  export interface DefaultTheme extends Core.I.Theme {}
}