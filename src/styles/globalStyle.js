import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html
  body {
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    box-sizing: border-box;
    margin-block: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  *, ::after, ::before {
    box-sizing: border-box;
  }

`

export default GlobalStyle
