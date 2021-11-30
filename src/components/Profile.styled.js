import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";

const Styled = {};

Styled.Profile = styled.div`
  background-color: green;
  display: flex;
`;

Styled.Image = styled.img``;

Styled.NameWraper = styled.div`
  background-color: silver;
`;

Styled.Position = styled.h2``;

Styled.Name = styled.h1`
  font-weight: 800;
  font-size: 2.35rem;
  text-decoration: underline;
`;

Styled.Contacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem 1rem;
  flex-wrap: wrap;
  margin: 2rem;
  background-color: white;
`;
export default Styled;
