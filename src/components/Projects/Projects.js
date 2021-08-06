import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import Envoy from "../../Assets/Projects/Envoy.png";
import Revv from "../../Assets/Projects/Revv.png";
import TripAdvisor from "../../Assets/Projects/TripAdvisor.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Envoy}
              isBlog={false}
              title="Envoy"
              description="Envoy ceating a world where work places work better.From people to packages, Envoy helps you handle everything that comes through your company’s front door.By building smart tools envoy making to reduce workload on you."
              link="https://github.com/Afzal95/envoy.git"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Revv}
              isBlog={false}
              title="Revv"
              description="Revv is a online car rental platform where user can rental a car for hours or days or he can subscribe to months and year also. He can choose the selective car which he want. "
              link="https://github.com/avinashkumarsinha007/revv_clone.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TripAdvisor}
              isBlog={false}
              title="TripAdvisor"
              description="Tripadvisor, Inc. is an American online travel company that operates a website and mobile app with user-generated content and a comparison shopping website. It also offers online hotel reservations and bookings for transportation, lodging, travel experiences, and restaurants."
              link="https://github.com/Sathyaprakashsp666/team-helium--trip_advicer_Clone.git"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
