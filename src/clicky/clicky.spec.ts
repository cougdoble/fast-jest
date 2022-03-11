import { DOM } from '@microsoft/fast-element';
import './clicky';
import { fixture } from '@open-wc/testing-helpers';
import { Clicky } from './clicky';

describe('test clicky component', () => {
  let el: Clicky;
  // let incrementText: HTMLDivElement | null | undefined;
  // let clickMeBtn: HTMLButtonElement | null | undefined;
  // let clearMeBtn: HTMLButtonElement | null | undefined;

  const incrementText = () => el.shadowRoot?.querySelector('div');
  const clickMeBtn = () => el.shadowRoot?.querySelectorAll('button')[0];
  const clearMeBtn = () => el.shadowRoot?.querySelectorAll('button')[1];

  beforeEach(async () => {
    el = await fixture<Clicky>('<clicky-thing></clicky-thing>');
    await DOM.nextUpdate();
  });

  it('should run an empty test', () => {
    expect(true).toBeTruthy();
  });

  it('should increment displayed value on Click Me click', async () => {
    expect(incrementText()?.innerHTML).toBe('0');

    clickMeBtn()?.click();
    await DOM.nextUpdate();

    expect(incrementText()?.innerHTML).toBe('1');
  });

  it('should reset displayed value to 0 on Clear Me click', async () => {
    el.incValue = 5;
    await DOM.nextUpdate();

    expect(incrementText()?.innerHTML).toBe('5');

    clearMeBtn()?.click();
    await DOM.nextUpdate();

    expect(incrementText()?.innerHTML).toBe('0');
  });

  it('should emit a cleared event on Clear Me click', async () => {
    jest.spyOn(el, '$emit');
    clearMeBtn()?.click();
    await DOM.nextUpdate();

    expect(el.$emit).toHaveBeenCalledWith('cleared');
  });
});
