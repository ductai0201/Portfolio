import HeaderAdmin from "../../../components/HeaderAdmin";
import { useEffect, useState } from "../../../lib";

const Adminprojects = () => {
  const [projects, setProject] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((Response) => Response.json())
      .then((data) => setProject(data));
  }, []);
  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click", function () {
        const id = this.dataset.id;
        fetch(`http://localhost:3000/projects/${id}`, {
          method: "DELETE",
        }).then(() => {
          const newForm = projects.filter((project) => project.id != id);
          setProject(newForm);
        });
      });
    }
  });
  return `
  ${HeaderAdmin()}
            <div class="container pt-5">
            <button type="button" class="btn btn-success text-light"><a href="/#/admin/project/add">Thêm</a></button>

                <h1>Projects</h1>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Avatar</th>
                            <th>Album</th>
                            <th>Link Git</th>
                            <th>Link Priview</th>
                            <th>Time</th>
                            <th>Technology</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${projects
                          .map((project, index) => {
                            return `
                                <tr>
                                    <td>${index + 1}</td>
                                    <td>${project.name}</td>
                                    <td>${project.descript}</td>
                                    <td><image style="width:160px;height:160px;" src="${
                                      project.avt
                                    }"> </image></td>
                                    <td style="grid-template-columns: repeat(2, minmax(0, 1fr));display:grid;width: 34rem;
                                    margin-top: 0.25rem;
                                    padding: 15px;">${project.album
                                      .map((image, index) => {
                                        return `
                                            <image class="col" style="width:160px;height:160px;" src="${image}" alt="Image ${
                                          index + 1
                                        }"> </image>
                                        `;
                                      })
                                      .join(" ")}</td>
                                    <td><a href="${
                                      project.git
                                    }" target="_blank">${project.git}</a></td>
                                    <td><a href="${
                                      project.preview
                                    }" target="_blank">${
                              project.preview
                            }</a></td>
                                    <td>${project.time}</td>
                                    <td>${project.technology}</td>
                                    <td>
                                        <button data-id="${
                                          project.id
                                        }" class="btn btn-danger btn-remove">Remove</button>
                                        <a class="btn btn-primary" href="/#/admin/about/${
                                          project.id
                                        }/edit">Edit</a>
                                    </td>
                                </tr>
                            `;
                          })
                          .join("")}
                        
                    </tbody>
                </table>
            </div>`;
};

export default Adminprojects;
