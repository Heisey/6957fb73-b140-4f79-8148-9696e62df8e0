
import * as React from 'react'
import * as Router from 'react-router-dom'

import * as Core from 'core'
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
          <Header className='app_header' />
          <PhoneList />
        </div>
        <Router.Routes>
          <Router.Route path={Core.Keys.paths.CALL_DETAILS} Component={CallDetails} />
          <Router.Route path={Core.Keys.paths.ARCHIVED_DETAILS} Component={CallDetails} />
        </Router.Routes>
      </div>
    </Styles.App>
  )
}

export default App