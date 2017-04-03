import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Home } from './Home';

describe('Home Component', () => {
  it('should render as expected', () => {
    const component = shallow(<Home />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  })
})