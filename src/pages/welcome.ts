import "../components/button";
import "../components/title";
import "../components/input";
//aqui importare mi state
import { state } from "../state";
import { inputState } from "../inputstate";

export function initWelcome(params: {
  goTo: (arg: string) => void;
}): HTMLDivElement {
  const div = document.createElement("div");

  div.innerHTML = /*html*/ `
     <title-el>Te damos la bienvenida a esta página</title-el>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur
      iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae 
      quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?</p>
    <input-el labelEl="Nombre" ></input-el>
    <p id="error" style="background-color:green;color:#c4c4c4;padding-left:10px;font-weight:800"></p>
    <br>
    <button-el  contenido="Comenzar" ConColor id="welcome"></button-el>
    `;
  // Lee el estado global actual
  const currentState = state.getState();

  // Elemento del botón 'Comenzar' de bienvenida
  const welcome = div.querySelector("#welcome") as HTMLButtonElement;
  // Elemento para mostrar errores
  const errorEl = div.querySelector("#error") as HTMLParagraphElement;

  // Evento click del botón 'Comenzar'
  welcome.addEventListener("click", () => {
    // Lee el estado actual del input
    const currentInputState = inputState.getState();

    // Verifica que haya un valor en el input
    const inputValue = currentInputState.input;

    if (!inputValue) {
      // Si no hay valor, muestra un error
      errorEl.textContent = "El nombre no puede estar vacío!";
      return;
    } else {
      // Si hay valor, oculta el error
      errorEl.style.display = "none";

      // Actualiza el estado global con el nombre ingresado
      const newState = currentState;
      newState.nombre = inputValue;
      state.setState(newState);

      // Actualiza el estado del input
      inputState.setState({ input: "" });

      // Navegar a la siguiente página
      console.log(state.getState()); // TODO: Comentar despues de probar!!
      params.goTo("/step1");
    }
  });
  return div;
}
