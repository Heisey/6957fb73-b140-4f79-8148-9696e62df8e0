
import styled from 'styled-components'

import Button from 'components/base/Button'
import * as Core from 'core'

export const PhoneList = styled.div`
  color: white;
  width: 400px;
  overflow-y: auto;

  ul {
    overflow: scroll;
    border-top: 1px solid ${props => props.theme.border.color};
  }

  .buttons {
    width: 100%;

    &__lists {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }

    &__archive {
      width: 100%;
    }
  }
`

interface FilterButtonProps {
  active: boolean
}

const filterButtonBg = (args: FilterButtonProps, theme: Core.I.Theme) => {
  if (args.active) return theme.button.variants.primary.hoverBg
  return theme.button.variants.primary.bg
}

const filterButtonFg = (args: FilterButtonProps, theme: Core.I.Theme) => {
  if (args.active) return theme.button.variants.primary.hoverFg
  return theme.button.variants.primary.fg
}

export const FilterButton = styled(Button)<FilterButtonProps>`
  background-color: ${props => filterButtonBg(props, props.theme)};
  color: ${props => filterButtonFg(props, props.theme)}
`