import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Player from './components/Player';


class Game extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      player: {
        x: 300,
        y: 200,
        width: 50,
        height: 80
      }
    }
  }

  componentDidMount() {
    document.addEventListener("keyup", this.handleKeyUp);
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
      document.removeEventListener("keydown", this.handleKeyDown);
      document.addEventListener("keyup", this.handleKeyUp);
  }

  handleKeyDown = (event) => {
    if (event.key === "d") {
      this.setState(prevState => ({
        player: {
          x: prevState.player.x + 10
        }
      })
    }

    if (event.key === "a") {
        
    }
  }

  render() {
    const { player} = this.state;

    return (
      <div>
        <Player
          x={player.x}
          y={player.y}
          width={player.width}
          height={player.height}
        />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Game/>);
