
import * as React from 'react'

import * as Styles from './Svg.styles'

export interface SvgProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string
}

const Svg: React.FC<SvgProps> = (props) => {

  return (
    <Styles.Svg { ...props } height={props.size} width='auto'>
      {props.children}
    </Styles.Svg>
  )
}

export default Svg