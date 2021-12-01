import React from "react";
import Styled from "./Socials.styled";

const socials = [
  {
    src: "https://cdn-icons-png.flaticon.com/512/1051/1051326.png",
    href: "https://github.com/TNikolai",
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/1051/1051333.png",
    href: "https://www.linkedin.com/in/nicolai-trandafil-9b926ab2",
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/1051/1051331.png",
    href: "https://twitter.com/Nick17546356",
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/2111/2111543.png",
    href: "https://medium.com/@nicolai.trandafil",
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/1051/1051368.png",
    href: "https://t.me/nicolaiTrandafil",
  },
];

const Socials = () => (
  <Styled.Socials>
    {socials.map(({ src, href }) => (
      <a href={href} key={src}>
        <Styled.Img src={src} />
      </a>
    ))}
  </Styled.Socials>
);

export default Socials;
