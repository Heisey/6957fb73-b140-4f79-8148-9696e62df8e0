
import * as React from 'react'

import Toggle from 'components/base/Toggle'

import * as Styles from './Settings.styles'

export interface SettingsProps extends React.PropsWithChildren {
}

const Settings: React.FC<SettingsProps> = (props) => {

  const [useDark, useDarkHandler] = React.useState(false)

  console.log(useDark)
  return (
    <Styles.Settings>
      <h1>Update your user settings</h1>
      <div>
        <div>
          <p>
            Use dark mode
          </p>
          <Toggle checked={useDark} onClick={() => useDarkHandler(!useDark)} />
        </div>
      </div>
    </Styles.Settings>
  )
}

export default Settings