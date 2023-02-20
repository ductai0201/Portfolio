import { useEffect, useState,router } from "../../../lib";

const AdminServiceEdit = ({ id }) => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/service/" + id)
      .then((Response) => Response.json())
      .then((data) => setService(data));
  },[]);

  useEffect(()=>{
    const formAdd = document.querySelector('#form-add');
    const title = document.querySelector('#service-title');
    const content = document.querySelector('#service-content');
    formAdd.addEventListener('submit',(e)=>{
        e.preventDefault();
       const formNew = {
        id,
        title: title.value,
        content: content.value,
       }
       console.log(formNew);
       fetch('http://localhost:3000/service/' + id,{
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formNew)
       }).then(()=> router.navigate('/admin/service'))
    })
})
  return `
                <div class="container pt-5">
                    <form action="" id="form-add">
                        <div class="form-group">
                            <label for="" class="form-label">Title</label>
                            <input type="text" class="form-control" id="service-title" value="${service.title}">
                        </div>
                        <div class="form-group">
                            <label for="" class="form-label">Content</label>
                            <input type="text" class="form-control" id="service-content" value="${service.content}">
                        </div>

                        <button class="btn btn-primary mt-3">Thêm</button>
                    </form>
                </div>`;
};

export default AdminServiceEdit;
