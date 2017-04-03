import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Navbar } from './Navbar';

describe('Navbar Component', () => {
  it('should render as expected', () => {
    const component = shallow(<Navbar auth={{}} />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  })
})