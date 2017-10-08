import React from 'react';
import { expect } from 'chai';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import About from '../about.container';

Enzyme.configure({ adapter: new Adapter() });

describe('About page: ', () => {
  let location = { pathname: '/about'};
  it('should load component', () => {
    const component = mount(<About location={location}/>);
    expect(component.find('div-for-testing')).to.exist;
  });
});
