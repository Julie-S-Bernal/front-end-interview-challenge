import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  body{
    font-family: 'Roboto', sans-serif;
  ul {
    list-style: none;
    text-align: center;
  }

   li {
    display: inline-block;
    list-style-type: none;
  }

  h1 {
   color: white;
   font-family: 'Roboto', sans-serif;
  }
  h2 {
    color: rgb(8, 21, 255);
    font-family: 'Roboto', sans-serif;
  }
  h3 {
    color: white;
    font-size: 1.4em;
    font-family: 'Roboto', sans-serif;
  }
  p {
    color: white;
    font-size: 1em;
    font-family: 'Roboto', sans-serif;
   }
  span {
    color: #f04397;
    font-weight: bold;
    font-size: 1.2em;
    font-family: 'Roboto', sans-serif;
  }

}`

export default GlobalStyles;
