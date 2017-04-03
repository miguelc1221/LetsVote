import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Footer from './Footer';

test('Footer Component should render as expected', () => {
  const component = shallow(<Footer />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
})
