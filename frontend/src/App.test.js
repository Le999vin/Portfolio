/*
author: Levin Pamay
Version: 1.
This test verifies that the `App` component renders with a link containing the text "learn react" using `@testing-library/react`.
*/ 
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
