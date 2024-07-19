
import styled from 'styled-components'

import Button from 'components/base/Button'

interface MobileProps {
  $showSubMenu: boolean
}

export const MobileNav = styled.nav<MobileProps>`
  height: 80px;
  background-color: ${props => props.theme.background.secondaryColor};
  border-top: 1px solid ${props => props.theme.border.color};
  position: relative;


  .menu {

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    z-index: 50;
    position: relative;
    height: 100%;
    background-color: ${props => props.theme.background.secondaryColor};

    & > :not(:last-child) {
      border-right: 1px solid ${props => props.theme.border.color};
    }
  }

  .sub_menu {
    z-index: ${props => props.$showSubMenu ? 40 : -1};
    position: absolute;
    background-color: ${props => props.theme.background.secondaryColor};
    top: ${props => props.$showSubMenu ? '-121px' : '200px;'};
    left: 0;
    width: 100%;
    transition: all 0.3s ease-in;
    opacity: ${props => props.$showSubMenu ? 1 : 0};

    &__link {
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      /* padding */
    }

    & > :not(:last-child) {
      border-bottom: 1px solid ${props => props.theme.border.color};
    }
  }
/* 
  .link {
    fill: ${props => props.theme.button.variants.primary.fg}
  } */

  .mobile_link {
  }
`

interface SubMenuButtonProps {
  $active: boolean
}

export const SubMenuButton = styled(Button)<SubMenuButtonProps>`
    height: 100%;
    fill: ${props => props.$active ? props.theme.button.variants.primary.fg : props.theme.text.primaryColor};

    &:hover {
      background-color: transparent;
      fill: ${props => props.$active ? props.theme.button.variants.primary.fg : props.theme.text.primaryColor};
      
      & > * {
        transform: scale(1.2);
      }
    }
`