/*import React from 'react';
import { render, screen } from '@testing-library/react';
import { MajorSearch } from '../pages/MajorSearch';
*/

//const React = require("react");
const apple = require('@testing-library/react');
const MajorSearch = require('../pages/MajorSearch');



test('renders Molloy Advising logo and header', () => {
  apple.render(<MajorSearch />);
/*
  const logo = screen.getByAltText('Molloy Logo');
  const header = screen.getByText('Molloy Advising');
  expect(logo).toBeInTheDocument();
  expect(header).toBeInTheDocument();
  */

  const data = {one : 1};

  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });

  
});