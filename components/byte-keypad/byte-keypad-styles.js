import { css } from "lit-element";

import "@polymer/font-roboto/roboto";

export const byteKeypadStyles = css`
  :host {
    display: flex;
  }

  :host([hidden]) {
    display: none;
  }

  .byte-keypad-pad {
    background-color: rgba(255, 255, 255, 0.85);
    box-shadow: 0px 3px 10px #888888;
    border: 1px solid #ccc;
    border-radius: 15px;
    padding: 15px;
  }

  .byte-keypad {
    font-family: Roboto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    max-width: 240px;
    width: 100%;
  }

  .byte-keypad-header__title {
    font-family: Roboto;
    color: white;
  }
`;
