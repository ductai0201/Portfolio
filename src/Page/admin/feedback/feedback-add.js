import axios from "axios";
import { useEffect, useState } from "../../../lib";
const AdminFeedBackAdd = () => {

    useEffect(()=>{
        const formAdd = document.querySelector('#form-add');
        const name = document.querySelector('#feedback-name');
        const content = document.querySelector('#feedback-content');
        const avt = document.querySelector('#feedback-avt');
        const job = document.querySelector('#feedback-job');
        formAdd.addEventListener('submit',async(e)=>{
            e.preventDefault();
            const file = avt.files[0];
            const url = await uploadFile(file);

           const formNew = {
            name: name.value,
            content : content.value,
            avt: url,
            job : job.value,
           }
           console.log(formNew);
           
           fetch('http://localhost:3000/feedback',{
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formNew)
           }).then(()=> router.navigate('/admin/feedbacks'))
           
           
        
        })
        const uploadFile = async (file) => {
            if (file) {
              const CLOUD_NAME = "dtiwyksp8";
              const PRESET_NAME = "portfolio_ECMA";
              const folderName = "Portfolio_ECMA";
              const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
          
              const formData = new FormData();
              formData.append("upload_preset", PRESET_NAME);
              formData.append("folder", folderName);
              formData.append("file", file);
          
              const response = await axios.post(api, formData, {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              });
              return response.data.secure_url;
            }
          };
    })
    return `
    <div class="container pt-5">
    <form action="" id="form-add">
        <div class="form-group">
            <label for="" class="form-label">Tên khách hàng</label>
            <input type="text" class="form-control" id="feedback-name">
        </div>
        
        <div class="form-group">
            <label for="" class="form-label">Nội dung</label>
            <input type="text" class="form-control" id="feedback-content">
        </div>

        <div class="form-group">
            <label for="" class="form-label">Ảnh Đại Diện</label>
            <input type="file" class="form-control" id="feedback-avt">
        </div>

        <div class="form-group">
            <label for="" class="form-label">Vị trí</label>
            <input type="text" class="form-control" id="feedback-job">
        </div> 

        <button class="btn btn-primary mt-3">Thêm</button>
    </form>
</div>`;
  };
  
  export default AdminFeedBackAdd;
  