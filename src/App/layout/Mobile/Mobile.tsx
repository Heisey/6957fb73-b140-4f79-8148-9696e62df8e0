
import * as React from 'react'

export interface MobileProps extends React.PropsWithChildren {

}

const Mobile: React.FC<MobileProps> = (props) => {

  return (
    <>
      <div>mobile</div>
    </>
  )
}

export default Mobile