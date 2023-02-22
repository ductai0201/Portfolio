import { useEffect, useState } from "../lib";

const About = () => {
  const [about, setAbout] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/about")
      .then((Response) => Response.json())
      .then((data) => setAbout(data));
  }, []);

  return `
        <section id="about" class="site-section section-about text-center">
          <div class="container">
              <div class="row">
                  <div class="col-md-6 col-md-offset-3">
                      <h2>About</h2>
                      <img src="assets/img/lines.svg" class="img-lines" alt="lines">
                      ${about.map((content)=>{
                        return `<p>${content.content}</p>`
                      })}
                      
                      <a href="${about.link}" class="btn btn-fill" target="_blank" download>Download my cv</a>
                  </div>
              </div>
          </div>
      </section>`;
};

export default About;
