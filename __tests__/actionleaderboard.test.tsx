import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Action from '@/app/leaderboard/action/page';


jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

test('pagina rendert', () => {
  render(<Action/>);
});

test('titel aanwezig', () => {
  render(<Action/>);
  const Search = screen.getByText('Action');
  expect(Search).toBeInTheDocument();
});

test('knop werkt', () => {
  render(<Action />);
  expect(screen.getByText('Home')).toBeInTheDocument();
});

test('zoekbalk rendert', () => {
  render(<Action />);
  expect(screen.getByRole('textbox')).toBeInTheDocument();
});

test('game table rendert', () => {
  render(<Action />);
  expect(screen.getByText('Spel 1')).toBeInTheDocument();
});

test('game table rendert', () => {
  render(<Action />);
  expect(screen.getByText('Spel 2')).toBeInTheDocument();
});

test('game table rendert', () => {
  render(<Action />);
  expect(screen.getByText('Spel 3')).toBeInTheDocument();
});

test('game table rendert', () => {
  render(<Action />);
  expect(screen.getByText('Spel 4')).toBeInTheDocument();
});