import React from "react";
import Styled from "./Profile.styled";
import Heading from "./Heading.styled";

const Profile = () => (
  <div>
    <Styled.Image src="hime.png" />
    <Styled.Position as={Heading} size="m">
      Senior Software Engineer
    </Styled.Position>
    <Styled.Name as={Heading} size="l">
      {" "}
      Trandafil Nicolai{" "}
    </Styled.Name>
  </div>
);

export default Profile;
