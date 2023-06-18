import { render, screen, fireEvent } from '@testing-library/react';
import Searchbar from '@/components/Searchbar';
import '@testing-library/jest-dom';

// useRouter wordt hier gemocked; anders werken de tests niet

jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
}));



// Test of de searchbar correct gerendered wordt
test('rendered de zoekbalk zonder foutmeldingen', () => {    
    render(<Searchbar />);
})


  
// Test of de correcte placeholder tekst aanwezig is ('Search games...')
test('correcte placeholder tekst', () => {
    render(<Searchbar />);
    const Search = screen.getByPlaceholderText('Search games...');
    expect(Search).toBeInTheDocument();
});



// Test of de zoekterm correct geüpdatet wordt
test('zoekterm wordt correct geüpdatet', () => {
    render(<Searchbar />);
    const inputElement = screen.getByPlaceholderText('Search games...') as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: 'Tic Tac Toe' } });
    expect(inputElement.value).toBe('Tic Tac Toe');
});



// Test of 'No matching games found.' weergegeven wordt
test('no matching games. wordt weergegeven wanneer het zoekresultaat niet bestaat', () => {
    render(<Searchbar />);
    const searchInput = screen.getByPlaceholderText('Search games...');
  
    fireEvent.change(searchInput, { target: { value: 'Dit spel bestaat niet' } });
  
    const noResultsMessage = screen.getByText('No matching games found.');
    expect(noResultsMessage).toBeInTheDocument();
});




