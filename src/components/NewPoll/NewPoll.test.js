import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { NewPoll } from './NewPoll';

describe('NewPoll Component', () => {
  it('should render as expected', () => {
    const component = shallow(<NewPoll />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  })
})