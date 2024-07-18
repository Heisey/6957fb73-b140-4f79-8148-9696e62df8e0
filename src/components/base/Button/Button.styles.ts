
import styled from 'styled-components'

import * as Core from 'core'

interface ButtonProps {
  $buttonTheme: keyof typeof Core.config.theme.dark.button.variants
  $variant: Core.I.ButtonVariant
}

export const backgroundColor = (args: ButtonProps, theme: Core.I.Theme) => {
  if (args.$variant !== Core.Keys.buttonVariants.DEFAULT) return 'transparent'
  return theme.button.variants[args.$buttonTheme].bg
}

export const border = (args: ButtonProps, theme: Core.I.Theme) => {
  if (args.$variant !== Core.Keys.buttonVariants.OUTLINE) return 'none'
  return `1px solid ${theme.button.variants[args.$buttonTheme].fg}`
}

export const color = (args: ButtonProps, theme: Core.I.Theme) => {
  if (args.$variant === Core.Keys.buttonVariants.GHOST) return 'inherit'
  return theme.button.variants[args.$buttonTheme].fg
}

export const hoverBackgroundColor = (args: ButtonProps, theme: Core.I.Theme) => {
  if (args.$variant === Core.Keys.buttonVariants.GHOST) return 'transparent'
  return theme.button.variants[args.$buttonTheme].hoverBg
}

export const hoverColor = (args: ButtonProps, theme: Core.I.Theme) => {
  if (args.$variant === Core.Keys.buttonVariants.GHOST) return 'inherit'
  return theme.button.variants[args.$buttonTheme].hoverFg
}

export const Button = styled.button<ButtonProps>`
  background-color: ${props => backgroundColor(props, props.theme)};
  color: ${props => color(props, props.theme)};
  padding: 8px 12px;
  transition: all 0.3s ease-in;
  border: ${props => border(props, props.theme)};

  height: fit-content;
  cursor: pointer;
  &:hover {
    background-color: ${props => hoverBackgroundColor(props, props.theme)};
    color: ${props => hoverColor(props, props.theme)};  
  }
`