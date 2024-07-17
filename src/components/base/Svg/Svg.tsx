
import * as React from 'react'

export interface SvgProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string
}

const Svg: React.FC<SvgProps> = (props) => {

  return (
    <svg { ...props } height={props.size} width='auto'>
      {props.children}
    </svg>
  )
}

export default Svg