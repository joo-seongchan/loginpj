import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const Style = createGlobalStyle`
${reset}

*{
    box-sizing: border-box;
}
body{
    background-color: #1d1d1d;
}
a{
    text-decoration: none;
    color: black;
}
`;
