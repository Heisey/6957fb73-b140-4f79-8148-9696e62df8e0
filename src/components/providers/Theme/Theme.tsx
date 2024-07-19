
import * as React from 'react'
import * as Styled from 'styled-components'

import * as Core from 'core'

export interface ThemeProps extends React.PropsWithChildren {}

interface ThemeContextProps {
  current: Core.I.Theme
  toggleTheme: () => void
}

const ThemeContext = React.createContext<ThemeContextProps | undefined>(undefined)

const ThemeProvider: React.FC<ThemeProps> = (props) => {
  const [theme, setTheme] = React.useState(Core.config.theme.light)

  const toggleTheme = () => setTheme(prevTheme => (prevTheme === Core.config.theme.dark ? Core.config.theme.light : Core.config.theme.dark));

  return (
    <ThemeContext.Provider value={{ current: theme, toggleTheme }}>
      <Styled.ThemeProvider theme={theme}>
        {props.children}
      </Styled.ThemeProvider>
    </ThemeContext.Provider>
  )
}
export const useTheme = () => {
  const context = React.useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export default ThemeProvider