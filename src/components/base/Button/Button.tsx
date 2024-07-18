
import * as React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

const Button: React.FC<ButtonProps> = (props) => {

  return (
    <button { ...props }>
      {props.children}
    </button>
  )
}

export default Button