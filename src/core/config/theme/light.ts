
import * as I from '../../Interfaces'
import * as Keys from '../../keys'

export const light: I.Theme = {
  name: 'light',
  app: {
    padding: '20px'
  },
  background: {
    primaryColor: 'white',
    secondaryColor: '#f5f5f5',
    tertiaryColor: '#e0e0e0'
  },
  button: {
    padding: '10px',
    variants: {
      [Keys.buttonThemes.PRIMARY]: {
        fg: 'white',
        bg: '#2AC420',
        hoverBg: '#f5f5f5',
        hoverFg: '#2AC420'
      },
      [Keys.buttonThemes.DANGER]: {
        fg: '#b0170c',
        bg: '#b0170c',
        hoverBg: '#b0170c',
        hoverFg: 'white'
      }
    }
  },
  border: {
    color: '#2AC420',
    width: '2px',
    radius: '10px',
  },
  text: {
    primaryColor: 'black',
    secondaryColor: '#2AC420',
    disabledColor: 'grey'
  },
  nav: {
    backgroundColor: '#f5f5f5',
    textColor: 'black',
    activeTextColor: '#2AC420'
  }
}