import styled from "@emotion/styled";

const Styled = {};

Styled.Profile = styled.div`
  display: flex;
`;

Styled.Image = styled.img`
  width: 14.375rem;
  height: 16.25rem;
`;

Styled.NameWraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1.3rem;
`;

Styled.Position = styled.h2``;

Styled.Name = styled.h1`
  font-weight: 800;
  font-size: 2.35rem;
  text-decoration: underline;
`;
export default Styled;
