import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Login } from './Login';

describe('Login Component', () => {
  it('should render as expected', () => {
    const component = shallow(<Login auth={{loginError: {}}} />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  })
})