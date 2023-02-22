import { useEffect, useState } from "../lib";

const Hero = () => {
    const [infors, setInfor] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/infor")
      .then((Response) => Response.json())
      .then((data) => setInfor(data) );
  }, []);
  return `
            <div id="hero" class="hero">
                <div class="container">
                    <div class="row">
                        ${infors.map((infor)=>{
                            return `
                            
                            <div class="col-md-6 ">
                                <h1>${infor.name}</h1>
                                <div class="page-scroll">
                                    <p class="job-title">${infor.content}</p>
                                    <a href="#contact" class="btn btn-fill ">Hire me</a>
                                    <div class="clearfix visible-xxs"></div>
                                    <a href="#portfolio" class="btn btn-border">Explore more</a>
                                </div>
                            </div>
                        
                            <div class="col-md-6 ">
                                <img src="${infor.avt}" alt="Robinhood">
                            </div>
                            `
                        })}

                    </div>
                </div>
            </div>`;
};

export default Hero;
