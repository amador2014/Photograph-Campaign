import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    outline: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #__next {
    width: 100%;
    min-height: 100vh;
  }
`