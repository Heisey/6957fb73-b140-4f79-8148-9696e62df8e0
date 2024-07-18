
import styled from 'styled-components'

import * as Core from 'core'

interface ButtonProps {
  $buttonTheme: keyof typeof Core.config.theme.dark.button.variants
}

export const Button = styled.button<ButtonProps>`
  background-color: ${props => props.theme.button.variants[props.$buttonTheme].bg};
  color: ${props => props.theme.button.variants[props.$buttonTheme].fg};
  padding: 8px 12px;
  transition: all 0.3s ease-in;

  height: fit-content;

  &:hover {
    background-color: ${props => props.theme.button.variants[props.$buttonTheme].hoverBg};
    color: ${props => props.theme.button.variants[props.$buttonTheme].hoverFg};  
  }
`