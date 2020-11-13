import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders learn react link', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders 404 page on invalid route', () => {
  render(
    <MemoryRouter initialEntries={["/invalid"]}>
      <App />
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/not found/i);
  expect(linkElement).toBeInTheDocument();
});
