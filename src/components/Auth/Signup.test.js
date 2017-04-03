import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';
import SignupContainer, { Signup } from './Signup';

const mockStore = configureMockStore();

test('Signup Component should render as expected', () => {
  const store = mockStore({ auth: {} });
  const component = shallow(<SignupContainer store={store} />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
})
