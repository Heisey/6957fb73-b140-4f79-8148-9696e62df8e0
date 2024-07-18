
import styled from 'styled-components'

interface Props {
  incoming: boolean
}

export const PhoneListItem = styled.li<Props>`

  .container {
    display: flex;
    width: 100%;
    border-bottom: 1px solid ${props => props.theme.border.color};
    padding: 10px 25px;
    position: relative;
    transition: all 0.3s ease-in;
    z-index: 10;

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
  }

  .text {
    color: white;
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
    transform: ${props => props.incoming ? `rotate(150deg)` : 'rotate(330deg)'};
  }
`