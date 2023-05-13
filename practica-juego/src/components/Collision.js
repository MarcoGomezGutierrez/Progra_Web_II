import { Component } from 'react';
import './collision.css'

class Collision extends Component {

  constructor(props) {
    super(props);
    this.state = {
        x : props.x,
        y : props.y,
        width : props.width,
        height : props.height,
    }

    this.styles = {
        position: "absolute",
        left: `${this.state.x}px`,
        top: `${this.state.y}px`,
        width: `${this.state.width}px`,
        height: `${this.state.width}px`
      };
  }

  isColliding(other) {
    return (
      this.state.x < other.x + other.width &&
      this.state.x + this.state.width > other.x &&
      this.state.y < other.y + other.height &&
      this.state.y + this.state.height > other.y
    );
  }

  render() {
    return (<div style={this.styles} className="collision"></div>);
  }

}

export default Collision;