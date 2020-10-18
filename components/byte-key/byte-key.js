import {
  LitElement,
  html
} from 'lit-element';

import { byteKeyStyles } from './byte-key-styles';

class ByteKey extends LitElement {

  static get is() {
    return 'byte-key';
  }

  static get styles() {
    return [
      byteKeyStyles
    ];
  }

  static get properties() {
    return {
      key: { type: String }
    }
  }

  constructor() {
    super();
    this.key = "0";
  }

  _fire() {
    const detail = { value: this.key };
    this.dispatchEvent(new CustomEvent(`${ByteKey.is}-clicked`, {
      detail
    }));
  }

  render() {
    return html`
      <div class="byte-key"
        @click="${ this._fire}">
        ${ this.super
          ? html`<div class="byte-key__super">${ this.super.join(' ') }</div>`
          : void 0 }
        <div class="byte-key__body">${ this.key }</div>
      </div>
    `;
  }
}

customElements.define(ByteKey.is, ByteKey);
