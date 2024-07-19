
import styled from 'styled-components'
import Page from 'components/templates/Page'

export const About = styled(Page)`
  .title {
    font-size: 40px;
  }

  .list {
    border-right: none;
    & > :not(:last-child) {
      margin-bottom: 1rem;
    }

    &__item {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }

    &__icon {
      width: fit-content;
      margin-right: 1rem;
    }

    &__text {
      font-size: 18px;
    }
  }

  .message {
    font-size: 21px;
    margin-bottom: 1rem;
  }

  .links {
    display: flex;

    & > * {
      margin-top: 1rem;
    }
    & > :not(:last-child) {
      margin-right: 2rem;
    }
  }

  .space {
    margin-bottom: 3rem;
  }

`