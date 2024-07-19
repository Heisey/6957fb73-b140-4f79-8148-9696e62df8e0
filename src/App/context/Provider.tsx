
import * as React from 'react'

import * as Core from 'core'
import * as Hooks from 'hooks'
import * as Utils from 'utilities'

import * as CtxApp from './'

const Provider: React.FC<React.PropsWithChildren> = (props) => {
  const cachedState = Hooks.common.useCachedState()
  const location = Hooks.common.useLocation()
  const navigate = Hooks.common.useNav()
  const [showArchived, showArchivedHandler] = React.useState(false)
  const [showTutorial, toggleShowTutorial] = Hooks.common.useToggle(!cachedState.state.ranTutorial)
  const [tourPointsLoaded, tourPointsLoadedHandler] = React.useState(false)
  const homeRef = React.useRef<HTMLDivElement>(null);
  const navRef = React.useRef<HTMLDivElement>(null);
  const listRef = React.useRef<HTMLDivElement>(null)
  const detailsRef = React.useRef<HTMLDivElement>(null)
  const settingsPageRef = React.useRef<HTMLDivElement>(null)
  const settingsRef = React.useRef<HTMLAnchorElement>(null)
  const infoLinkRef = React.useRef<HTMLAnchorElement>(null)
  const infoRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (showTutorial && location.pathname !== Core.Keys.paths.HOME) navigate(Core.Keys.paths.HOME)
  }, [])

  // checks if all elements are loaded for tour
  React.useEffect(() => {
    
    const checkElementsLoaded = () => homeRef.current && navRef.current && listRef.current && settingsRef.current
    
    const intervalId = setInterval(() => {
      if (checkElementsLoaded()) {
        tourPointsLoadedHandler(true);
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [])

  // Sets if the app is in archive mode
  React.useEffect(() => {
    if (Utils.nav.isArchivedOrChildPath.test(location.pathname)) showArchivedHandler(true)
    else showArchivedHandler(false)
  }, [location])

  return (
    <CtxApp.Context.Provider
      value={{
        showArchived,
        showTutorial,
        toggleShowTutorial,
        tourPointsLoaded,
        navRef,
        homeRef,
        listRef,
        detailsRef,
        settingsPageRef,
        settingsRef,
        infoLinkRef,
        infoRef
      }}
    >
      {props.children}
    </CtxApp.Context.Provider>
  )
}

export const Component = Provider