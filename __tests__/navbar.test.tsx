import { render } from '@testing-library/react';
import { Navbar } from '@/components/Navbar';
//import DropdownMenu from '@/components/Dropdown';
import '@testing-library/jest-dom';

jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
}));

// Test of de navigatiebalk correct gerendered wordt
test('Rendered de navigatiebalk', () => {    
    render(<Navbar />);
})