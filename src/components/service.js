import { useEffect, useState } from "../lib";

const service = () => {
  const [services, setService] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/service")
      .then((Response) => Response.json())
      .then((data) => setService(data));
  },[]);
  return `
            <section id="service" class="site-section section-services overlay text-center">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h3>What i do</h3>
                            <img src="assets/img/lines.svg" class="img-lines" alt="lines">
                        </div>
                        
                        <div class="row ">
                            <div class="service">
                                <img src="/assets/img/front-end.svg" alt="Front End Developer">
                                ${services.map((service)=>{
                                    return `
                                        <h4>${service.title}</h4>
                                        <p>${service.content}</p>
                                    `
                                })}
                               
                            </div><!-- /.service -->
                        </div>
                        
                    </div>
                </div>
            </section>`;
};

export default service;
