import axios from "axios";
import { router, useEffect } from "../../../lib";
const AdminProjectAdd = () => {
  useEffect(() => {
    const formAdd = document.querySelector("#form-add");
    const projectName = document.querySelector("#project-name");
    const projectDescript = document.querySelector("#project-descript");
    const projectAvt = document.querySelector("#project-avt");
    const projectAlbum = document.querySelector("#project-album");
    const projectGit = document.querySelector("#project-git");
    const projectPreview = document.querySelector("#project-preview");
    const projectTime = document.querySelector("#project-time");
    const projectTechnology = document.querySelector("#project-technology");
    formAdd.addEventListener("submit", async (e) => {
      e.preventDefault();
        const urls = await uploadFiles(projectAlbum.files);
        const file = projectAvt.files[0];
        const url = await uploadFile(file);
         const formNew = {
              name: projectName.value,
              descript: projectDescript.value,
              avt: url,
              album: urls,
              git: projectGit.value,
              preview: projectPreview.value,
              time: projectTime.value,
              technology: projectTechnology.value,
          }

      /*call api */
      fetch('http://localhost:3000/projects',{
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(formNew)
      }).then(()=> router.navigate('/admin/projects'))
    });

    /*upload file ảnh */
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
      
    /*end ảnh */

    /*upload file Album */
    const uploadFiles = async (files) => {
      if (files) {
        const CLOUD_NAME = "dtiwyksp8";
        const PRESET_NAME = "portfolio_ECMA";
        const folderName = "Portfolio_ECMA";
        const urls = [];
        const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

        const formData = new FormData();
        formData.append("upload_preset", PRESET_NAME);
        formData.append("folder", folderName);
        for (const file of files) {
          formData.append("file", file);
          const response = await axios.post(api, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          urls.push(response.data.secure_url);
        }
        return urls;
      }
    };
    /*end upload Album */
  });
  return `
        <div class="container pt-5">
            <form action="" id="form-add">
                <div class="form-group">
                    <label for="" class="form-label">Tên dự án</label>
                    <input type="text" class="form-control" id="project-name">
                </div>
                
                <div class="form-group">
                    <label for="" class="form-label">Mô tả</label>
                    <input type="text" class="form-control" id="project-descript">
                </div>

                <div class="form-group">
                    <label for="" class="form-label">Ảnh Đại Diện</label>
                    <input type="file" class="form-control" id="project-avt">
                </div>

                <div class="form-group">
                    <label for="" class="form-label">Album</label>
                    <input type="file" class="form-control" multiple id="project-album">
                </div> 

                <div class="form-group">
                    <label for="" class="form-label">Link Git hub</label>
                    <input type="text" class="form-control" id="project-git">
                </div> 

                <div class="form-group">
                    <label for="" class="form-label">Link Preview</label>
                    <input type="text" class="form-control" id="project-preview">
                </div>
                
                <div class="form-group">
                    <label for="" class="form-label">Thời gian làm</label>
                    <input type="text" class="form-control" id="project-time">
                </div>


                <div class="form-group">
                    <label for="" class="form-label">Technology</label>
                    <input type="text" class="form-control" id="project-technology">
                </div>

                <button class="btn btn-primary mt-3">Thêm dự án</button>
            </form>
        </div>`;
};

export default AdminProjectAdd;
