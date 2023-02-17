import { render, router } from "./src/lib";
import about from "./src/Page/about";
import AdminAbout from "./src/Page/admin/about/about";
import AdminAboutAdd from "./src/Page/admin/about/about-add";
import AdminAboutEdit from "./src/Page/admin/about/about-edit";
import homePage from "./src/Page/homePage";
import notFound from "./src/Page/notFound";
import projects from "./src/Page/projects";

const app = document.querySelector("#app");

router.on("/", () => render(homePage, app));
router.on("/about", () => render(about, app));
router.on("/projects", () => render(projects, app));
//Admin
router.on("/admin/about/add",()=> render(AdminAboutAdd,app));
router.on("/admin/about/:id/edit",({data})=> render(()=>AdminAboutEdit(data),app));
router.on("/admin/about",()=> render(AdminAbout,app));
router.notFound(() => notFound, app);
router.resolve();
