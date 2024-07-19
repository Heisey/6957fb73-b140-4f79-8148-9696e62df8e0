
import styled from 'styled-components'
import * as Router from 'react-router-dom'

interface LinkProps {
  $active: boolean
}

export const Link = styled(Router.Link)<LinkProps>`
  fill: ${props => props.$active ? props.theme.button.variants.primary.fg : props.theme.text.primaryColor};
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