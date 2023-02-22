import { useEffect, useState } from "../../../lib";

const AdminInfor = () => {
  const [infors, setInfor] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/infor")
      .then((Response) => Response.json())
      .then((data) => setInfor(data));
  }, []);

  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        const id = this.dataset.id;
        fetch("http://localhost:3000/infor/" + id, {
          method: "DELETE",
        }).then(() => {
          const newData = infors.filter((data) => data.id != id);
          setInfor(newData);
        });
      });
    }
  });
  return `
            <div class="container pt-5">
              <h1>Information</h1>
              <table class="table table-bordered">
                      <thead>
                          <tr>
                              <th>#</th>
                              <th>Name</th>
                              <th>Content</th>
                              <th>My avt</th>
                              <th>Option</th>
                          </tr>
                      </thead>
                      <tbody>
                      ${infors.map((infor,index)=>{
                        return `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${infor.name}</td>
                            <td>${infor.content}</td>
                            <td><img style="width:150px" src="${infor.avt}"></img></td>
                            <td>
                            <button data-id="${infor.id}" class="btn btn-danger btn-remove">Remove</button>
                            <a href="/#/admin/skill/id/edit">Edit</a>
                            </td>
                        </tr>
                        `
                      }).join(' ')}
                          
                      </tbody>
              </table>
          </div>`;
};

export default AdminInfor;
