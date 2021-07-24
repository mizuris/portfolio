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
    }

    ::-webkit-scrollbar {
        width: 0.5rem;
    }

    ::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.mainDark};
    }

    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.medium};
        border-radius: 1rem;
        
        &:hover {
            background: ${({ theme }) => theme.special};
        }
    }

    li, p {
        font-size: 0.8rem;
        line-height: 1.5rem;
    
        @media only screen and (min-width: 2000px) {
            font-size: 1.2rem;
            line-height: 2rem   ;
        } 
    }

`;
