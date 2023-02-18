import { useEffect, useState } from "../../../lib";

const AdminSkills = () => {
  const [skills, setSkill] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/skills")
      .then((Response) => Response.json())
      .then((data) => setSkill(data));
  }, []);
  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click", function () {
        const id = this.dataset.id;

        fetch(`http://localhost:3000/skills/${id}`, {
          method: "DELETE",
        }).then(() => {
          const newForm = skills.filter((skill) => skill.id !== id);
          setSkill(newForm)
        });

      });
    }
  });
  return `
          <div class="container pt-5">
            <h1>Skill</h1>
            <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Skill</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                    <tbody>
                    ${skills
                      .map((skill, index) => {
                        return `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${skill.skill}</td>
                            <td>
                            <button data-id="${
                              skill.id
                            }" class="btn btn-danger btn-remove">Remove</button>
                            <a href="/#/admin/about/ID/edit">Edit</a>
                            </td>
                        </tr>
                      `;
                      })
                      .join("")}
                        
                        
                    </tbody>
            </table>
        </div>`;
};

export default AdminSkills;
