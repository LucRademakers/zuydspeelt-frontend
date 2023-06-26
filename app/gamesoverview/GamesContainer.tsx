import React, { useEffect } from 'react';
import Phaser from 'phaser';

const MyGameComponent: React.FC = () => {
  useEffect(() => {
    const game = new Phaser.Game({
      // Phaser game configuration options
      // ...
    });

    // Clean up the game instance when the component unmounts
    return () => {
      game.destroy(true);
    };
  }, []);

  return (
    <div id="game-container">
      {/* The game will be rendered here */}
    </div>
  );
};

export default MyGameComponent;
