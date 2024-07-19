
import * as React from 'react'
import * as Styled from 'styled-components'

import * as Core from 'core'
import * as Hooks from 'hooks'

export interface ThemeProps extends React.PropsWithChildren {}

interface ThemeContextProps {
  current: Core.I.Theme
  toggleTheme: () => void
}

const ThemeContext = React.createContext<ThemeContextProps | undefined>(undefined)

const ThemeProvider: React.FC<ThemeProps> = (props) => {
  const cachedState = Hooks.common.useCachedState()
  const [theme, setTheme] = React.useState(Core.config.theme[cachedState.state.theme])

  const toggleTheme = () => {
    const update = theme.name === Core.config.theme.dark.name ? Core.config.theme.light : Core.config.theme.dark
    cachedState.setState({ ...cachedState.state, theme: update.name as keyof typeof Core.config.theme })
    setTheme(update)
  }

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