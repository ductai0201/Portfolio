import axios from "axios";
import Swal from "sweetalert2";

import { router, useEffect } from "../../../lib";
const AdminInforAdd = () => {
  useEffect(() => {
    const formAdd = document.querySelector("#form-add");
    const formName = document.querySelector("#infor-name");
    const formContent = document.querySelector("#infor-content");
    const formImg = document.querySelector("#infor-image");

    formAdd.addEventListener("submit", async (e) => {
      e.preventDefault();
      const file = formImg.files[0];
      const url = await uploadFile(file);

      const formNew = {
        name: formName.value,
        content: formContent.value,
        avt: url,
      };
      fetch("http://localhost:3000/infor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formNew),
      })
        .then(() =>
          Swal.fire("Good job!", "You clicked the button!", "success")
        )
        .then(() => router.navigate("/admin/infors"));
    });
  }, []);

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

  return `
            <div class="container pt-5">
            <form action="" id="form-add">
                <div class="form-group">
                    <label for="" class="form-label">My name</label>
                    <input type="text" class="form-control" id="infor-name">
                </div>

                <div class="form-group">
                    <label for="" class="form-label">Content</label>
                    <input type="text" class="form-control" id="infor-content">
                </div>

                <div class="form-group">
                    <label for="" class="form-label">Infor image</label>
                    <input type="file" class="form-control" id="infor-image">
                </div>

                <button class="btn btn-primary mt-3">Th??m</button>
            </form>
            </div>`;
};

export default AdminInforAdd;
