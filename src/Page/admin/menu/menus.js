import { useEffect, useState } from "../../../lib";

const AdminMenus = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/menus")
      .then((Response) => Response.json())
      .then((data) => setMenus(data));
  }, []);

  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click", function () {
        const id = this.dataset.id;
        fetch("http://localhost:3000/menus/" + id, {
          method: "DELETE",
        }).then(() => {
            const newMenu = menus.filter((menu)=> menu.id != id);
            setMenus(newMenu);
        });
      });
    }
  });

  return `
            <div class="container pt-5">
                <h1>Quản lí dự án</h1>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tên menu</th>
                            <th>Link menu</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                        <tbody>
                        ${menus
                          .map((menu, index) => {
                            return `
                            <tr>
                                <td>${index + 1}</td>
                                <td>${menu.name}</td>
                                <td>${menu.link}</td>
                                <td>
                                <button data-id="${
                                  menu.id
                                }" class="btn btn-danger btn-remove">Remove</button>
                                <a href="/#/admin/menus/${
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

export default AdminMenus;
