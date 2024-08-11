import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 1.3rem;
        box-sizing: border-box;
        font-family: 'Arial Narrow Bold', sans-serif;
        background-color: #FFFAFA;
        }

    #title {
        padding: 0.1em 2em 2.9rem;
        justify-content: center;
        color: #5D3FD3;
        align-items: left;
        display: flex ;
        font-size: 3rem;

    }

    #subtitle {
        justify-content: right ;
        padding: 0.1em 0.5rem 0.1em;
        color: #F08080;
        font-size: 1.4rem;
    }
    
    #text {
        padding: 0.1em 0.5em 3rem;
        color: #6699CC ;
        font-size: 1rem;
        }



    body {
        font-size: 1.6rem;
        background: ${props => props.theme.homeBackground};

        height: 100svh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

`