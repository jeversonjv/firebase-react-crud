import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;   
    }

    html, body, #root{
        min-height: 100%;
        font-family: 'Open Sans', sans-serif;
    }

    body{
        background: #eee;
    }

`;