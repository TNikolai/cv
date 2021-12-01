import { css } from "@emotion/react";

import colorConstants from "./colorConstants";
import zIndexConstants from "./zIndexConstants";

const globalStyles = ({ fontColor, backgroundColor }) => css`
  @font-face {
    font-family: "Lato";
    src: url("Lato-Regular.woff2") format("woff2"),
      url("Lato-Regular.woff") format("woff");
    font-weight: 400;
  }

  @font-face {
    font-family: "Lato";
    src: url("Lato-Medium.woff2") format("woff2"),
      url("Lato-Medium.woff") format("woff");
    font-weight: 500;
  }

  @font-face {
    font-family: "Lato";
    src: url("Lato-Semibold.woff2") format("woff2"),
      url("Lato-Semibold.woff") format("woff");
    font-weight: 600;
  }

  @font-face {
    font-family: "Lato";
    src: url("Lato-Heavy.woff2") format("woff2"),
      url("Lato-Heavy.woff") format("woff");
    font-weight: 800;
  }

  :root {
    ${{ ...colorConstants }}
    ${{ ...zIndexConstants }}
  }

  html {
    font-size: 1rem;
    height: 100%;
  }

  body {
    margin: 0;
    font-family: Lato, sans-serif;
    font-size: 1rem;
    color: ${fontColor};
    background-color: ${backgroundColor};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
  }

  #root {
    height: 100%;
  }

  a {
    background: linear-gradient(to bottom, var(--black) 0%, var(--black) 100%);
    background-position: 0 100%;
    background-repeat: repeat-x;
    background-size: 4px 4px;
    color: var(--black);
    text-decoration: none;
  }

  a:hover {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg id='squiggle-link' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:ev='http://www.w3.org/2001/xml-events' viewBox='0 0 20 4'%3E%3Cstyle type='text/css'%3E.squiggle{animation:shift .3s linear infinite;}@keyframes shift {from {transform:translateX(0);}to {transform:translateX(-20px);}}%3C/style%3E%3Cpath fill='none' stroke='%23ff9800' stroke-width='2' class='squiggle' d='M0,3.5 c 5,0,5,-3,10,-3 s 5,3,10,3 c 5,0,5,-3,10,-3 s 5,3,10,3'/%3E%3C/svg%3E");
    background-position: 0 100%;
    background-size: auto 6px;
    background-repeat: repeat-x;
    text-decoration: none;
  }

  a.banner-policy-link {
    color: var(--colors-orange-base);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    list-style-type: none;
  }

  p {
    line-height: 1.5;
    text-rendering: initial;
    margin: 0;
  }

  input,
  textarea,
  button {
    border-radius: 0;
  }

  * {
    box-sizing: border-box;

    &:focus {
      outline: none;
    }
  }

  img {
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
`;

export default globalStyles;
