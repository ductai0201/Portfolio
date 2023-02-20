import { useEffect, useState } from "../../../lib";

const AdminService = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/service")
      .then((Response) => Response.json())
      .then((data) => setService(data));
  }, []);

  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        const id = this.dataset.id;
        fetch("http://localhost:3000/service/" + id, {
          method: "DELETE",
        }).then(() => {
          const newData = service.filter((data) => data.id != id);
          setService(newData);
        });
      });
    }
  });
  return `
            <div class="container pt-5">
                <h1>Service</h1>
                <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Option</th>
                            </tr>
                        </thead>
                        <tbody>
                        
                        ${service.map((service, index) => {
                          return `
                            <tr>
                                <td>${index + 1}</td>
                                <td>${service.title}</td>
                                <td>${service.content}</td>
                                <td>
                                <button data-id="${
                                  service.id
                                }" class="btn btn-danger btn-remove">Remove</button>
                                    <a href="/#/admin/service/${
                                      service.id
                                    }/edit" >Edit</a>
                                </td>
                            </tr>
                            `;
                        }).join('')}
                            
                        </tbody>
                </table>
            </div>`;
};

export default AdminService;
