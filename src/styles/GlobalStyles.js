import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
     * {
        font-family: 'Outfit', sans-serif;
        color: ${p => p.theme.textColor}
     }
     h1 {
        font-size: 32px;
     }
     h2 {
        font-size: 24px;
     }
     h3 {
        font-size: 24px;
     }
     h4 {
        font-size: 18px;
     }
`