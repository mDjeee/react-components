import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import SearchBar from './Search-bar';

test('search input should change', () => {
  render(<SearchBar />);
  const searchInputEl: HTMLInputElement = screen.getByPlaceholderText(/Search/i);
  const testValue = '';

  fireEvent.change(searchInputEl, { target: { defaultValue: { testValue } } });
  expect(searchInputEl.defaultValue).toBe(testValue);
});
