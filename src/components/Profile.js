import React from "react";
import Styled from "./Profile.styled";
import Heading from "./Heading.styled";
import Contacts from "./Contacts";
import Socials from "./Socials";

const Profile = () => (
  <Styled.Profile>
    <Styled.Image src="avatar.jpg" />
    <Styled.NameWraper>
      <Heading as={Styled.Position} size="m">
        Sr. Software Engineer
      </Heading>
      <Styled.Name size="l" isFixedSize as={Heading}>
        Trandafil Nicolai
      </Styled.Name>
      <Socials />
    </Styled.NameWraper>
    <Contacts />
  </Styled.Profile>
);

export default Profile;
