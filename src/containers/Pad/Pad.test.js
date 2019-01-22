import React from 'react';
import { shallow } from 'enzyme';
import Pad from './Pad';

it('renders without crashing', () => {
  shallow(<Pad />);
});
