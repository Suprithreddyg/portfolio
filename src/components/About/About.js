import React from "react";
import { Container} from "react-bootstrap";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <h1 className="project-heading">
          Professional Skillset
        </h1>
        <Techstack />
        <h1 className="project-heading">
          Tools
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
