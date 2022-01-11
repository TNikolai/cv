import React from "react";
import Styled from "./CV.styled";
import Profile from "./components/profile/Profile";
import Experience from "./components/experience/Experience";

const CV = () => (
  <Styled.Layout>
    <Profile />
    <Experience />
  </Styled.Layout>
);

export default CV;
