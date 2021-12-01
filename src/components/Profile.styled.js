import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";

const Styled = {};

Styled.Profile = styled.div`
  background-color: green;
  display: flex;
`;

Styled.Image = styled.img`
  width: 230px;
  height: 260px;
`;

Styled.NameWraper = styled.div`
  background-color: silver;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

Styled.Position = styled.h2``;

Styled.Name = styled.h1`
  font-weight: 800;
  font-size: 2.35rem;
  text-decoration: underline;
`;
export default Styled;
