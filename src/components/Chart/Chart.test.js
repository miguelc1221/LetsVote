import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Chart } from './Chart';

describe('Chart Component', () => {
  it('should render as expected', () => {
    const component = shallow(<Chart votingPoll={{}}/>);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  })
})