import { render, router, useEffect } from "../../../lib";

const AdminAboutAdd = () => {
  useEffect(() => {
    const formAbout = document.querySelector("#form-add");
    const aboutContent = document.querySelector("#about-content");

    formAbout.addEventListener("submit", (e) => {
      e.preventDefault();
      const formNew = {
        content: aboutContent.value,
      };
        console.log(formNew);
      fetch("http://localhost:3000/about", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formNew),
      }).then(()=>router.navigate('/admin/about'));
    });
  });

  return ` 
            <div class="container pt-5">
                <form action="" id="form-add">
                    <div class="form-group">
                        <label for="" class="form-label">Content About</label>
                        <input type="text" class="form-control" id="about-content">
                    </div>

                    <button class="btn btn-primary mt-3">Thêm About</button>
                </form>
            </div>`;
};

export default AdminAboutAdd;
