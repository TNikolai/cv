import colorConstants from "./src/styles/colorConstants";

const RGBA = (rgb, alpha) =>
  colorConstants[rgb].replace("rgb", "rgba").replace(")", `, ${alpha})`);

export default RGBA;
