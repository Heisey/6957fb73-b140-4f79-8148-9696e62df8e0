
import * as React from 'react'

import * as Styles from './Page.styles'

export interface PageProps extends React.PropsWithChildren {
  className?: string
  id?: string
}

const Page = React.forwardRef<HTMLDivElement, PageProps>((props, ref) => {

  return (
    <Styles.Page ref={ref} {...props}>
      {props.children}
    </Styles.Page>
  )
})

export default Page