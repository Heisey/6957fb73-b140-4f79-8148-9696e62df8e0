
import * as I from '../../Interfaces'
import * as Keys from '../../keys'

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
      [Keys.buttonThemes.PRIMARY]: {
        fg: '#2AC420',
        bg: '#343b3a',
        hoverBg: '#2AC420',
        hoverFg: '#343b3a'
      },
      [Keys.buttonThemes.DANGER]: {
        fg: '#b0170c',
        bg: '#343b3a',
        hoverBg: '#b0170c',
        hoverFg: '#343b3a'
      },
      [Keys.buttonThemes.DISABLED]: {
        fg: '#7d7d7d',  
        bg: '#343b3a',  
        hoverBg: '#343b3a',
        hoverFg: '#7d7d7d' 
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