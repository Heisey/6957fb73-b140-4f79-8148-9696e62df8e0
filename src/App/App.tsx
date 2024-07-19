
import * as React from 'react'

import * as Hooks from 'hooks'
import Desktop from './layout/Desktop'
import * as Ctx from './context'
import * as Styles from './App.styles'

export interface AppProps extends React.PropsWithChildren {

}

const App: React.FC<AppProps> = (props) => {
  const appCtx = Ctx.useContext()
  const windowSize = Hooks.common.useWindowSize()

  return (
    <Styles.App id='home' ref={appCtx.homeRef}>
      {windowSize.width > 850 && <Desktop />}
      {windowSize.width <= 850 && <div>puppy mobile</div>}
    </Styles.App>
  )
}

export default App