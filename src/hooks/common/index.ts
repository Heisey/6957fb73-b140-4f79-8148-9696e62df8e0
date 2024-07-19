
import * as Router from 'react-router-dom'
import * as CachedStateProvider from 'components/providers/CachedState'
import * as ThemeProvider from 'components/providers/Theme'

export * from './useLocalStorage'
export * from './useToggle'
export * from './useWindowSize'

export const useTheme = ThemeProvider.useTheme
export const useCachedState = CachedStateProvider.useCachedState

export const useLocation = Router.useLocation
export const useParams = Router.useParams
export const useNav = Router.useNavigate