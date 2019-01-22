import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import {Glyphicon} from 'react-bootstrap';
import Key from './Key';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Key />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders two spans', () => {
  const div = document.createElement('div');
  const iconKey = <Glyphicon glyph={'envelope'} />;
  const key = shallow(<Key chars={'wxyz'} number={9} />, div);
  expect(key.find('span').length).toEqual(2);
  expect(key.contains(iconKey)).toEqual(false);
});

it('renders a Glyphicon element', () => {
  const div = document.createElement('div');
  const iconKey = <Glyphicon glyph={'envelope'} />;
  const key = shallow(<Key glyph={'envelope'} />, div);
  expect(key.find('span').length).toEqual(0);
  expect(key.contains(iconKey)).toBe(true);
});