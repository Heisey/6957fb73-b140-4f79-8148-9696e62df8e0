
import * as React from 'react'

import Header from 'components/custom/Header'

import PhoneList from 'pages/PhoneList'

import * as Styles from './App.styles'

export interface AppProps extends React.PropsWithChildren {

}

const App: React.FC<AppProps> = (props) => {

  return (
    <Styles.App>
      <Header />
      <PhoneList />
    </Styles.App>
  )
}

export default App