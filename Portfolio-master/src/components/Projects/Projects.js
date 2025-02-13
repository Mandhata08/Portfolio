import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import car from "../../Assets/Projects/car.png";
import hospital from "../../Assets/Projects/hospital.png";
import multi_hospital from "../../Assets/Projects/Multi_hospital.png";

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
              imgPath={hospital}
              isBlog={false}
              title="Hospital Management System"
              description="It is a Hospital Management System build with CSS, JavaScript,PHP and SCSS . Have features which allows user for Appointment booking , view priscription and manage patients and doctors."
              ghLink="https://github.com/Mandhata08/hospital-management.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={multi_hospital}
              isBlog={false}
              title="Health Stack"
              description="It is a multi hospital management system build with Python,html,css etc . Have features which allows user for Appointment booking , view priscription and manage patients and doctors.As patient can buy medicies online and also can view the status of the order and many more features."
              ghLink="https://github.com/Mandhata08/HealthStake.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={car}
              isBlog={false}
              title="Car rentals"
              description="Online car rental system is a web-based application that allows customers to search for available cars, filter them based. I have build this project using HTML, CSS, JavaScript."
              ghLink="https://github.com/Mandhata08/Car-Rental.git"             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
