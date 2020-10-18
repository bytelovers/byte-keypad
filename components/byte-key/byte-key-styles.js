import {
  css
} from 'lit-element';

export const byteKeyStyles = css`
  :host {
    cursor: pointer;
    display: flex;
    flex: 0;
  }

  :host([hidden]) { display: none; }

  .byte-key {
    background-color: var(--byte-key-bg-color, transparent);
    border: 1px solid var(--byte-key-border-color, #ccc);
    border-radius: 50%;
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2px;
    height: var(--byte-key-size, 64px);
    width: var(--byte-key-size, 64px);
  }

  .byte-key:hover {
    background-color: var(--byte-key-bg-color-hover, #ccc);
    border: 1px solid var(--byte-key-border-color-hover, #ccc);
  }

  .byte-key__super {
    font-size: .75rem;
  }

  .byte-key__body {
    font-size: 1.25rem;
  }
`;
