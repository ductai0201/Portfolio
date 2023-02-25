import HeaderAdmin from "../../../components/HeaderAdmin";
import { useEffect, useState } from "../../../lib";

const AdminCounter = () => {
  const [counters, setCounter] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/counter")
      .then((Response) => Response.json())
      .then((data) => setCounter(data));
  }, []);

  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        const id = this.dataset.id;
        fetch("http://localhost:3000/counter/" + id, {
          method: "DELETE",
        }).then(() => {
          const newData = counters.filter((data) => data.id != id);
          setCounter(newData);
        });
      });
    }
  });
  return `
  ${HeaderAdmin()}
  <div class="container pt-5">
  <button type="button" class="btn btn-success text-light"><a href="/#/admin/counter/add">Thêm</a></button>

  <h1>Counter</h1>
  <table class="table table-bordered">
          <thead>
              <tr>
                  <th>#</th>
                  <th>Counter Years</th>
                  <th>Counter Years Text</th>
                  <th>Counter Projects</th>
                  <th>Counter Projects Text</th>
                  <th>Option</th>
              </tr>
          </thead>
          <tbody>
          
          ${counters
            .map((counter, index) => {
              return `
              <tr>
                  <td>${index + 1}</td>
                  <td>${counter.years}</td>
                  <td>${counter.yearsText}</td>
                  <td>${counter.projects}</td>
                  <td>${counter.projectsText}</td>
                  <td>
                  <button data-id="${
                    counter.id
                  }" class="btn btn-danger btn-remove">Remove</button>
                      <a href="/#/admin/counter/${counter.id}/edit" >Edit</a>
                  </td>
              </tr>
              `;
            })
            .join("")}
              
          </tbody>
  </table>
</div>`;
};

export default AdminCounter;
