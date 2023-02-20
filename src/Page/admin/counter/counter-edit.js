import { useEffect, useState,router } from "../../../lib";

const AdminCounterEdit = ({id}) => {
    const [counters, setCounter] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/counter/" + id)
      .then((Response) => Response.json())
      .then((data) => setCounter(data));
  },[]);

  useEffect(()=>{
    const formAdd = document.querySelector('#form-add');
    const years = document.querySelector('#counter-years');
    const yearsText = document.querySelector('#counter-yearsText');
    const projects = document.querySelector('#counter-projects');
    const projectsText = document.querySelector('#counter-projectsText');
        formAdd.addEventListener('submit',(e)=>{
            e.preventDefault();
           const formNew = {
            id,
            years: years.value,
            yearsText : yearsText.value,
            projects: projects.value,
            projectsText : projectsText.value,
           }
           console.log(formNew);
           fetch('http://localhost:3000/counter/'+id,{
            method: 'PUT',
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
          <input type="text" class="form-control" id="counter-years" value="${counters.years}">
          <input type="text" class="form-control" id="counter-yearsText" placeholder="Text" value="${counters.yearsText}">
      </div>

      <div class="form-group">
          <label for="" class="form-label">Counter Projects</label>
          <input type="text" class="form-control" id="counter-projects" value="${counters.projects}">
          <input type="text" class="form-control" id="counter-projectsText" placeholder="Text" value="${counters.projectsText}">
      </div>
      
      <button class="btn btn-primary mt-3">Thêm</button>
  </form>
</div>`;
};

export default AdminCounterEdit;
