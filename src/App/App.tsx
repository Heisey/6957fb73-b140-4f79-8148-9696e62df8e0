
import * as React from 'react'

import Header from 'components/custom/Header'
import Sidebar from 'components/custom/Sidebar'

import PhoneList from 'pages/PhoneList'

import * as Styles from './App.styles'

export interface AppProps extends React.PropsWithChildren {

}

const App: React.FC<AppProps> = (props) => {

  return (
    <Styles.App>
      <Sidebar />
      <div className='content'>
        <Header />
        <PhoneList />
      </div>
    </Styles.App>
  )
}

export default App