import React from 'react';
import Link from 'next/link';

export default function gamesoverview() {
  const containerStyle = {
    backgroundImage: "url('https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    /* Additional background styles here */
  };

  return (
    <div style={containerStyle}>
       {'Content of the games overview page'} 
       
    </div>
  );
};