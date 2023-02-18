import about from "../components/about";
import Skill from "../components/skill";


const mainContent = () => {
  return `
  <main id="main" class="site-main">
    ${about()}
    ${Skill()}
  </main>`;
};

export default mainContent;
