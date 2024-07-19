
import * as React from 'react'

import * as Core from 'core'
import * as Hooks from 'hooks'

import Desktop from './layout/Desktop'
import Tablet from './layout/Tablet'
import * as Ctx from './context'
import * as Styles from './App.styles'

export interface AppProps extends React.PropsWithChildren {

}

const App: React.FC<AppProps> = (props) => {
  const appCtx = Ctx.useContext()
  const windowSize = Hooks.common.useWindowSize()

  return (
    <Styles.App id='home' ref={appCtx.homeRef}>
      {windowSize.width > Core.Keys.breakpoints.TABLET && <Desktop />}
      {windowSize.width <= Core.Keys.breakpoints.TABLET && <Tablet />}
    </Styles.App>
  )
}

export default App