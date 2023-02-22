import { render, router, useEffect } from "../../../lib";

const AdminSkillAdd = () => {
  useEffect(() => {
    const formAdd = document.querySelector("#form-add");
    const skillName = document.querySelector("#skill-name");
    formAdd.addEventListener("submit", (e) => {
      e.preventDefault();
      const formNew = {
        skill: skillName.value,
      };
      fetch("http://localhost:3000/skills", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formNew),
      }).then(()=> router.navigate('admin/skills'));
    });
  });
  return `
            <div class="container pt-5">
                <form action="" id="form-add">
                    <div class="form-group">
                        <label for="" class="form-label">Skill</label>
                        <input type="text" class="form-control" id="skill-name">
                    </div>
                    <button class="btn btn-primary mt-3">Thêm</button>
                </form>
            </div>`;
};

export default AdminSkillAdd;
