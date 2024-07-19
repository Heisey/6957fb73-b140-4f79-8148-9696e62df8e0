
import * as Joyride from 'react-joyride'

export const info = (): Joyride.Step[] => ([
  {
    target: '#home',
    content: 'Start',
    placement: 'center',
    disableBeacon: true,
  },
  {
    target: '#nav',
    content: 'nav',
    placement: 'right',
    disableBeacon: true,
    styles: {
      spotlight: {
        height: '100vh',
        transform: 'none'
      }
    }
  },
  {
    target: '#list',
    content: 'list',
    placement: 'right',
    disableBeacon: true
  },
  {
    target: '#details',
    content: 'details',
    placement: 'left',
    disableBeacon: true,
    styles: {
      tooltip: {
        top: '-80vh',
        left: 0
      }
    }
  },
  {
    target: '#settings',
    content: 'settings',
    disableBeacon: true
  },
  { 
    target: '#settings_menu',
    content: 'settings menu',
    disableBeacon: true,
    placement: 'center'
  },{
    target: '#info_link',
    content: 'info link',
    disableBeacon: true
  },{
    target: '#info',
    content: 'info page',
    disableBeacon: true,
    placement: 'center'
  }
])