import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Player from './components/Player';
import Platform from './components/Platform';
import Collision from './components/Collision';

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

function rectIntersect(a, b) {
  return (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  );
}

class Game extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      player: {
        x: 0,
        y: 200,
        width: 50,
        height: 80
      },
      platform: {
        x: screenWidth,
        y: Math.round(Math.random() * screenHeight)
      }
    }
  }

  handleCollision() {
    console.log("Collision detected!");
    // Realiza alguna acción, como hacer que el jugador rebote
  }

  render() {
    const { player, platform } = this.state;
    const isColliding = rectIntersect(player, platform);
    console.log(`Player: x=${player.x}, y=${player.y}, width=${player.width}, height=${player.height}`)
    return (
      <div>
        <Player
          x={player.x}
          y={player.y}
          width={player.width}
          height={player.height}
        />
        <Collision
          x={player.x}
          y={player.y}
          width={player.width}
          height={player.height}
        ></Collision>
        <Platform
          x={platform.x}
          y={platform.y}
          width={platform.width}
          height={platform.height}
        />
        {isColliding && this.handleCollision()}
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Game/>);
