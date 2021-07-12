import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    font-family: "Montserrat", "Ubuntu", "Roboto", sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: ${({ theme }) => theme.light};
    
    &::after, &::before {
        box-sizing: border-box;
    }
}

html {
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;700;800&display=swap");
}

html, body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

p {
    margin-bottom: 1rem;
}

`;
