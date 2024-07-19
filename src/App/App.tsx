
import * as React from 'react'

import * as Core from 'core'
import * as Hooks from 'hooks'

import * as Ctx from './context'
import * as Styles from './App.styles'

// lazy loading for performance
const Desktop = React.lazy(() => import('./layout/Desktop'))
const Tablet = React.lazy(() => import('./layout/Tablet'))
const Mobile = React.lazy(() => import('./layout/Mobile'))

export interface AppProps extends React.PropsWithChildren {

}

const App: React.FC<AppProps> = (props) => {
  const appCtx = Ctx.useContext()
  const windowSize = Hooks.common.useWindowSize()

  return (
    <Styles.App id='home' ref={appCtx.homeRef}>
      <React.Suspense fallback={<div>Loading...</div>}>
        {windowSize.width > Core.Keys.breakpoints.TABLET && <Desktop />}
        {(windowSize.width <= Core.Keys.breakpoints.TABLET && windowSize.width > Core.Keys.breakpoints.MOBILE) && <Tablet />}
        {windowSize.width <= Core.Keys.breakpoints.MOBILE && <Mobile />}
      </React.Suspense>
    </Styles.App>
  )
}

export default App