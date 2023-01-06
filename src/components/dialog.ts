import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * A Dialog Element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('ds-dialog')
export class Dialog extends LitElement {
  render() {
    return html`<div>Hi</div>`;
  }

  static styles = css`
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'ds-dialog': Dialog;
  }
}
