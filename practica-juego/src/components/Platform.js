import React from 'react';

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

class Platform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: screenWidth,
            y: Math.round(Math.random() * screenHeight)
          };
        this.styles = {
            position: "absolute",
            left: `${this.state.x}px`,
            top: `${this.state.y}px`,
            width: 100,
            height: 100,
            backgroundColor: "red",
        };
    }
    
    componentDidMount() {
        this.intervalo = setInterval(this.update, 16);
    }

    componentWillUnmount() {
        clearInterval(this.intervalo);
    }

    update = () => {
        if (this.state.x + this.styles.width + 5 > 0) {
            this.setState(prevState => ({
                x: prevState.x - 10, // Decrementa la coordenada "x" en 10
              }), () => {
                // Actualiza el objeto styles con las nuevas coordenadas
                this.styles = {
                    ...this.styles,
                    left: `${this.state.x}px`,
                    top: `${this.state.y}px`,
                };
              });
        }
    }

    render() {
        return (
            <div style={this.styles}>
            </div>
        );
    }
}

export default Platform;