'use strict';

import React from 'react';
import Chat from '../Chat';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<Chat />).toJSON();
  expect(tree).toMatchSnapshot();
});