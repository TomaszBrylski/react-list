import { Container } from "../../common/Container/styled";
import Header from "../../common/Header";
import Section from "../../common/Section";

const AuthorPage = () => (
  <Container>
    <Header title="Author" />
    <Section
      title="Tomasz Brylski"
      body={
        <>
          <strong>I am a frontend programming enthusiast</strong> who continuously explores the
          world of web technologies and hones my skills. Fascinated by
          innovations in the industry, I am constantly seeking new ways to
          create interactive and appealing user interfaces. <b>My path is one of
          continuous development</b> and deepening knowledge in the field of
          front-end, in search of <i>new possibilities</i> and <i>self-improvement</i> as a
          programmer.
        </>
      }
    />
  </Container>
);

export default AuthorPage;
