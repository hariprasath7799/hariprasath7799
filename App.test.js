import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './Navigation';
import Favourite from './Favourite';

test('renders learn react link', () => {
  render(<App />);
  render(<Header />);
  render(<Favourite />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
