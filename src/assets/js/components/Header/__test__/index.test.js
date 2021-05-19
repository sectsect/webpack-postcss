import { render } from '@testing-library/react';
import React from 'react';
import Header from '../index';
import '@testing-library/jest-dom/extend-expect';

test('header renders with correct text', () => {
  const { getByTestId } = render(<Header />);
  const headerEl = getByTestId('header');

  expect(headerEl.textContent).toBe('App Component');
});
