
import styled from "styled-components"

import Page from "components/templates/Page"

export const CallDetails = styled(Page)`
  padding-top: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  /* padding-left: 0; */



  .header {
    width: 100%;
    height: 110px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    font-size: 40px;
    text-transform: capitalize;
    border-bottom: 1px solid ${props => props.theme.border.color};

    & > :not(:last-child) {
      margin-right: 1rem;
    }
  }


  .sub_header {
    height: 60px;
    border-bottom: 1px solid ${props => props.theme.border.color};
    padding-left: 20px;
    display: flex;
    align-items: center;
    width: 100%;

    & > * {
      font-size: 28px;
    }
  }


  .content {
    padding: 20px;
  }

  .info {
    flex-grow: 1;

    & > * {
      font-size: 22px;
    }

    & > :not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`