import Swal from "sweetalert2";
import { useEffect } from "../lib";

const Contact = () => {
  useEffect(() => {
    const formSent = document.querySelector("#Form-sent");
    const name = document.querySelector(".name");
    const email = document.querySelector(".email");
    const message = document.querySelector("#message");
    formSent.addEventListener("submit", function (e) {
      e.preventDefault();
      const formNew = {
        name: name.value,
        email: email.value,
        message: message.value,
      };
      fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formNew),
      })
        .then(() => {
          return Swal.fire("Good job!", "You clicked the button!", "success");
        })
        .then(() => {
          e.target.reset();
        });
    });
  });
  return `
            <section id="contact" class="site-section section-form text-center">
                <div class="container">

                    <h3>Contact</h3>
                    <img src="assets/img/lines.svg" class="img-lines" alt="lines">
                    <form id="Form-sent">
                        <div class="row">
                            <div class="col-sm-6">
                                <input type="text" name="name" class="form-control mt-x-0 name" placeholder="Name" required="">
                            </div>
                            <div class="col-sm-6">
                                <input type="email" name="email" class="form-control email" placeholder="Email" required="">   
                            </div>
                            <div class="col-sm-12">
                                <textarea name="message" id="message" class="form-control" placeholder="Message" required=""></textarea>
                            </div>
                        </div>
                        <button href="#" class="btn btn-border" type="submit">Hire Me <span class="glyphicon glyphicon-send"></span></button>
                    </form>
                </div>
            </section>`;
};

export default Contact;
