import { useEffect, useState } from "../lib";

const Skill = () => {
  const [skills, setSkill] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/skills")
      .then((Response) => Response.json())
      .then((data) => setSkill(data));
  },[]);
  return `
        <section class="site-section section-skills">
            <div class="container">
                <div class="text-center">
                    <h3>My Skills</h3>
                    <img src="assets/img/lines.svg" class="img-lines" alt="lines">
                </div>
                <div class="row">
                    <div class="col-md-4">
                    ${skills.map((skill) => {
                      return `
                        <div class="skill">
                            <h4>${skill.skill}</h4>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" data-transitiongoal="100">
                            </div>
                        </div>
                        `
                    }).join(' ')}
                        
                        
                    </div>
                    
                </div>
            </div>
        </section>      
  `;
};

export default Skill;
