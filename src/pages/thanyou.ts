import "../components/button";
import { state } from "../state";

export function initThankyou(params: {
  goTo: (arg: string) => void;
}): HTMLDivElement {
  const div = document.createElement("div");
  const newState = state.getState();

  div.innerHTML = /*html*/ `
    <title-el style="text-align:center">Gracias ${newState.nombre}</title-el>
    <subtitle-el>Toda la informacion que nos brindaste es muy importante</subtitle-el>
    <br>
    <br>
    <p>Email: <strong>${newState.email}</strong></p>
    <p>Bebida: <strong>${newState.bebida}</strong></p>
    <p>Comida:<strong>${newState.comida}</strong></p>
    
    <button-el id="thankyou" contenido="De nada" ConColor><button-el>
    `;

  const button = div.querySelector("#thankyou");
  button!.addEventListener("click", () => {
    params.goTo("/welcome");
  });
  return div;
}
