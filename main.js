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
import AdminServiceAdd from "./src/Page/admin/service/service-add";
import AdminServiceEdit from "./src/Page/admin/service/service-edit";
import AdminService from "./src/Page/admin/service/service";
import AdminProjectAdd from "./src/Page/admin/projects/project-add";
import AdminProjectEdit from "./src/Page/admin/projects/project-edit";
import Adminprojects from "./src/Page/admin/projects/projects";
import AdminCounterAdd from "./src/Page/admin/counter/counter-add";
import AdminCounterEdit from "./src/Page/admin/counter/counter-edit";
import AdminCounter from "./src/Page/admin/counter/counter";
import AdminContact from "./src/Page/admin/contact/contact";
import login from "./src/Page/login";

import AdminInforAdd from "./src/Page/admin/infor/infor-add";
import AdminInfor from "./src/Page/admin/infor/infor";
import projectDetail from "./src/Page/projectDetail";
// import projects from "./src/Page/projects";

const app = document.querySelector("#app");

router.on("/", () => render(homePage, app));
router.on("/login", () => render(login, app));
router.on("/project/:id", ({data}) => render(()=>projectDetail(data), app));
// router.on("/projects", () => render(projects, app));
//Admin
router.on("/admin/about/add",()=> render(AdminAboutAdd,app));
router.on("/admin/about/:id/edit",({data})=> render(()=>AdminAboutEdit(data),app));
router.on("/admin/abouts",()=> render(AdminAbout,app));
/*Admin about */

/*Admin service*/
router.on("/admin/service/add",()=> render(AdminServiceAdd,app));
router.on("/admin/service/:id/edit",({data})=> render(()=>AdminServiceEdit(data),app));
router.on("/admin/service",()=> render(AdminService,app));

/*skill */
router.on("/admin/skill/add",()=> render(AdminSkillAdd,app));
router.on("/admin/skill/:id/edit",({data})=> render(()=>AdminSkillEdit(data),app));
router.on("/admin/skills",()=> render(AdminSkills,app));
/*project */
router.on("/admin/project/add",()=> render(AdminProjectAdd,app));
router.on("/admin/project/:id/edit",({data})=> render(()=>AdminProjectEdit(data),app));
router.on("/admin/projects",()=> render(Adminprojects,app));
/*counter */

router.on("/admin/counter/add",()=> render(AdminCounterAdd,app));
router.on("/admin/counter/:id/edit",({data})=> render(()=>AdminCounterEdit(data),app));
router.on("/admin/counters",()=> render(AdminCounter,app));
/*contact */
router.on("admin/contacts",()=> render(AdminContact,app))
/*information */
router.on("admin/infors",()=> render(AdminInfor,app))
router.on("admin/infor/add",()=> render(AdminInforAdd,app))

router.notFound(() => notFound, app);
router.resolve();
