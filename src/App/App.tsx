
import * as React from 'react'
import * as Router from 'react-router-dom'

import Header from 'components/custom/Header'
import Sidebar from 'components/custom/Sidebar'

import CallDetails from 'pages/CallDetails'
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
        <Router.Routes>
          <Router.Route path='/' Component={PhoneList} />
          <Router.Route path='/details' Component={CallDetails} />
        </Router.Routes>
      </div>
    </Styles.App>
  )
}

export default App