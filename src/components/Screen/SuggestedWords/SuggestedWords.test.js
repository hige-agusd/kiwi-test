import React from 'react';
import ReactDOM from 'react-dom';
import {mount, shallow} from 'enzyme';
import {Col} from 'react-bootstrap';
import SuggestedWords from './SuggestedWords';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SuggestedWords />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders suggested words', () => {
  const div = document.createElement('div');
  const words = ['abc', 'def', 'ghi'];
  const suggestedWords = mount(<SuggestedWords words={words} selected={[0,0]} />, div);
  expect(suggestedWords.find('.col-xs-4').length).toEqual(words.length);
});

it('renders a "No matches found" message', () => {
  const div = document.createElement('div');
  const noMatches = <Col xs={12}>No Matches Found</Col>;
  const suggestedWords = shallow(<SuggestedWords words={[]} />, div);
  expect(suggestedWords.contains(noMatches)).toEqual(true);
});