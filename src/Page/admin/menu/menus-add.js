import { render, router, useEffect } from "../../../lib";

const AdminMenusAdd = () => {
  useEffect(() => {
    const formMenu = document.querySelector("#form-add");
    const menuName = document.querySelector("#menu-name");
    const menuLink = document.querySelector("#menu-link");

    formMenu.addEventListener("submit", (e) => {
      e.preventDefault();
      const formNew = {
        name: menuName.value,
        link: menuLink.value,
      };
      //   console.log(formNew);
      fetch("http://localhost:3000/menus", {
        method: 'POST',
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
                        <input type="text" class="form-control" id="menu-name">
                    </div>
                    
                    <div class="form-group">
                        <label for="" class="form-label">Link</label>
                        <input type="text" class="form-control" id="menu-link">
                    </div>
                    <button class="btn btn-primary mt-3">Thêm Menu</button>
                </form>
            </div>`;
};

export default AdminMenusAdd;
