
import * as React from 'react'

import * as Hooks from 'hooks'
import Toggle from 'components/base/Toggle'

import * as Styles from './Settings.styles'

export interface SettingsProps extends React.PropsWithChildren {
}

const Settings: React.FC<SettingsProps> = (props) => {

  const theme = Hooks.common.useTheme()


  return (
    <Styles.Settings>
      <h1 className='title'>Update your user settings</h1>
      <div id='settings_menu' className='inputs'>
        <div className='input'>
          <p>
            Use dark mode
          </p>
          <Toggle checked={theme.current.name === 'dark'} onClick={() => theme.toggleTheme()} />
        </div>
      </div>
    </Styles.Settings>
  )
}

export default Settings