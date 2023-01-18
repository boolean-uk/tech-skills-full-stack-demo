import { render, screen } from '@testing-library/react';
import Place from '.';
import data1 from './__mocks__/data1.json'
import data2 from './__mocks__/data2.json'

afterEach(() => {
  global.fetch.mockClear()
})

test('renders Place with data 1', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(data1),
    })
  );

  render(<Place />)

  expect(await screen.findByText(/Monday - Friday/i)).toBeInTheDocument()
  expect(await screen.findByText(/Saturday - Sunday/i)).toBeInTheDocument()
});

test('renders Place with data 2', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(data2),
    })
  );

  render(<Place />)

  expect(await screen.findByText(/Tuesday - Friday/i)).toBeInTheDocument()
  expect(await screen.findByText(/Saturday/i)).toBeInTheDocument()
  expect(await screen.findByText(/Sunday/i)).toBeInTheDocument()
});
