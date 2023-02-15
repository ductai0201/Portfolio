import "bootstrap/dist/css/bootstrap.min.css";

import { render, router } from "./src/lib";
import aboutPage from "./src/Page/aboutPage";
import AdminMenus from "./src/Page/admin/menu/menus";
import AdminMenusAdd from "./src/Page/admin/menu/menus-add";
import AdminMenusEdit from "./src/Page/admin/menu/menus-edit";
import homePage from "./src/Page/homePage";
import notFound from "./src/Page/notFound";

const app = document.querySelector("#app");

router.on("/", () => render(homePage, app));
router.on("/about", () => render(aboutPage, app));
//Admin
router.on("/admin/menus", () => render(AdminMenus, app));
router.on("/admin/menus/add", () => render(AdminMenusAdd, app));
router.on("/admin/menus/:id/edit", ({ data }) =>
  render(() => AdminMenusEdit(data), app)
);
router.notFound(() => notFound, app);
router.resolve();
