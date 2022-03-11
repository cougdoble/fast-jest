import {
  customElement,
  FASTElement,
  html,
  observable,
} from '@microsoft/fast-element';

const template = html<Clicky>`
  <button @click=${(x) => x.incrementMe()}>Click Me</button>
  <button @click=${(x) => x.clearMe()}>Clear Me</button>
  <div>${(x) => x.incValue}</div>
`;

@customElement({ name: 'clicky-thing', template })
export class Clicky extends FASTElement {
  @observable incValue = 0;

  incrementMe(): void {
    this.incValue++;
  }

  clearMe(): void {
    this.incValue = 0;
    this.$emit('cleared');
  }
}

declare global {
  interface HTMLElementTagNameMap {
    clicky: Clicky;
  }
}
