import { router, useEffect } from "../../../lib";

const AdminCounterAdd = () => {
    useEffect(()=>{
        const formAdd = document.querySelector('#form-add');
        const years = document.querySelector('#counter-years');
        const yearsText = document.querySelector('#counter-yearsText');
        const projects = document.querySelector('#counter-projects');
        const projectsText = document.querySelector('#counter-projectsText');
        formAdd.addEventListener('submit',(e)=>{
            e.preventDefault();
           const formNew = {
            years: years.value,
            yearsText : yearsText.value,
            projects: projects.value,
            projectsText : projectsText.value,
           }
           console.log(formNew);
           fetch('http://localhost:3000/counter',{
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formNew)
           }).then(()=> router.navigate('/admin/counters'))
        })
    })
  return ` 
  <div class="container pt-5">
    <form action="" id="form-add">
        <div class="form-group">
            <label for="" class="form-label">Counter Years</label>
            <input type="text" class="form-control" id="counter-years">
            <input type="text" class="form-control" id="counter-yearsText" placeholder="Text">
        </div>

        <div class="form-group">
            <label for="" class="form-label">Counter Projects</label>
            <input type="text" class="form-control" id="counter-projects">
            <input type="text" class="form-control" id="counter-projectsText" placeholder="Text">
        </div>
        
        <button class="btn btn-primary mt-3">Thêm</button>
    </form>
</div>`;
};

export default AdminCounterAdd;
