import { render, screen, fireEvent } from '@testing-library/react';
import Searchbar from '@/components/Searchbar';
import '@testing-library/jest-dom';

// useRouter wordt hier gemocked; anders werken de tests niet
jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
}));


// useFetch wordt hier gemocked; anders werken de tests niet
jest.mock('../hooks/useFetch', () => ({
    __esModule: true,
    default: () => ({
      data: [
        { id: 1, title: 'Game 1' },
        { id: 2, title: 'Game 2' },
      ],
      error: null,
    }),
}));

  
// Test of de searchbar correct gerendered wordt
test('Rendered de zoekbalk', () => {    
    render(<Searchbar />);
})

  
// Test of de correcte placeholder tekst aanwezig is ('Search games...')
test('Correcte placeholder tekst', () => {
    render(<Searchbar />);
    const Search = screen.getByPlaceholderText('Search games...');
    expect(Search).toBeInTheDocument();
});



// Test of de zoekterm correct geüpdatet wordt
test('Zoekterm wordt correct geüpdatet', () => {
    render(<Searchbar />);
    const inputElement = screen.getByPlaceholderText('Search games...') as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: 'Game 1' } });
    expect(inputElement.value).toBe('Game 1');
});


// Test of 'No matching games found.' weergegeven wordt
test('"No matching games." wordt weergegeven wanneer het zoekresultaat niet bestaat', () => {
    render(<Searchbar />);
    const searchInput = screen.getByPlaceholderText('Search games...');
  
    fireEvent.change(searchInput, { target: { value: 'Dit spel bestaat niet' } });
  
    const noResultsMessage = screen.getByText('No matching games found.');
    expect(noResultsMessage).toBeInTheDocument();
});




