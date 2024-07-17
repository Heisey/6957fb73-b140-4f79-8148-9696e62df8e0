
import * as React from 'react'

export interface AppProps extends React.PropsWithChildren {

}

const App: React.FC<AppProps> = (props) => {

  return (
    <div>
      App 2
    </div>
  )
}

export default App