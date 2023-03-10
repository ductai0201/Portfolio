import HeaderAdmin from "../../../components/HeaderAdmin";
import { useEffect, useState } from "../../../lib";

const AdminContact = () => {
  const [contacts, setContact] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/contact")
      .then((Response) => Response.json())
      .then((data) => setContact(data));
  }, []);
  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click", function () {
        const id = this.dataset.id;

        fetch(`http://localhost:3000/contact/${id}`, {
          method: "DELETE",
        }).then(() => {
          const newForm = contacts.filter((contact) => contact.id != id);
          setContact(newForm);
        });
      });
    }
  });
  return `
            ${HeaderAdmin()}
                <div class="container pt-5">
                <h1>Contact</h1>
                <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Messeage</th>
                                <th>Option</th>
                            </tr>
                        </thead>
                        <tbody>
                        ${contacts
                          .map((contact, index) => {
                            return `
                            <tr>
                                <td>${index + 1}</td>
                                <td>${contact.name}</td>
                                <td>${contact.email}</td>
                                <td>${contact.message}</td>
                                <td>
                                <button data-id="${
                                  contact.id
                                }" class="btn btn-danger btn-remove">Remove</button>
                                
                                </td>
                            </tr>
                            `;
                          })
                          .join("")}
                            
                            
                        </tbody>
                </table>
                </div>`;
};

export default AdminContact;
