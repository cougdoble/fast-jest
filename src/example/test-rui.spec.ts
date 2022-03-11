import { DOM } from '@microsoft/fast-element';
import './test-rui';
import { fixture } from '@open-wc/testing-helpers';
import { NameTag } from './test-rui';

describe('test name-tag component', () => {
  it('should run an empty test', () => {
    expect(true).toBeTruthy();
  });

  it('should render a name-tag component', async () => {
    const fastEl = document.createElement('name-tag');
    document.body.appendChild(fastEl);
    await DOM.nextUpdate();

    const renderedText =
      document.body.getElementsByTagName('name-tag')[0].shadowRoot;

    expect(renderedText?.querySelector('h3')?.innerHTML).toBe('HELLO');

    fastEl.greeting = 'new greeting';
    await DOM.nextUpdate();

    expect(renderedText?.querySelector('h3')?.innerHTML).toBe('NEW GREETING');
  });

  it('should render a name-tag component using the testing helper', async () => {
    const el = await fixture<NameTag>('<name-tag></name-tag>');
    await DOM.nextUpdate();

    const actualText = el.shadowRoot?.querySelector('h3');
    expect(actualText?.innerHTML).toBe('HELLO');

    const newExpectedText = 'some new text';
    el.greeting = newExpectedText;
    await DOM.nextUpdate();

    expect(actualText?.innerHTML).toBe(newExpectedText.toUpperCase());
  });
});
