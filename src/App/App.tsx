
import * as React from 'react'
import * as Router from 'react-router-dom'

import Header from 'components/custom/Header'
import PhoneList from 'components/custom/PhoneList'
import Sidebar from 'components/custom/Sidebar'

import CallDetails from 'pages/CallDetails'

import * as Styles from './App.styles'

export interface AppProps extends React.PropsWithChildren {

}

const App: React.FC<AppProps> = (props) => {

  return (
    <Styles.App>
      <Sidebar />
      <div className='content'>
        <div className='list'>
          <Header className='header' />
          <PhoneList />
        </div>
        <Router.Routes>
          <Router.Route path='/details' Component={CallDetails} />
        </Router.Routes>
      </div>
    </Styles.App>
  )
}

export default App