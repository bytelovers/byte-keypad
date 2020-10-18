// Import the LitElement base class and html helper function
import { LitElement, html } from "lit-element";

import { keyPadArray } from "./keypad";

import { byteKeypadStyles } from "./byte-keypad-styles";

import "../byte-display/byte-display";
import "../byte-key/byte-key";

class ByteKeypad extends LitElement {
  static get is() {
    return "byte-keypad";
  }

  static get properties() {
    return {
      title: { type: String },
      keypad: { type: Array },
      value: { type: String }
    };
  }

  static get styles() {
    return [byteKeypadStyles];
  }

  constructor() {
    super();
    this.keypad = keyPadArray;
    this.value = "";

    this.addEventListener("button-pressed", this._onDisplayButtonPressed);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("button-pressed", this._onDisplayButtonPressed);
  }

  _onDisplayButtonPressed(evt) {
    this.value = this.value.slice(0, -1);
  }

  _handleByteKey({ detail }) {
    const { value } = detail;
    this.value += value.toString();
  }

  titleTpl() {
    return html`
      <div class="byte-keypad-header">
        ${this.title
          ? html`
              <h1 class="byte-keypad-header__title">${this.title}</h1>
            `
          : void 0}
      </div>
    `;
  }

  displayTpl() {
    return html`
      <div class="byte-keypad-display">
        <byte-display .value="${this.value}"></byte-display>
      </div>
    `;
  }

  keyTpl(key) {
    return html`
      <byte-key
        .super=${key.super}
        .key=${key.key}
        @byte-key-clicked=${this._handleByteKey}
      >
      </byte-key>
    `;
  }

  render() {
    return html`
      <div class="byte-keypad-wrapper">
        ${this.titleTpl()} ${this.displayTpl()}
        <div class="byte-keypad-pad byte-keypad">
          ${this.keypad.map(key => this.keyTpl(key))}
        </div>
      </div>
    `;
  }
}

customElements.define(ByteKeypad.is, ByteKeypad);
