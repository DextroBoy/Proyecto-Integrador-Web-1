import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";

import { bindAuthForms } from "./controllers/AuthController";
import { bindNavigationLinks, renderCurrentRoute } from "./controllers/NavigationController";

function router(): void {
  const app = document.getElementById("app");
  if (!app) return;

  const path = window.location.hash.replace("#", "") || "/login";
  app.innerHTML = renderCurrentRoute(path);
  bindNavigationLinks();
  bindAuthForms();
}

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);
