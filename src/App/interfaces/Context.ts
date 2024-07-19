
import * as React from 'react'

export interface Context {
  showArchived: boolean
  showTutorial: boolean
  toggleShowTutorial: () => void
  tourPointsLoaded: boolean
  navRef: React.RefObject<HTMLDivElement>
  homeRef: React.RefObject<HTMLDivElement>
  listRef: React.RefObject<HTMLDivElement>
  detailsRef: React.RefObject<HTMLDivElement>
  settingsPageRef: React.RefObject<HTMLDivElement>
  settingsRef: React.RefObject<HTMLAnchorElement>
  infoLinkRef: React.RefObject<HTMLAnchorElement>
  infoRef: React.RefObject<HTMLDivElement>

}