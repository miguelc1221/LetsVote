import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NotFound from './NotFound';

describe('NotFound Component', () => {
  it('should render as expected', () => {
    const component = shallow(<NotFound />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  })
})