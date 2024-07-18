
import styled from 'styled-components'

export const PhoneList = styled.div`
  color: white;
  width: 400px;

  ul {
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