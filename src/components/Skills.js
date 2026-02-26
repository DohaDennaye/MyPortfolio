import { CodeSlash, Terminal, Database, Tools, Award } from "react-bootstrap-icons";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skillList = [
    { title: "Front-end Development", icon: <CodeSlash size={60} color="#ff0080" /> },
    { title: "Back-end Development", icon: <Terminal size={60} color="#7928ca" /> },
    { title: "Database Management", icon: <Database size={60} color="#ff0080" /> },
    { title: "DevOps & Tools", icon: <Tools size={60} color="#7928ca" /> },
    { title: "Agile & Planning", icon: <Award size={60} color="#ff0080" /> },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Technical Skills</h2>
              <p>A showcase of the technologies and methodologies I've mastered to build scalable, high-performance web applications.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {skillList.map((skill, index) => (
                  <div className="item" key={index}>
                    <div className="skill-icon-wrap">
                      {skill.icon}
                    </div>
                    <h5>{skill.title}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Color Sharp" />
    </section>
  )
}
