
import * as React from 'react'

import * as App from 'App'
import * as Core from 'core'
import * as Hooks from 'hooks'
import Button from 'components/base/Button'
import Toggle from 'components/base/Toggle'

import * as Styles from './Settings.styles'

export interface SettingsProps extends React.PropsWithChildren {
}

const Settings: React.FC<SettingsProps> = (props) => {
  const cachedState = Hooks.common.useCachedState()
  const appCtx = App.useAppCtx()
  const theme = Hooks.common.useTheme()
  const navigate = Hooks.common.useNav()

  const restartTutorial = () => {
    navigate(Core.Keys.paths.HOME)
    appCtx.toggleShowTutorial()
    cachedState.setState({ ...cachedState.state, ranTutorial: false })
  }

  return (
    <Styles.Settings>
      <h1 className='title'>Update your user settings</h1>
      <div ref={appCtx.settingsPageRef} id='settings_menu' className='inputs'>
        <div className='input'>
          <p>
            Use dark mode
          </p>
          <Toggle checked={theme.current.name === 'dark'} onClick={() => theme.toggleTheme()} />
        </div>
        <div className='input'>
          <p>Use Guided Tutorial</p>
          <Button onClick={restartTutorial}>Restart</Button>
        </div>
      </div>
    </Styles.Settings>
  )
}

export default Settings