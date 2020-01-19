import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  body{
    font-family: 'Roboto', sans-serif;
  }
  ul {
    list-style: none;
    padding-inline-start: 0;
  }

  li {
    display: inline-block;
    list-style-type: none;
  }
  h2 {
    color: rgb(8, 21, 255);
    font-family: 'Roboto', sans-serif;
  }
  button {
    padding: 3px;
    border-radius: 3px;
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    box-shadow: 0 0 20px rgba(0,0,0,0.1);
    font-weight: bold;
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

  table {
    width: 100%;
    border-radius: 3px;
    font-family: 'Roboto', sans-serif;
    border-collapse: collapse;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0,0,0,0.1);
  }
  th,
  td {
    padding: 10px;
    background-color: rgba(255,255,255,0.2);
    color: black;
  }
  th {
    text-align: left;
  }
  thead {
    th {
      background-color: rgb(8,21,255);
      color: white;
    }
  }
  tbody {
    tr {
      &:hover {
        background-color: #fe1100;
        color: white;
      }
    }
}`

export default GlobalStyles;
