import React from 'react';
import App from './App';
import { shallow } from 'enzyme';


describe('renders without crashing', () => {
  const wrapper  = shallow(<App />)
  it('it renders the app component', () => {
    expect(wrapper).toMatchSnapshot()
  });
});
