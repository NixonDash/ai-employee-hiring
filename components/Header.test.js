import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders header with navigation links', () => {
  render(<Header />);
  const homeLink = screen.getByText(/home/i);
  const aboutLink = screen.getByText(/about us/i);
  const employeesLink = screen.getByText(/ai employees/i);
  const pricingLink = screen.getByText(/pricing/i);
  const contactLink = screen.getByText(/contact us/i);

  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(employeesLink).toBeInTheDocument();
  expect(pricingLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
});
