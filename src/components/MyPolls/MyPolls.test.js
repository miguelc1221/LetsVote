import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';
import MyPollsContainer, { MyPolls } from './MyPolls';

const mockStore = configureMockStore();

const polls = {
  polls: []
}

test('MyPolls Component should render as expected', () => {
  const store = mockStore({polls});
  const component = shallow(<MyPollsContainer store={store} />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
})
