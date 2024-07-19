
import styled from 'styled-components'
import * as Router from 'react-router-dom'

import * as Core from 'core'

interface LinkProps {
  $active: boolean
}

const fill = (args: LinkProps, theme: Core.I.Theme) => {
  if (theme.name === 'dark') return args.$active ? theme.button.variants.primary.fg : theme.text.primaryColor
  return args.$active ? theme.button.variants.primary.bg : theme.text.primaryColor
}

export const Link = styled(Router.Link)<LinkProps>`
  fill: ${props => fill(props, props.theme)};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    & > * {
      transform: scale(1.2);
    }
  }
`