import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';
import HomeContainer, { Home } from './Home';

const mockStore = configureMockStore();
const auth = {
  isAuthenticated: false,
  tokenExpired: false
}

test('Home Component should render as expected', () => {
  const store = mockStore({ auth });
  const component = shallow(<HomeContainer store={store} />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
})
