import { render, screen } from '@testing-library/react';
import Searchbar from '@/app/searchbar/page';
import '@testing-library/jest-dom';

jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
  }));

  
  // Example test that verifies the searchbar is in the page
describe('Searchbar', () => {
    it('renders the searchbar', () => {
        render(<Searchbar />);
        const Search = screen.getByPlaceholderText('Search games...');
        expect(Search).toBeInTheDocument();
    });
});