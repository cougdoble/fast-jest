import { DOM } from '@microsoft/fast-element';
import './test-rui';

describe('test component', () => {
  it('should run an empty test', () => {
    expect(true).toBeTruthy();
  });

  it('should render a name-tag component', async () => {
    const fastEl = document.createElement('name-tag');
    document.body.appendChild(fastEl);
    await DOM.nextUpdate();
    const renderedText2 = document.body
      .getElementsByTagName('name-tag')[0]
      .shadowRoot;
    expect(renderedText2?.querySelector('h3')?.innerHTML).toBe('HELLO');

    fastEl.greeting = 'new greeting';
    await DOM.nextUpdate();

    const renderedText = document.body
      .getElementsByTagName('name-tag')[0]
      .shadowRoot;

    expect(renderedText?.querySelector('h3')?.innerHTML).toBe('NEW GREETING');
  });
});
