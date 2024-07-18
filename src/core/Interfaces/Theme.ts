
import * as I from '.'

export interface Theme {
  name: string
  app: {
    padding: string
  }
  background: {
    primaryColor: string;
    secondaryColor: string;
    tertiaryColor: string;
  }
  button: {
    padding: string
    variants: {
      [key: string]: I.ButtonStyle
    }
  }
  border: {
    radius: string;
    width: string;
    color: string;
  }
  text: {
    primaryColor: string;
    secondaryColor: string;
    disabledColor: string;
  }
  nav: {
    backgroundColor: string;
    textColor: string;
    activeTextColor: string;
  }
}