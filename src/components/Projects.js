import { useEffect, useState } from "../lib";

const Projects = () => {
  const [projects, setProject] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/projects")
          .then((Response) => Response.json())
          .then((data) => setProject(data));
      },[]);
  return `
  <section id="portfolio" class="site-section section-portfolio">
  <div class="container">
      <div class="text-center">
          <h3>My recent Works</h3>
          <img src="assets/img/lines.svg" class="img-lines" alt="lines">
      </div>
      <div class="row">
      ${projects.map((project)=>{
        return `
            <div class="col-md-4 col-xs-6">
              <div class="portfolio-item">
                  <img src="${project.avt}" class="img-res" alt="">
                  <div class="portfolio-item-info">
                      <h4>${project.name}</h4>
                      <a href="/#/project/${project.id}" data-toggle="modal" ><span class="glyphicon glyphicon-eye-open"></span></a>
                      <a href="#"><span class="glyphicon glyphicon-link"></span></a>
                  </div><!-- /.portfolio-item-info -->
              </div><!-- /.portfolio-item -->
          </div>
        `
      }).join('')}
          
      </div>
  </div>
</section>`;
};

export default Projects;
