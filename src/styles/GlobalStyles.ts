import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`

    @font-face {
        font-family: 'Premier League';
        src: url("../assets/fonts/PremierLeague-Bold.ttf") format("opentype");
        font-weight: bold;

    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: #B8B8AA;
        font-family: Arial, Helvetica, sans-serif;
        //#B8B8AA
    }
    
`