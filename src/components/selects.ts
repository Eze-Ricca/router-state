class SelectEl extends HTMLElement {
  static get style() {
    return /*css*/ `
        fieldset{
            min-width: 352px;
            height: 69px;               
            box-sizing: border-box;
            margin: 0px;
            padding: 0px;
            display: flex;
            flex-direction: column;
            border: none;
            outline: none;
        }
        label{
            font-family: "Roboto";
            font-size: 18px;
            font-weight: 400;
            line-height: 21.09px; 
        }
        select{
            width: 99%;
            height: 55px;
            padding: 0px;
            margin: 0px;
            border: solid 2px black;
            border-radius: 4px;
            font-family: "Roboto";
            font-size: 18px;
            font-weight: 400;
            line-height: 21.09px; 
            
          }
        `;
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.shadowRoot!.innerHTML = /*html*/ `
        <style>${SelectEl.style}</style>
        <fieldset>
           <label for="">${this.getAttribute("labelEl")}</label>
          <select>
              <option value="">Milanga</option>
              <option value="">Spagueti</option>
              <option value="">Asado</option>
           </select>
       </fieldset>
        `;

    // <label for=""></label>
  }
}
customElements.define("select-el", SelectEl);
