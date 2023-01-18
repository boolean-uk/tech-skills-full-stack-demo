import { render, screen } from '@testing-library/react';
import PlaceHours from '.';
import openingHours1 from './__mocks__/openingHours1.json'
import openingHours2 from './__mocks__/openingHours2.json'

test('renders PlaceHours with correct grouping 1', () => {
  render(<PlaceHours openingHours={openingHours1}/>);

  expect(screen.getByText(/Tuesday - Friday/i)).toBeInTheDocument();
  expect(screen.getByText(/Saturday/i)).toBeInTheDocument();
  expect(screen.getByText(/Sunday/i)).toBeInTheDocument();
});

test('renders PlaceHours with correct grouping 2', () => {
  render(<PlaceHours openingHours={openingHours2}/>);

  expect(screen.getByText(/Monday - Friday/i)).toBeInTheDocument();
  expect(screen.getByText(/Saturday - Sunday/i)).toBeInTheDocument();
});
