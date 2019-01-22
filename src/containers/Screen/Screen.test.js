import React from 'react';
import { shallow } from 'enzyme';
import Screen from './Screen';

it('renders without crashing', () => {
  shallow(<Screen />);
});
