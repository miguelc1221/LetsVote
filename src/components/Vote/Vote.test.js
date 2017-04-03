import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';
import VoteContainer, { Vote } from './Vote';

const mockStore = configureMockStore();

const polls = {
  votingPoll: [],
  isLoadingPolls: false,
  isVoting: false,
  pollError: {}
}

test('Vote component should render as expected', () => {
  const store = mockStore({polls});
  const component = shallow(<VoteContainer store={store}/>);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
})
