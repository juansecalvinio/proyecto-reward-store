import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        @font-face {
            font-family: 'DM Sans', sans-serif;
            src: url('https://fonts.googleapis.com/css?family=DM+Sans:500,700&display=swap');
        }
        font-family: 'DM Sans', sans-serif;
        margin: 0;
    }
`;