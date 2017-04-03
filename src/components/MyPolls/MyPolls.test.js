import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { MyPolls } from './MyPolls';

describe('MyPolls Component', () => {
  it('should render as expected', () => {
    const polls = [{ pollOne: 1, _id: 1}, { pollTwo: 2, _id: 2}]
    const component = shallow(<MyPolls polls={polls} />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  })
})