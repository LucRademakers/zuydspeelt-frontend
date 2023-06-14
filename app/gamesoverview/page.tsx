import React from 'react';
import Link from 'next/link';

export default function GamesOverview() {
  const containerStyle = {
    backgroundImage: "url('https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const buttonStyle = {
    border: '1px solid #000000',
    borderRadius: '5px',
    padding: '5px',
    background: '#EAFF82',
    height: '55px',
    width: '275px',
    // fontFamily: 'Inter',
    fontSize: '16px',
  };

  return (
    <div style={containerStyle}>
      <div>
        <h2 style={{fontSize: '56px', color: '#EAFF82' }}>Games Overview</h2>
      </div>
      <div style={{ marginTop: '150px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '25px 120px' }}>
        <Link href="/game1">
          <button style={buttonStyle}>Game 1</button>
        </Link>
        <Link href="/game2">
          <button style={buttonStyle}>Game 2</button>
        </Link>
        <Link href="/game3">
          <button style={buttonStyle}>Game 3</button>
        </Link>
        <Link href="/game4">
          <button style={buttonStyle}>Game 4</button>
        </Link>
        <Link href="/game5">
          <button style={buttonStyle}>Game 5</button>
        </Link>
        <Link href="/game6">
          <button style={buttonStyle}>Game 6</button>
        </Link>
      </div>
    </div>
  );
}