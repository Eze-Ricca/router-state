class ButtonEl extends HTMLElement {
  static get styleBase() {
    return /*css*/ `
    button{
        min-width:352px;
        background-color: "transparent";
        border: solid 2px black;
        border-radius: 4px;
        width: 100%;
        height: 55px;
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        font-size: 22px;
        cursor: pointer;       
    }
    `;
  }
  static get styleConColor() {
    return /*css*/ `
    button{
        background-color: #9CBBE9;
        border: solid 2px transparent;        
    }   
    `;
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.shadowRoot!.innerHTML = /*html*/ `
    <style>${ButtonEl.styleBase}</style>    
    `;

    this.shadowRoot!.innerHTML += /*html*/ `
    <button>
       ${this.hasAttribute("contenido") ? this.getAttribute("contenido") : ""}
    </button>  
    `;

    if (this.hasAttribute("conColor")) {
      this.shadowRoot!.innerHTML += /*html*/ `
          <style>${ButtonEl.styleConColor}</style>
          `;
    }
  }
}
customElements.define("button-el", ButtonEl);
