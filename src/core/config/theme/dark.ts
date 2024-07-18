
import * as I from '../../Interfaces'

export const dark: I.Theme = {
  name: 'dark',
  app: {
    padding: '20px'
  },
  background: {
    primaryColor: 'black',
    secondaryColor: '#343b3a',
    tertiaryColor: 'pink'
  },
  button: {
    padding: '10px',
    variants: {
      primary: {
        fg: '#2AC420',
        bg: '#343b3a',
        hoverBg: 'red',
        hoverFg: 'blue'
      }
    }
  },
  border: {
    color: '#2AC420',
    width: '2px',
    radius: '10px',
  },
  text: {
    primaryColor: 'white',
    secondaryColor: '#2AC420',
    disabledColor: 'yellow'
  },
  nav: {
    backgroundColor: '#343b3a',
    textColor: 'white',
    activeTextColor: '#2AC420'
  }
}