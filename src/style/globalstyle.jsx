import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyles = createGlobalStyle` 
    ${reset}
    * {
        font-family: "Gowun Batang", serif !important;
        box-sizing: border-box;
    }
    html {
        height: 100%;
    }
    #root {
        height: 100%;
    }
    .App {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
    }
    body {
        font-family: "Gowun Batang", serif;
        margin: 0 auto;
        padding: 0;
        width: 100%;
        height: 100%;
        background-color: #15202b;
    }
    button{
        cursor: pointer;
    }
    #dark {
        background-color: #15202b;
        color: #f7f9f9;
    }
    #light {
        background-color: #f7f9f9;
        color: #15202b
    }
    #dark .mainFront {
        background-color: #f7f9f9da;
    }
    #light .mainFront {
        background-color: #15202bda;
    }
    .switch {
        display: flex;
        height: 100px;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
    }
    .switch label {
        margin: 10px;
    }
    #light .switch label {
        color: #15202b;
    }
    #dark .switch label {
        color: #f7f9f9;
    }
    .TodoList{
        max-width: 1200px;
        width: 100%;
        margin: auto;
    }
    .buttonSet button{
        border: none;
        margin: 30px 5px 0px 5px;
    }
    .button {
        border: none;
        margin-left: 10px;
    }
    #light .button{
        background-color: #f7f9f9;
        color: #15202b;
    }
    #dark .button{
        background-color: #15202b;
        color: #f7f9f9;
    }
    #light .buttonSet button{
        background-color: #f7f9f9;
        color: #15202b;
    }
    #dark .buttonSet button{
        background-color: #15202b;
        color: #f7f9f9;
    }
`;

export default GlobalStyles;
