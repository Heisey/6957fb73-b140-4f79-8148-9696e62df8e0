
import * as React from 'react'

import * as Hooks from 'hooks'

import * as CtxApp from './'

const archivedPathRegex = new RegExp('^\\/archived(?:\\/[^/]+)?$')

const Provider: React.FC<React.PropsWithChildren> = (props) => {

  const location = Hooks.common.useLocation()
  const [showArchived, showArchivedHandler] = React.useState(false)

  React.useEffect(() => {
    if (archivedPathRegex.test(location.pathname)) showArchivedHandler(true)
    else showArchivedHandler(false)
  }, [location])

  return (
    <CtxApp.Context.Provider
      value={{
        showArchived
      }}
    >
      {props.children}
    </CtxApp.Context.Provider>
  )
}

export const Component = Provider