class SubtitleEl extends HTMLElement {
  static get style() {
    return /*css*/ `
      h2{
          font-family: "Poppins", sans-serif;
          font-weight: 500;
          font-style: normal;
          font-size: 28px; 
      }
      `;
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.shadowRoot!.innerHTML = /*html*/ `
      <style>${SubtitleEl.style}</style>
      <h3><slot></slot></h3>
      `;
  }
}
customElements.define("subtitle-el", SubtitleEl);
