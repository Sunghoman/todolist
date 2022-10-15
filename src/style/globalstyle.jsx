import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyles = createGlobalStyle` 
    ${reset}
    * {
        font-family: "Gowun Batang", serif !important;
        box-sizing: border-box;
    }
    body {
        font-family: "Gowun Batang", serif;
        font-weight: bold;
        margin: 0 auto;
        padding: 0;
        max-width: 1200px;
        min-width: 768px;
        background-color: rgb(21, 32, 43);
        color: rgb(247, 249, 249)
    }
    button{
        cursor: pointer;
    }
`;

export default GlobalStyles;
