import "./style.css";
import "./components/header";
import "./components/footer";

import { initRouter } from "./router";

const root: Element = document.querySelector<HTMLDivElement>("#app")!;
console.log("Hola desde la aplicacion");
initRouter(root);
