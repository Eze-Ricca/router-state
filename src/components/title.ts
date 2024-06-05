class TitleEl extends HTMLElement {
  static get style() {
    return /*css*/ `
      h1{
          font-family: "Poppins", sans-serif;
          font-weight: 700;
          font-style: normal;
          font-size: 52px;   
       }
      `;
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.shadowRoot!.innerHTML = /*html*/ `
      <style>${TitleEl.style}</style>
      <h1><slot></slot></h1>
      `;
  }
}
customElements.define("title-el", TitleEl);
