import Swal from "sweetalert2";
import bcrypt from "bcryptjs";
import { router, useEffect, useState } from "../lib";
const login = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    const formLogin = document.querySelector("#login-form");

    formLogin.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formName = document.querySelector("#username").value;
      const formPass = document.querySelector("#password").value;

      let response = await fetch("http://localhost:3000/users");
      let data = await response.json();
	  setUser(data);
      const user = data.find((user) => user.name === formName && bcrypt.compareSync(formPass, user.password));

      if (user) {
        return Swal.fire("Good job!", "You clicked the button!", "success").then(window.location.href="/#/");
      } else {
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      }
    });
  }, [users]);

  useEffect(() => {
    const register = document.querySelector("#register-form");
    register.addEventListener("submit", async function (e) {
      e.preventDefault();
      const name = document.querySelector("#usernameRegis").value;
      const email = document.querySelector("#email").value;
      const password = document.querySelector("#passwordRegis").value;
      const confirmpass = document.querySelector("#confirm-password").value;

      const response = await fetch("http://localhost:3000/users");
      const data = await response.json();
      if (
        password === confirmpass &&
        password.length >= 6 &&
        !data.find((check) => check.email === email) &&
        !data.find((check) => check.name === name)
      ) {
        const newForm = {
          name,
          email,
          password,
        };
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newForm),
		  
        });
		
        Swal.fire("Good job!", "You clicked the button!", "success");
		register.reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Kiểm tra lại thông tin bạn đã nhập!",
        });
      }
    });
  }, []);

  return `
  
        <div class="container">
    	<div class="row">
			<div class="col-md-6 col-md-offset-3">
				<div class="panel panel-login">
					<div class="panel-heading">
						<div class="row">
							<div class="col-xs-6">
								<a href="/login" class="active" id="login-form-link">Login</a>
							</div>
							<div class="col-xs-6">
								<a href="#" id="register-form-link">Register</a>
							</div>
						</div>
						<hr>
					</div>
					<div class="panel-body">
						<div class="row">
							<div class="col-lg-12">
								<form id="login-form"  role="form" style="display: block;">
									<div class="form-group">
										<input type="text" name="username" id="username" tabindex="1" class="form-control" placeholder="Username" value="" required>
									</div>
									<div class="form-group">
										<input type="password" name="password" id="password" tabindex="2" class="form-control" placeholder="Password" required>
									</div>
									<div class="form-group text-center">
										<input type="checkbox" tabindex="3" class="" name="remember" id="remember">
										<label for="remember"> Remember Me</label>
									</div>
									<div class="form-group">
										<div class="row">
											<div class="col-sm-6 col-sm-offset-3">
												<input type="submit" name="login-submit" id="login-submit" tabindex="4" class="form-control btn btn-login" value="Log In">
											</div>
										</div>
									</div>
									<div class="form-group">
										<div class="row">
											<div class="col-lg-12">
												<div class="text-center">
													<a href="" tabindex="5" class="forgot-password">Forgot Password?</a>
												</div>
											</div>
										</div>
									</div>
								</form>
								<form id="register-form" action="" method="post" role="form" style="display: none;">
									<div class="form-group">
										<input type="text" name="username" id="usernameRegis" tabindex="1" class="form-control" placeholder="Username" value="" required>
									</div>
									<div class="form-group">
										<input type="email" name="email" id="email" tabindex="1" class="form-control" placeholder="Email Address" value="" required>
									</div>
									<div class="form-group">
										<input type="password" name="password" id="passwordRegis" tabindex="2" class="form-control" placeholder="Password" required>
									</div>
									<div class="form-group">
										<input type="password" name="confirm-password" id="confirm-password" tabindex="2" class="form-control" placeholder="Confirm Password" required>
									</div>
                                    <span id="message"> </span>
									<div class="form-group">
										<div class="row">
											<div class="col-sm-6 col-sm-offset-3">
												<input type="submit" name="register-submit" id="register-submit" tabindex="4" class="form-control btn btn-register" value="Register Now">
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>`;
};

export default login;
