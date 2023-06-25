import { render, screen, fireEvent } from '@testing-library/react';
import { Navbar } from '@/components/Navbar';
import DropdownMenu from '@/components/Dropdown';
import '@testing-library/jest-dom';
import { IconButton } from '@mui/material';

jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
}));

// Test of de navigatiebalk correct gerendered word
test('Renderen van de navigatiebalk', () => {    
    render(<Navbar />);
});

//Test m.b.t. de klikbaarheid & navigatie van het logo
test('Klikbaarheid & Navigatie van het logo', () => {
    render(<IconButton />);
    const testLOGO = screen.getByText('button');
    fireEvent.click(testLOGO);
    expect(testLOGO.getAttribute('href')).toBeDefined();
});

