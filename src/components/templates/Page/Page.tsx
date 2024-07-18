
import * as React from 'react'

import * as Styles from './Page.styles'

export interface PageProps extends React.PropsWithChildren {
  className?: string
}

const Page: React.FC<PageProps> = (props) => {

  return (
    <Styles.Page {...props}>
      {props.children}
    </Styles.Page>
  )
}

export default Page