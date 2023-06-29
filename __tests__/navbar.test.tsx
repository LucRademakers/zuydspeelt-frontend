import { render, screen, fireEvent } from '@testing-library/react';
import { Navbar } from '@/components/Navbar';
import '@testing-library/jest-dom';

jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
}));

// Test of de navigatiebalk correct gerendered word
test('Renderen van de navigatiebalk', () => {    
    render(<Navbar />);
});

// Test m.b.t. de klikbaarheid & navigatie van het logo
test('Klikbaarheid & Navigatie van het logo', () => {
    render(<Navbar/>);
    const testLOGO = screen.getByLabelText('logo');
    fireEvent.click(testLOGO);
    expect(testLOGO.getAttribute('href')).toBeDefined();
});

// Test of 'ZUYDSPEELT' wordt weergegeven in de navigatiebalk
test('Weergave (ZUYDSPEELT) in de navigatiebalk', () => {
    render(<Navbar />);
    const testZUYDSPEELT = screen.getByText('ZUYDSPEELT');
    expect(testZUYDSPEELT).toBeInTheDocument();
});

// Test m.b.t. weergave & de klikbaarheid van 'CATEGORIES' + onderliggende dropdown menu
test('Weergave/Klikbaarheid (CATEGORIES) in de navigatiebalk', () => {
    render(<Navbar />);
    const testCATEGORIES = screen.getByText('Categories');
    expect(testCATEGORIES).toBeInTheDocument();
    fireEvent.click(testCATEGORIES);
    const testPAGE1 = screen.getByText('Puzzle');
    expect(testPAGE1).toBeInTheDocument();
    fireEvent.click(testPAGE1);
    const testPAGE2 = screen.getByText('Race');
    expect(testPAGE2).toBeInTheDocument();
    fireEvent.click(testPAGE2);
    const testPAGE3 = screen.getByText('Action');
    expect(testPAGE3).toBeInTheDocument();
    fireEvent.click(testPAGE3);
});

// Test m.b.t. weergave & de klikbaarheid van 'LOGIN'
test('Weergave/Klikbaarheid (LOGIN) in de navigatiebalk', () => {
    render(<Navbar />);
    const testLOGIN = screen.getByText('Login');
    expect(testLOGIN).toBeInTheDocument();
    fireEvent.click(testLOGIN);
});
