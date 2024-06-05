// Rutas
import { initStep1 } from "./pages/step1";
import { initWelcome } from "./pages/welcome";
import { initThankyou } from "./pages/thanyou";
// Tipo para las rutas
type Route = {
  path: RegExp;
  component: Function;
};

const routes: Route[] = [
  {
    path: /\/welcome/,
    component: initWelcome,
  },
  {
    path: /\/step1/,
    component: initStep1,
  },
  {
    path: /\/thankyou/,
    component: initThankyou,
  },
];

export function initRouter(rootEl: Element): void {
  function router(route: string): void {
    if (route === "/") {
      goTo("/welcome");
    }
    routes.forEach((r: Route) => {
      // Busca la ruta que coincida con el path
      if (r.path.test(route)) {
        const viewEl = r.component({ goTo: goTo }); // Genera la vista desde el componente
        rootEl.innerHTML = ""; // Limpia el HTML
        rootEl.appendChild(viewEl); // Inserta la vista
      }
    });
  }

  // Función utilitaria que pasa a la vista seleccionada para poder navegar a otras rutas
  function goTo(uri: string): void {
    history.pushState({}, "", uri);
    router(uri);
  }

  // Ejecuta el router con la ruta tomada de la url
  router(location.pathname);

  // Escucha el evento popstate para actualizar la vista cuando se navega para adelante o para atrás
  window.addEventListener("popstate", () => {
    router(location.pathname);
  });
}
