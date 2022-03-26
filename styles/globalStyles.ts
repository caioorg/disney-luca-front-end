import { createGlobalStyle } from "styled-components";
import { hexToRGB } from './hexToRGB'
import { device } from './responsive'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
    background: url(/background.png) no-repeat;
    background-color: #474859;
    height: 100vh;
    color: var(--white);

    @media ${device.mobileS} {
      background-size: inherit;
      background: url(/background-mobile.png) no-repeat;
    }
  }
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    border-radius: 10px;
  }
   
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${hexToRGB('#FFFFFF', 0.7)}; 
    border-radius: 10px;
  }
  
  :root {
    --white: #FFFFFF;
  }`;