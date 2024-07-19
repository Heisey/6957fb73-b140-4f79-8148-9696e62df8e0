
import * as React from 'react'

import * as Hooks from 'hooks'
import * as Utils from 'utilities'

import * as CtxApp from './'

const Provider: React.FC<React.PropsWithChildren> = (props) => {

  const location = Hooks.common.useLocation()
  const [showArchived, showArchivedHandler] = React.useState(false)
  const [showTutorial, toggleShowTutorial] = Hooks.common.useToggle(false)
  const [tourPointsLoaded, tourPointsLoadedHandler] = React.useState(false)
  const homeRef = React.useRef<HTMLDivElement>(null);
  const navRef = React.useRef<HTMLDivElement>(null);
  const listRef = React.useRef<HTMLDivElement>(null)
  const detailsRef = React.useRef<HTMLDivElement>(null)
  const settingsRef = React.useRef<HTMLAnchorElement>(null)


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
        settingsRef
      }}
    >
      {props.children}
    </CtxApp.Context.Provider>
  )
}

export const Component = Provider