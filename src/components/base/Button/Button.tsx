
import * as React from 'react'

import * as Core from 'core'

import * as Styles from './Button.styles'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  $theme?: keyof typeof Core.config.theme.dark.button.variants
  $variant?: Core.I.ButtonVariant
}

const Button: React.FC<ButtonProps> = (props) => {

  return (
    <Styles.Button 
      { ...props }
      $buttonTheme={props.$theme || Core.Keys.buttonThemes.PRIMARY}
      $variant={props.$variant || Core.Keys.buttonVariants.DEFAULT}
    >
      {props.children}
    </Styles.Button>
  )
}

export default Button