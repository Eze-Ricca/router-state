class FooterEl extends HTMLElement {
  static get style() {
    return /*css*/ `
    div{
        background-color: #FFA0EA;
        width: 1440px;
        height: 233px;
        display: flex;
        justify-content: center;
        align-items: center
    }
    h3 {
        margin: 0;
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
    <style>${FooterEl.style}</style>
    <div><h3>footer</h3></div>
    `;
  }
}
customElements.define("footer-el", FooterEl);
