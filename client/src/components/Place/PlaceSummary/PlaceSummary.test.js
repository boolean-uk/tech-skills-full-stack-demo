import { render, screen } from '@testing-library/react';
import PlaceSummary from '.';

test('renders PlaceSummary', () => {
  render(<PlaceSummary name="Edward's Diner" address="His Fancy Kitchen"/>);

  expect(screen.getByText(/Edward's Diner/i)).toBeInTheDocument();
  expect(screen.getByText(/His Fancy Kitchen/i)).toBeInTheDocument();
});
