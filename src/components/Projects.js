import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Capture3.PNG";
import projImg2 from "../assets/img/Capture4.png";
import projImg3 from "../assets/img/GEI.PNG";
import projImg4 from "../assets/img/Capture5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Système de gestion de salaire et Employés",
      description: "Laravel, HTML, Bootstrap",
      imgUrl: projImg4,
      category: "Full Stack"
    },
    {
      title: "Système de gestion d'Importation",
      description: "TypeScript, Node.js, Express.js, Tailwind CSS",
      imgUrl: projImg2,
      category: "Full Stack"
    },
    {
      title: "Interface Application gestion des demandes de maintenance",
      description: "Flutter, Dart",
      imgUrl: projImg1,
      category: "Mobile"
    },
    {
      title: "Système de gestion d'Importation",
      description: "HTML, Bootstrap, CSS, JavaScript",
      imgUrl: projImg3,
      category: "Frontend"
    },
  ];

  // Dynamically get categories
  const categories = ["All", ...new Set(projects.map(p => p.category))];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Each project I’ve built reflects my passion for creating modern and efficient digital experiences. From frontend design to backend logic, I focus on delivering responsive, user-friendly, and high-performance web applications. Below, you’ll find some of my favorite projects that showcase my skills in full-stack development and creative problem-solving.</p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="All">

                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      {categories.map((cat, index) => (
                        <Nav.Item key={index} style={{ width: `${100 / categories.length}%` }}>
                          <Nav.Link eventKey={cat}>{cat}</Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>

                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      {categories.map((cat, index) => (
                        <Tab.Pane eventKey={cat} key={index}>
                          <Row>
                            {projects
                              .filter(project => cat === "All" || project.category === cat)
                              .map((project, idx) => (
                                <ProjectCard key={idx} {...project} />
                              ))}
                          </Row>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>

                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  )
}