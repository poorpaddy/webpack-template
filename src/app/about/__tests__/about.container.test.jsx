import { expect } from 'chai';
import { mount } from 'enzyme';
import About from '../about.container';

describe("About page: ", () => {
  it("should load component", () => {
    const component = mount(<About />);
    expect(component.find('div-for-testing')).to.exist;
  });
});