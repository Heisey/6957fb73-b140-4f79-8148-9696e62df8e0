
import * as React from 'react'

import * as Core from 'core'

import * as Styles from './Button.styles'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: keyof typeof Core.config.theme.dark.button.variants
}

const Button: React.FC<ButtonProps> = (props) => {

  return (
    <Styles.Button 
      { ...props }
      $buttonTheme={props.theme || 'primary'}
    >
      {props.children}
    </Styles.Button>
  )
}

export default Button