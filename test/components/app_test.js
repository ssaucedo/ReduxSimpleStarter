import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  // Just testing HTML, it's pretty flexible. The dev can change the implementation.
  it('Shows a comment box', () => {
    // Jquery find accepts a css selector. We test over the generated html.
    expect(component.find('.comment-box')).to.exist;
  });

  // Just testing HTML, it's pretty flexible. The dev can change the implementation.
  it('Shows a comment list', () => {
    // Jquery find accepts a css selector. We test over the generated html.
    expect(component.find('.comment-list')).to.exist;
  });
});
