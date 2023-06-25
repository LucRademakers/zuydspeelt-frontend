import { render, screen } from '@testing-library/react';
import { Navbar } from '@/components/Navbar';
import DropdownMenu from '@/components/Dropdown';
import '@testing-library/jest-dom';

jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
}));

jest.mock('@mui/icons-material', () => ({
  Attractions: () => <span data-testid="attractions-icon" />,
}));
jest.mock('../components/Dropdown', () => ({
  __esModule: true,
  default: () => <span data-testid="dropdown-menu" />,
}));

describe('Navbar component', () => {
  it('renders correctly', () => {
    render(<Navbar />);

    const appBar = screen.getByRole('toolbar');
    expect(appBar).toBeInTheDocument();

    const logoButton = screen.getByLabelText('logo');
    expect(logoButton).toBeInTheDocument();

    const attractionsIcon = screen.getByTestId('attractions-icon');
    expect(attractionsIcon).toBeInTheDocument();

    const title = screen.getByText('ZUYDSPEELT');
    expect(title).toBeInTheDocument();

    const buttonNewGames = screen.getByText('NewGames');
    expect(buttonNewGames).toBeInTheDocument();

    const dropdownMenu = screen.getByTestId('dropdown-menu');
    expect(dropdownMenu).toBeInTheDocument();

    const buttonLogin = screen.getByText('Login');
    expect(buttonLogin).toBeInTheDocument();
  });
});