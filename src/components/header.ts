class HeaderEl extends HTMLElement {
  static get style() {
    return /*css*/ `
    div{
        width: 1440px;
        height: 60px;
        background-color: #FF8282;   
        display: flex;
        justify-content: center;
        align-items: center;     
    }
    h3 {
        margin: 0px;
        font-size: 22px;
        font-weight: 500;     
        }
    `;
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.shadowRoot!.innerHTML = /*html*/ `
    <style>${HeaderEl.style}</style>
    <div><h3>Header</h3></div>
    `;
  }
}
customElements.define("header-el", HeaderEl);
