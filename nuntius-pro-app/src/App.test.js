import { render, screen } from '@testing-library/react';
import App from './App';

test('renders nuntius title', () => {
  render(<App />);
  const linkElement = screen.getByText(/nuntius/i);
  expect(linkElement).toBeInTheDocument();
});
