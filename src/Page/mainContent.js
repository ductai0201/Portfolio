import about from "./about";

const mainContent = () => {
  return `
  <main id="main" class="site-main">
    ${about()}
  </main>`;
};

export default mainContent;
