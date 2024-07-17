
import * as React from 'react'

import Header from 'components/custom/Header'

import * as Styles from './App.styles'

export interface AppProps extends React.PropsWithChildren {

}

const App: React.FC<AppProps> = (props) => {

  return (
    <Styles.App>
      <Header />
      App 2
    </Styles.App>
  )
}

export default App