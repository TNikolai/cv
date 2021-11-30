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
    color: ${fontColor};
    text-decoration: none;
    cursor: pointer;
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

  #optanon {
    direction: ltr;

    #optanon-popup-wrapper {
      right: auto;
    }
  }
`;

export default globalStyles;
