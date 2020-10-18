import { css } from "lit-element";

import "@polymer/font-roboto/roboto";

export const byteDisplayStyles = css`
  :host {
    font-family: Roboto;
  }

  .byte-display-wrapper {
    display: flex;
    align-items: center;
    min-height: 64px;
    border: 1px solid white;
    padding: 0.25rem 1rem;
    border-radius: 25px;
    margin-bottom: 1rem;
  }

  .byte-display__value {
    color: var(--byte-display-color, white);
    font-size: var(--byte-display-value-size, 2rem);
    flex: 1;
    letter-spacing: 0.25rem;
    line-height: 2;
    margin-right: 1rem;
  }

  .byte-display__button {
    color: white;
    width: 24px;
  }
`;
