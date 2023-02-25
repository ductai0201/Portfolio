import { useEffect, useState } from "../lib";
import Header from "../components/header";

const projectDetail = ({ id }) => {
  const [projectDetails, setProject] = useState([]);
  const [projects,setProjects] = useState([])
  useEffect(async () => {
    const response = await fetch("http://localhost:3000/projects/" + id);
    const data = await response.json();
    setProject(data);
  }, []);

  useEffect(async ()=>{
    const response = await fetch("http://localhost:3000/projects");
    const data = await response.json();
    setProjects(data)
  },[])

  return `
    ${Header()}
    <head>
    <link href="/assetsprDetail/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="/assetsprDetail/assets/css/templatemo-572-designer.css">
    </head>
        <section class="explore-item">
          <div class="container expanded">
          
            <div class="row">
            <div class="col-lg-12">
                <div class="section-heading">
                    <h2>${projectDetails.name}</h2>
                </div>
                <div class="main-image">                   
                    <img src="${projectDetails.avt}" alt="imgProject">
                </div>
                <div class="project-info">
                    <div class="row">
                        
                        <div class="col-lg-2">
                            <div class="info-item">
                                <h6>Git:</h6>
                                <span><a href="${
                                  projectDetails.git
                                }">GitHub </a></span>
                            </div>
                        </div>
                        <div class="col-lg-2">
                            <div class="info-item">
                                <h6>Preview:</h6>
                                <span><a href="${
                                  projectDetails.preview
                                }">Preview</a></span>
                            </div>
                        </div>
                        <div class="col-lg-2">
                            <div class="info-item">
                                <h6>Time:</h6>
                                <span>${projectDetails.time}</span>
                            </div>
                        </div>
                        <div class="col-lg-2">
                            <div class="info-item">
                                <h6>Technology:</h6>
                                <span>${projectDetails.technology}</span>
                            </div>
                        </div>
                        <div class="col-lg-2">
                            <div class="info-item">
                                <h6>Date:</h6>
                                <span>${projectDetails.date}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <p>${projectDetails.descript}</p>
            </div>
            
            <div class="col-lg-12">
              <div class="row">
                ${
                  projectDetails.album
                    ? projectDetails.album
                        .map(
                          (image) => `
                  <div class="col-lg-4">
                    <img src="${image}" alt="">
                  </div>
                `
                        )
                        .join("")
                    : " "
                }
              </div>
            </div>

            
            <div class="col-lg-12">
                <div class="down-content">
                    <p>${projectDetails.descript}</p>
                </div>
            </div>
            <div class="col-lg-12">
                <div class="projects-pagination">
                    <div class="row">
                    <div class="row left-pagination">
                    ${projects.filter((project)=> project.id != id).map((moreProject)=>{
                        return `
                            <div class="left-pagination col-md-6">
                                <img class="float-start" src="${moreProject.avt}" alt="">
                                <div class="right-content">
                                    <a href="/#/project/${moreProject.id}"><h6>${moreProject.name}</h6></a>
                                    <span>Interior Design</span>
                                </div>
                            </div>
                       
                        `
                    }).join('')}
                        </div>  
                    </div>
                </div>
            </div>
        </div>
            
            
        </div>
      </section>`;
};

export default projectDetail;
