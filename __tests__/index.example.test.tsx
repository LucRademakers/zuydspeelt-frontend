import { render, screen } from '@testing-library/react';
import Home from '@/app/page';
import '@testing-library/jest-dom';

// Example test that verifies the Next.js logo is present on the home page
describe('Home', () => {
    it('renders the next.js logo', () => {
        render(<Home />);
        const logo = screen.getByAltText('Next.js Logo');
        expect(logo).toBeInTheDocument();
    });
});