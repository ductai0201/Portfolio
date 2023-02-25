import HeaderAdmin from "../../../components/HeaderAdmin";
import { useEffect, useState } from "../../../lib";

const AdminFeedBack = () => {
    const [feedbacks, setFeedBack] = useState([]);
    useEffect(() => {
      fetch("http://localhost:3000/feedback")
        .then((Response) => Response.json())
        .then((data) => setFeedBack(data));
    }, []);

    useEffect(() => {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
          btn.addEventListener("click", function (e) {
            e.preventDefault();
            const id = this.dataset.id;
            fetch("http://localhost:3000/feedback/" + id, {
              method: "DELETE",
            }).then(() => {
              const newData = feedbacks.filter((data) => data.id != id);
              setCounter(newData);
            });
          });
        }
      });
  return `  
    ${HeaderAdmin()}
  <div class="container pt-5">
  <button type="button" class="btn btn-success text-light"><a href="/#/admin/feedback/add">Thêm</a></button>

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
          
          ${feedbacks
            .map((feedback, index) => {
              return `
              <tr>
                  <td>${index + 1}</td>
                  <td>${feedback.name}</td>
                  <td>${feedback.content}</td>
                  <td><img style="width:150px" src="${feedback.avt}"> </img></td>
                  <td>${feedback.job}</td>
                  <td>
                  <button data-id="${
                    feedback.id
                  }" class="btn btn-danger btn-remove">Remove</button>
                      <a href="/#/admin/feedback/${feedback.id}/edit" >Edit</a>
                  </td>
              </tr>
              `;
            })
            .join("")}
              
          </tbody>
  </table>
</div>
    `;
};

export default AdminFeedBack;
