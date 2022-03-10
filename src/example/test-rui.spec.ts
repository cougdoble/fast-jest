/**
 * @jest-environment jsdom
 */

import { fixture } from '@open-wc/testing-helpers';
import { screen } from 'testing-library__dom';

describe('test component', () => {
  beforeEach(async () => {
    await fixture(`<name-tag></name-tag>`);
  });

  it('should run an empty test', () => {
    expect(true).toBeTruthy();
  });

  it('has a header', () => {
    const element = screen.getByRole('heading');
    expect(element).toBeDefined();
  });
});
