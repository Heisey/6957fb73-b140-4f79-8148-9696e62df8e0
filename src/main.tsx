import React from 'react'
import ReactDOM from 'react-dom/client'

import App from 'App'
import ThemeProvider from 'components/providers/Theme'
import * as Utils from 'utilities'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Utils.styles.Reset />
      <Utils.styles.Global />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
