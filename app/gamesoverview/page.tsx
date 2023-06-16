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

  const buttonStyle = 'border-2 border-black rounded-lg py-3 px-10 bg-blue-500 text-lg';

  return (
    <div style={containerStyle}>
      <div>
        <h2 style={{ fontSize: '56px' }} className="text-blue-500">Games Overview</h2>
      </div>
      <div style={{ marginTop: '150px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '25px 120px' }}>
        <Link href="/game1">
          <button className={buttonStyle}>Game 1</button>
        </Link>
        <Link href="/game2">
          <button className={buttonStyle}>Game 2</button>
        </Link>
        <Link href="/game3">
          <button className={buttonStyle}>Game 3</button>
        </Link>
        <Link href="/game4">
          <button className={buttonStyle}>Game 4</button>
        </Link>
        <Link href="/game5">
          <button className={buttonStyle}>Game 5</button>
        </Link>
        <Link href="/game6">
          <button className={buttonStyle}>Game 6</button>
        </Link>
      </div>
    </div>
  );
}
