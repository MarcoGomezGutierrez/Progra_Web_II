import { Component } from 'react'

class Player extends Component {

    constructor(props) {
        super(props);

        this.state = {
            x: props.x,
            y: props.y,
            width: props.width,
            height: props.height
        }
        this.style = {
            position: 'absolute',
            left: `${this.state.x}px`,
            top: `${this.state.y}px`,
            width: `${this.state.width}px`,
            height: `${this.state.height}px`,
            backgroundColor: 'black'
        }
    }

    render() {
        return (<div style={this.style}></div>)
    }

}

export default Player;