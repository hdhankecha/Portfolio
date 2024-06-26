  import meter1 from "../assets/img/meter1.svg";
  import meter2 from "../assets/img/meter2.svg";
  import meter3 from "../assets/img/meter3.svg";
  import Carousel from 'react-multi-carousel';
  import 'react-multi-carousel/lib/styles.css';
  import arrow1 from "../assets/img/arrow1.svg";
  import arrow2 from "../assets/img/arrow2.svg";
  import colorSharp from "../assets/img/color-sharp.png"

  export const Skills = () => {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
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

    return (
        <section className="skill" id="skills">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="skill-bx wow zoomIn">
                  <h2>My Skills</h2>
                  <div className="skills-list">
                  <div className="skill-item">
                    <span>Python</span>
                  </div>
                  <div className="skill-item">
                    <span>React</span>
                  </div>
                  <div className="skill-item">
                    <span>Django</span>
                  </div>
                  <div className="skill-item">
                    <span>Tailwind</span>
                  </div>
                  <div className="skill-item">
                    <span>CSS</span>
                  </div>
                  <div className="skill-item">
                    <span>JavaScript</span>
                  </div>
                  <div className="skill-item">
                    <span>HTML</span>
                  </div>
                  <div className="skill-item">
                    <span>Bootstrap</span>
                  </div>
                  <div className="skill-item">
                    <span>MongoDB</span>
                  </div>
                  <div className="skill-item">
                    <span>MySQL</span>
                    </div>
                    <div className="skill-item">
                    <span>Git</span>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
      </section>
  );
}

