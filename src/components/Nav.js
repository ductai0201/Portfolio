import { menus } from "../data";

const MainNav = () => {
  return `
                <nav id="primary-navigation" class="site-navigation">
                        <div class="container">
                                <div class="navbar-header page-scroll">

                                        <button type="button" class="navbar-toggle collapsed" data-target="#portfolio-perfect-collapse" aria-expanded="false" >
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                        </button>
                                        
                                        <a href="#hero" class="site-logo"><img src="assets/img/logo.png" alt="logo"></a>

                                </div>

                                <div class="main-menu" id="portfolio-perfect-collapse">

                                        <ul class="nav navbar-nav navbar-right d-flex flex-row" style="width: auto;">
                                                ${menus.map((menu) => {
                                                return `
                                                <li class="d-inline-block"><a href="${menu.link}">${menu.name}</a></li>
                                                `
                                                }).join(' ')}
                                                <li><a href="login">login</a></li>
                                        </ul>
                        
                                </div>

                        </div>
                </nav>`;
};

export default MainNav;
