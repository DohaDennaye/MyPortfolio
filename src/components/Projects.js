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
    },
    {
      title: "Système de gestion d'Importation",
      description: "TypeScript, Node.js, Express.js,Tailwind CSS",
      imgUrl: projImg2,
    },
    {
      title: "Interface Application gestion des demandes de maintenance",
      description: "Flutter, Dart",
      imgUrl: projImg1,
    },
    {
      title: "Système de gestion d'Importation",
      description: "HTML,Bootstrap,css,javascript",
      imgUrl: projImg3,
    },
  ];

  // 👉 Séparation automatique
  const tab1Projects = projects.slice(0, 3);  // 3 premiers
  const tab2Projects = projects.slice(3);     // tous les autres

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Each project I’ve built reflects my passion for creating modern and efficient digital experiences.  From frontend design to backend logic, I focus on delivering responsive, user-friendly, and high-performance web applications.  Below, you’ll find some of my favorite projects that showcase my skills in full-stack development and creative problem-solving.</p>

                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>

                    {/* TAB 1 */}
                    <Tab.Pane eventKey="first">
                      <Row>
                        {tab1Projects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>

                    {/* TAB 2 : projets 4+ */}
                    <Tab.Pane eventKey="second">
                      <Row>
                        {tab2Projects.length > 0 ? (
                          tab2Projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))
                        ) : (
                          <p>No more projects.</p>
                        )}
                      </Row>
                    </Tab.Pane>

                    {/* TAB 3 */}
                    <Tab.Pane eventKey="third">
                      <p></p>
                    </Tab.Pane>

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