import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Player from './components/Player';
import Platform from './components/Platform';

class Game extends React.Component {
  render() {
    return (
      <div>
        <Player/>
        <Platform/>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Game/>);
