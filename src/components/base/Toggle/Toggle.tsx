
import * as React from 'react'

import * as Styles from './Toggle.styles'
export interface ToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {}

const Toggle: React.FC<ToggleProps> = (props) => {

  return (
    <Styles.Toggle>
      <label className='label'>
        <input className='input' { ...props } readOnly type='checkbox' />
        <span className='slider'></span>
      </label>
    </Styles.Toggle>
  )
}

export default Toggle