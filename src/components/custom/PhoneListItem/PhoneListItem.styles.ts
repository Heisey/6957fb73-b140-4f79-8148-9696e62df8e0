
import styled from 'styled-components'

interface Props {
  $incoming: boolean
}

export const PhoneListItem = styled.li<Props>`
  padding: 0;
  display: block;

  .container {
    display: flex;
    width: 100%;
    border-bottom: 1px solid ${props => props.theme.border.color};
    padding: 10px 25px;
    position: relative;
    transition: all 0.3s ease-in;
    z-index: 10;
    color: ${props => props.theme.text.primaryColor};
    text-decoration: none;
    height: 100%;

    &:hover {
      &:after {
        background-color: #ffffff20;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 9;
      }
    }
  }

  .icons {
    position: relative;
    margin-right: 15px;
  }

  .to {
    display: flex;
    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }

  .text {
    color: ${props => props.theme.text.primaryColor};
    display: block;
    
    &:not(:last-child) {
      margin-right: 5px;
    }
  }

  .via {
    color: #736867;
  }

  .arrow {
    position: absolute;
    top: 4px;
    left: 8px;
    transform: ${props => props.$incoming ? `rotate(150deg)` : 'rotate(330deg)'};
  }


`