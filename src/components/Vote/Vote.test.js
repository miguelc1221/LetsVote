import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Vote } from './Vote';

describe('Vote Component', () => {
  it('should render as expected', () => {
    const component = shallow(<Vote pollError={{}} votingPoll={{}}/>);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  })
})