import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders calculator', () => {
  render(<App />);
  const linkElement = screen.getByText(/AC/i);
  expect(linkElement).toBeInTheDocument();
});

test('handles division by zero', () => {
  render(<App />);
  fireEvent.click(screen.getByText('6'));
  fireEvent.click(screen.getByText('÷'));
  fireEvent.click(screen.getByText('0'));
  fireEvent.click(screen.getByText('='));
  expect(screen.getByText('Error')).toBeInTheDocument();
});
