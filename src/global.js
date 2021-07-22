import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;700;800&display=swap");
    @import url('https://fonts.googleapis.com/css2?family=Zen+Tokyo+Zoo&display=swap');

    * {
        font-family: "Montserrat", "Ubuntu", "Roboto", sans-serif;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        color: ${({ theme }) => theme.light};
        outline-color: ${({ theme }) => theme.medium};
        
        &::after, &::before {
            box-sizing: border-box;
        }
    }

    html, body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
}
`;
