class TfsMap extends HTMLElement {
  connectedCallback() {
    this.textContent = 'TfS map component loaded!';
  }
}

customElements.define('tfs-map', TfsMap);
