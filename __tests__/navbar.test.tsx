import { render } from '@testing-library/react';
import { Navbar } from '@/components/Navbar';
import '@testing-library/jest-dom';

// Test of de navigatiebalk correct gerendered wordt
test('Rendered de navigatiebalk', () => {    
    render(<Navbar />);
})