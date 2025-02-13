import { createGlobalStyle } from "styled-components";
import { COLOR } from "..";

const GlobalStyle = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
    * {
        color: ${COLOR.TEXT};
        font-family: "Open Sans";
    }
`;

export { GlobalStyle }