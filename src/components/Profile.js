import React from "react";
import Styled from "./Profile.styled";
import Heading from "./Heading.styled";
import Text from "./Text.styled";

const Profile = () => (
  <Styled.Profile>
    <Styled.Image src="hime.png" />
    <Styled.NameWraper>
      <Styled.Name size="l" isFixedSize as={Heading}>
        Trandafil Nicolai
      </Styled.Name>
      <Heading as={Styled.Position} size="m">
        Sr. Software Engineer
      </Heading>
    </Styled.NameWraper>
    <Styled.Contacts>
      <adress as={Text}>📍 Chisinau Moldova </adress>
      <Text>⏳ GMT+2 </Text>
      <a href="tel:+373-69-459-379" as={Text}>
        📞 69459379
      </a>
      <a href="mailto:nikolai.trandafil@gmail.com" as={Text}>
        ✉️ nikolai.trandafil@gmail.com
      </a>
      <a href="https://github.com/TNikolai" as={Text}>
        Github emoji is needed
      </a>
    </Styled.Contacts>
  </Styled.Profile>
);

export default Profile;
