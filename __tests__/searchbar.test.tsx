import { render, screen, fireEvent } from '@testing-library/react';
import Searchbar from '@/app/components/searchbar';
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
    const inputElement = screen.getByPlaceholderText('Search games...');
    fireEvent.change(inputElement, { target: { value: 'Tic Tac Toe' } });
    expect(inputElement.value).toBe('Tic Tac Toe');
});


/*

// Test of de juiste actie getriggered wordt als er op een spel geklikt wordt
test('op een spel klikken triggered de juiste actie', () => {  
    const handleGameClick = jest.fn();
    render(<Searchbar handleGameClick={handleGameClick} />);
    const searchInput = screen.getByPlaceholderText('Search games...');
    

fireEvent.change(searchInput, { target: {value: 'Tic Tac Toe'} })
    const gameElement = screen.getByText('Tic Tac Toe');
    fireEvent.click(gameElement);
    
    expect(handleGameClick).toHaveBeenCalledWith('Tic Tac Toe');
});

*/