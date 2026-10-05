import { render } from '@testing-library/react';
import { test, expect } from 'vitest';
import App from './App';

test('renders the main page', () => {
  render(<App />);
  expect(document.body).toBeTruthy();
});