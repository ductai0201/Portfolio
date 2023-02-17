import { router, useEffect, useState } from "../../../lib";

const AdminAboutEdit = ({ id }) => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/about/" + id)
      .then((Response) => Response.json())
      .then((data) => setAbout(data));
  }, []);

  useEffect(() => {
    const form = document.querySelector("#form-edit");
    const contentAbout = document.querySelector("#about-content");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const newForm = {
        id,
        content: contentAbout.value,
      };
      fetch("http://localhost:3000/about/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newForm),
      }).then(()=> router.navigate("admin/about"));
    });
  });
  return `
          <div class="container pt-5">
          <form action="" id="form-edit">
              <div class="form-group">
                  <label for="" class="form-label">Content About</label>
                  <input type="text" class="form-control" id="about-content" value="${about.content} ">
              </div>

              <button class="btn btn-primary mt-3">Sửa About</button>
          </form>
        </div>`;
};

export default AdminAboutEdit;
