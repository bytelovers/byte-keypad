import { LitElement, html } from "lit-element";

import { library, icon } from "@fortawesome/fontawesome-svg-core";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";

import { byteDisplayStyles } from "./byte-display-styles";

class ByteDisplay extends LitElement {
  static get is() {
    return "byte-display";
  }

  static get properties() {
    return {
      value: { type: String }
    };
  }

  static get styles() {
    return [byteDisplayStyles];
  }

  constructor() {
    super();

    library.add(faBackspace);
  }

  _dispatch(eventName, detail = {}, bubbles = true) {
    this.dispatchEvent(
      new CustomEvent(eventName, {
        composed: true,
        bubbles,
        detail
      })
    );
  }

  render() {
    const removeIcon = html(icon(faBackspace).html);
    return html`
      <div class="byte-display-wrapper">
        <div class="byte-display__value">${this.value}</div>
        <div
          class="byte-display__button"
          @click=${() => this._dispatch("button-pressed", null, false)}
        >
          ${removeIcon}
        </div>
      </div>
    `;
  }
}

customElements.define(ByteDisplay.is, ByteDisplay);
