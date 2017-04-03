import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Signup } from './Signup';

describe('Signup Component', () => {
  it('should render as expected', () => {
    const component = shallow(<Signup auth={{signUpError: {}}} />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  })
})