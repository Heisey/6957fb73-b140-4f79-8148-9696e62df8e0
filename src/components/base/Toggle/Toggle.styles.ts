
import styled from 'styled-components'

interface ToggleProps {
  checked?: boolean
}

export const Toggle = styled.div<ToggleProps>`
  display: flex;
  align-items: center;
  
  .label {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 25px;
  }

  .input {
    opacity: 0;
    width: 0;
    height: 0;
    &:checked + span {
      background-color: #2196F3;
    }
    &:checked + span:before {
      transform: translateX(25px);
    }
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: .4s;
    border-radius: 25px;

    &:before {
      position: absolute;
      content: "";
      height: 21px;
      width: 21px;
      left: 2px;
      bottom: 2px;
      background-color: white;
      transition: .4s;
      border-radius: 50%;
    }
  }
`