import { menus } from "../data";

const MainNav = () => {
  return `
                <nav class="navbar navbar-default navbar-sticky">
                        <div class="container-fluid">
                                
                                <div class="navbar-header">
                                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
                                </div>
                                
                                <div class="navbar-collapse collapse">
                                        
                                        <ul class="nav navbar-nav">
                                                ${menus
                                                  .map((nav) => {
                                                    return `
                                                        <li class="active"><a href="${nav.link}">${nav.name}</a></li>
                                                        `;
                                                  })
                                                  .join("")}
                                                
                                        </ul>
                                
                                </div>			
                        </div>	
                </nav>`;
};

export default MainNav;
