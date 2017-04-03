import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';
import NavbarContainer, { Navbar } from './Navbar';

const mockStore = configureMockStore();

test('Navbar Component should render as expected', () => {
  const store = mockStore({ auth: {} });
  const component = shallow(<NavbarContainer store={store} />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
})
