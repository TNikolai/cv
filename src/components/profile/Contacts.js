import React from "react";
import Styled from "./Contacts.styled";
import Heading from "../Heading.styled";

const contacts = [
  {
    href: "https://goo.gl/maps/UpjMof2P8nfriJUy8",
    children: "📍 Chisinau Moldova",
  },
  { href: "tel:+373-69-459-379", children: "📞 69459379" },
  {
    href: "mailto:nikolai.trandafil@gmail.com",
    children: "✉️ nikolai.trandafil@gmail.com",
  },
];

const Profile = () => (
  <Styled.Contacts>
    {contacts.map(({ href, children }) => (
      <Styled.Anchor href={href} key={href}>
        <Heading size="m">{children}</Heading>
      </Styled.Anchor>
    ))}
  </Styled.Contacts>
);

export default Profile;
