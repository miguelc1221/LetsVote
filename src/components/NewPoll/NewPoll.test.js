import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';
import NewPollContainer, { NewPoll } from './NewPoll';

const mockStore = configureMockStore();

const polls = {
  isSavingPolls: false,
  polls: []
}

test('NewPoll Component should render as expected', () => {
  const store = mockStore({polls});
  const component = shallow(<NewPollContainer store={store} />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
})
