import { render, screen } from '@testing-library/react';
import Header from '../index';
import '@testing-library/jest-dom/extend-expect';

test('header renders with correct text', () => {
  render(<Header />);
  // screen.getByRole('');

  const headerEl = screen.getByRole('heading', {
    name: /App Component/i,
  });

  expect(headerEl).toBeInTheDocument();
});
