import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import GamesOverview from '@/app/gamesoverview/page';
import React from 'react';
import Link from 'next/link';
import jquery from 'jquery';

// useRouter wordt hier gemocked; anders werken de tests niet

jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
}));

//check of de pagina rendert
test('Pagina rendert', () => {
    render(<GamesOverview/>)
});

//check of de titel op de pagina staat
test('Titel aanwezig', () => {
    render(<GamesOverview/>)
    const Search = screen.getByText('Games Overview');
    expect(Search).toBeInTheDocument();
});

//check of de eerste knop er staat
test('Knop aanwezig', () => {
    render(<GamesOverview/>)
    const Search = screen.getByText('Game 1')
    expect(Search).toBeInTheDocument();
})

//check of de eerste knop werkt
test('knop werkt', () => {
    render(<GamesOverview/>)
    document.body.innerHTML =
    '<div className="mt-12 grid grid-cols-2 gap-x-20 gap-y-8">'
    '    <Link href="/game1">'
    '      <button className="border-black rounded-lg py-3 px-14 bg-blue-300 text-white text-sm">'
    '        Game 1'
    '      </button>'
    '    </Link>'
    '</div>'

    const $ = require('jquery');
    $('#button').click();
    expect(Link).toBeCalled
})