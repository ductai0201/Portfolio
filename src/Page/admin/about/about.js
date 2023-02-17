import { useEffect, useState } from "../../../lib";

const AdminAbout = () => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/about")
      .then((Response) => Response.json())
      .then((data) => setAbout(data));
  }, []);

  // useEffect(() => {
  //   const btns = document.querySelectorAll(".btn-remove");
  //   for (let btn of btns) {
  //     btn.addEventListener("click", function () {
  //       const id = this.dataset.id;
  //       fetch("http://localhost:3000/about/" + id, {
  //         method: "DELETE",
  //       }).then(() => {
  //         const newMenu = about.filter((menu) => menu.id != id);
  //         setAbout(newMenu);
  //       });
  //     });
  //   }
  // });

  return `
            <div class="container pt-5">
                <h1>About</h1>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Content About</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                        <tbody>
                        ${about
                          .map((menu, index) => {
                            return `
                            <tr>
                                <td>${index + 1}</td>
                                <td>${menu.content}</td>
                                <td>
                                <a href="/#/admin/about/${
                                  menu.id
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

export default AdminAbout;
