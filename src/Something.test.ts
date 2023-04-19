import React from 'react';
import { render, screen } from '@testing-library/react';
import { MajorSearch } from './pages/MajorSearch';

test('renders Molloy Advising logo and header', () => {
  render(<MajorSearch />);

  const logo = screen.getByAltText('Molloy Logo');
  const header = screen.getByText('Molloy Advising');
  expect(logo).toBeInTheDocument();
  expect(header).toBeInTheDocument();
});