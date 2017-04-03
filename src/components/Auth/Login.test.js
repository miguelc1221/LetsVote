import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';
import LoginContainer, { Login } from './Login';

const mockStore = configureMockStore();

test('Login Component should render as expected', () => {
  const store = mockStore({ auth: {} });
  const component = shallow(<LoginContainer store={store} />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
})
