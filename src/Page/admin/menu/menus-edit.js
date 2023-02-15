import { router, useEffect, useState } from "../../../lib";

const AdminMenusEdit = ({ id }) => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/menus/" + id)
      .then((Response) => Response.json())
      .then((data) => setMenus(data));
  },[]);

  useEffect(() => {
    const formMenu = document.querySelector("#form-add");
    const menuName = document.querySelector("#menu-name");
    const menuLink = document.querySelector("#menu-link");

    formMenu.addEventListener("submit", (e) => {
      e.preventDefault();
      const formNew = {
        id,
        name: menuName.value,
        link: menuLink.value,
      };
      //   console.log(formNew);
      fetch("http://localhost:3000/menus/" + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formNew),
      }).then(()=>router.navigate('/admin/menus'));
    });
  });


  return `
        <div class="container pt-5">
          <form action="" id="form-add">
              <div class="form-group">
                  <label for="" class="form-label">Tên Menu</label>
                  <input type="text" class="form-control" id="menu-name" value="${menus.name}">
              </div>
              
              <div class="form-group">
                  <label for="" class="form-label">Link</label>
                  <input type="text" class="form-control" id="menu-link" value="${menus.link}">
              </div>
              <button class="btn btn-primary mt-3">Thêm Menu</button>
          </form>
      </div>`;
};

export default AdminMenusEdit;
