import { createGlobalStyle } from 'styled-components'
import { NProgressStyled } from './nprogress'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 6.25%;
  }

  ${NProgressStyled}

  body {
    font: 400 16rem Roboto, sans-serif;
  }
`
