
import styled from 'styled-components'

export const Mobile = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    width: 100%
  }

  .header {
    padding: 20px 20px;
  }
`