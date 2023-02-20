import about from "../components/about";
import CounterSite from "../components/CounterSite";
import Projects from "../components/Projects";
import service from "../components/service";
import Skill from "../components/skill";


const mainContent = () => {
  return `
  <main id="main" class="site-main">
    ${about()}
    ${Skill()}
    ${service()}
    ${Projects()}
    ${CounterSite()}
  </main>`;
};

export default mainContent;
