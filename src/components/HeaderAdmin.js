import MainNavAdmin from "./NavAdmin";


const HeaderAdmin = () => {
  return `
  <header id="masthead" class="site-header" data-anchor-target=".hero" data-top="background: rgba(255,255,255,0); padding: 30px 0; box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0);" data-top-bottom="background: rgba(255,255,255,1); padding: 10px 0; box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0.2);">
    ${MainNavAdmin()}
  </header>
    
  `;
};

export default HeaderAdmin;
