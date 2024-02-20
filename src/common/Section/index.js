import { Wrapper, Body, Header, Title } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <Wrapper>
    <Header>
      <Title> {title}</Title>
      {extraHeaderContent}
    </Header>
    <Body>
      {body}
    </Body>
  </Wrapper>
);

export default Section;