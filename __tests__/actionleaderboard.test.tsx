import { render, screen } from '@testing-library/react';
import Action from '@/app/leaderboard/action/page';
import "@testing-library/jest-dom";

describe('Action page', () => {
  test('renders page title', () => {
    render(<Action />);
    const titleElement = screen.getByText('Action');
    expect(titleElement).toBeInTheDocument();
  });

  test('renders navigation link to Home', () => {
    render(<Action />);
    const homeLinkElement = screen.getByText('Home');
    expect(homeLinkElement).toBeInTheDocument();
  });

  test('renders search bar component', () => {
    render(<Action />);
    const searchbarComponent = screen.getByRole('search');
    expect(searchbarComponent).toBeInTheDocument();
  });

  test('renders game rankings', () => {
    render(<Action />);
    const gameRankings = screen.getAllByRole('row');
    expect(gameRankings).toHaveLength(41); // Total rows (including header rows) in all tables
  });
});
