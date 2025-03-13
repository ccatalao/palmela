import { render, screen } from '@testing-library/react';
import App from './app';

test('renders without crashing', () => {
  render(<App />);
});

test('contains navigation component', () => {
  render(<App />);
  const navElement = document.querySelector('nav');
  expect(navElement).toBeInTheDocument();
}); 