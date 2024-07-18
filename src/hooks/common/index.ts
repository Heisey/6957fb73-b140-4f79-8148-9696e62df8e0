
import * as Router from 'react-router-dom'
import * as ThemeProvider from 'components/providers/Theme'

export * from './useToggle'

export const useTheme = ThemeProvider.useTheme

export const useLocation = Router.useLocation
export const useParams = Router.useParams
export const useNav = Router.useNavigate