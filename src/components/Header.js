import MainNav from "./nav";

const Header = () => {
  return `
      <header id="header">
          <div id="head" class="parallax" parallax-speed="2">
            <h1 id="logo" class="text-center">
              <img class="img-circle" src="assets/images/avt.jpg" alt="">
              <span class="title">Anthony Tài</span>
              <span class="tagline">A mystery person<br>
                <a href="">ductai0201@gmail.com</a></span>
            </h1>
          </div>
          ${MainNav()}
      </header>
      
    
  `;
};

export default Header;
