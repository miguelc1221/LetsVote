import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';
import ChartContainer, { Chart } from './Chart';

const mockStore = configureMockStore();
const polls = {
  votingPoll: {},
  isLoadingPolls: false,
}

test('Chart Component should render as expected', () => {
  const store = mockStore({ polls });
  const component = shallow(<ChartContainer store={store}/>);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
})
