import About from "./src/components/about";
import { render, router } from "./src/lib";
import AdminAbout from "./src/Page/admin/about/about";
import AdminAboutAdd from "./src/Page/admin/about/about-add";
import AdminAboutEdit from "./src/Page/admin/about/about-edit";
import AdminSkillAdd from "./src/Page/admin/skill/skill-add";
import AdminSkillEdit from "./src/Page/admin/skill/skill-edit";
import homePage from "./src/Page/homePage";
import notFound from "./src/Page/notFound";
import AdminSkills from "./src/Page/admin/skill/skills";
// import projects from "./src/Page/projects";

const app = document.querySelector("#app");

router.on("/", () => render(homePage, app));
router.on("/about", () => render(About, app));
// router.on("/projects", () => render(projects, app));
//Admin
router.on("/admin/about/add",()=> render(AdminAboutAdd,app));
router.on("/admin/about/:id/edit",({data})=> render(()=>AdminAboutEdit(data),app));
router.on("/admin/abouts",()=> render(AdminAbout,app));
/*about */

/*skill */
router.on("/admin/skill/add",()=> render(AdminSkillAdd,app));
router.on("/admin/skill/:id/edit",({data})=> render(()=>AdminSkillEdit(data),app));
router.on("/admin/skills",()=> render(AdminSkills,app));

router.notFound(() => notFound, app);
router.resolve();
