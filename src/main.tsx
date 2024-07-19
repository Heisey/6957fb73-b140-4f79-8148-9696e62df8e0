import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import * as ReactRouter from 'react-router-dom'

// import "react-joyride/";

import App from 'App'
import CachedStateProvider from 'components/providers/CachedState'
import QueryProvider from 'components/providers/Query'
import ThemeProvider from 'components/providers/Theme'
import * as Utils from 'utilities'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CachedStateProvider>
      <QueryProvider>
        <ThemeProvider>
          <ReactRouter.BrowserRouter>
            <Utils.styles.Reset />
            <Utils.styles.Global />
            <App />
          </ReactRouter.BrowserRouter>
        </ThemeProvider>
      </QueryProvider>
    </CachedStateProvider>
  </React.StrictMode>,
)
