import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 1.3rem;
        box-sizing: border-box;
        font-family: 'Arial Narrow Bold', sans-serif;
        background-color: #FFFAFA;
   
        }

    #titleone {
        padding: 0.1em 2em 2.9rem;
        justify-content: center;
        color: #5D3FD3;
        display: flex ;
        font-size: 3rem;

    }
    #titleimg {
        padding: 0.1em 2em 2.9rem;
        color: #5D3FD3;
        align-items: left;
        display: flex ;
        font-size: 3rem;
        display: flex;
        display: flex ;
        align-items: flex-start ;
        justify-content: center ;
        margin: 15%;
    }

    #subtitle {
        justify-content: right ;
        padding: 0.1em 0.5rem 0.1em;
        color: #F08080;
        font-size: 1.4rem;
    }

    #subtitleimg {
        padding: 0.1em 0.5rem 0.1em;
        color: #F08080;
        font-size: 1.4rem;
        display: flex;
        display: flex ;
        align-items: center ;
        justify-content: center ;
        margin: 15%;
     ;
    }
    
    #text {
        padding: 0.1em 0.5em 3rem;
        color: #6699CC ;
        font-size: 1rem;
        }

    #textimg {
        padding: 0.1em 0.5em 3rem;
        color: #6699CC ;
        font-size: 1rem;
        display: flex;
        display: flex ;
        align-items: center ;
        justify-content: center ;
        margin: 15%;
    
        }

    #icon { 
        display: flex ;
        align-items: center ;
        justify-content: center ;
        margin: 15%;
        height: 200px;
        height: 200px;
        border-radius: 50%;
        display: flex;
    }

   

    body {
        font-size: 1.6rem;
        background: ${props => props.theme.homeBackground};

        height: 100svh;
        display: flex;
     
    }

`