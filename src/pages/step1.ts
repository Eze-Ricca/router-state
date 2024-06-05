import "../components/button";
import "../components/title";
import "../components/input";
import "../components/selects";
import { state } from "../state";

export function initStep1(params: {
  goTo: (arg: string) => void;
}): HTMLDivElement {
  const div = document.createElement("div");

  div.classList.add("container");

  div.innerHTML = /*html*/ `
      <style>
        .container {
          display:flex;
          gap: 30px;
          margin-bottom: 50px
        }
        form {
        max-width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        margin-bottom: 20px;
      }
      .form-div {
        width: 100%;
      }
      input,
      label,
      button,
      select {
        width: 100%;
        height: 45px;
        border-radius: 3px;
        font-size: 16px;
      }
      button{
        min-width:352px;
        background-color: #9CBBE9;
        border: solid 2px black;
        border-radius: 4px;
        border: none;
        width: 100%;
        height: 55px;
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        font-size: 22px;
        cursor: pointer;
      }
      select {
        margin-bottom: 25px;
      }
      </style>
           <title-el>Necesitamos algunos datos más</title-el>         
          <form action="">
          <div class="form-div">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required/>
          </div>
          <div class="form-div">
            <label for="bebida">Bebida</label>
            <input type="text" id="bebida" name="bebida" required/>
          </div>
          <div class="form-div">
            <label for="comida">Comida favorita</label>
           <select id="comida" name="comida" required>
              <option name="comida">Fideos con salsa</option>
              <option name="comida">Milanesa con pure</option>
              <option name="comida">Asado</option>
          </select>
          <button id="continuar-button">Continuar!</button>
          </div>
          </form>
          
          <button-el contenido="Volver" id="step-2" ></button-el>
        `;

  const newState = state.getState();
  console.log(newState);

  const form = div.querySelector("form");

  form!.addEventListener("submit", (event: Event) => {
    event.preventDefault(); // Evita que el formulario se envíe de la manera predeterminada
    const target = event.target as HTMLFormElement; // Especifica el tipo de 'this'
    const formData = new FormData(target); // Usa 'target' en lugar de 'this'
    const email = (formData.get("email") as string) || "";
    const bebida = (formData.get("bebida") as string) || "";
    const comida = (formData.get("comida") as string) || "";
    // console.log(email, comida, bebida);
    state.setState({
      email: email,
      bebida: bebida,
      comida: comida,
      ...newState,
    });
    console.log(state.data);
    // console.log(Object.fromEntries(formData).email);
    // Aquí es donde agregarías el código para enviar los datos a un servidor
  });
  const continuar = div.querySelector("#continuar-button") as HTMLButtonElement;

  continuar.addEventListener("click", () => {
    // Verifica el estado antes de navegar
    console.log("Estado antes de navegar:", state.getState());

    setTimeout(() => {
      params.goTo("/thankyou");
    }, 100); // Retraso de 100ms para dar tiempo a que el estado se actualice
  });

  // crea el boton continuar

  // Asegurarse de que inputValue es un string antes de proceder

  const step2 = div.querySelector("#step-2") as HTMLButtonElement;
  step2.addEventListener("click", () => {
    params.goTo("/welcome");
  });
  return div;
}
// <button-el contenido="Continuar" id="continuar" ConColor></button-el>
