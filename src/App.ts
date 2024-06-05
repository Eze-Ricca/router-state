import "./style.css";
import "./components/header";
import "./components/footer";

import { initRouter } from "./router";

const root: Element = document.querySelector<HTMLDivElement>("#app")!;

initRouter(root);
