import Header from "../components/header";
import Hero from "../components/hero";
import mainContent from "./mainContent";

const homePage = () => {
  return `
   ${Header()}
   ${Hero()}
   ${mainContent()}
  `;
};

export default homePage;
