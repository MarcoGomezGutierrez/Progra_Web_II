import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Player from './Player';

class Game extends React.Component {
  render() {
    return (
      <div>
        <Player></Player>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Game/>);
