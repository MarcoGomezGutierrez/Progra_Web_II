import React from 'react';
import './player.scss'

const GRAVITY = 0.8;
const JUMP_FORCE = -20;

const COLISION = 95;

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 500,
            y: 0,
            right: true,
            walking: false,
            jumping: false,
            velocityY: 0
          };
        this.styles = {
          position: "absolute",
          left: `${this.state.x}px`,
          top: `${this.state.y}px`,
        };
    }

    

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
        document.addEventListener("keyup", this.handleKeyUp);
        this.intervalo = setInterval(this.update, 16);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
        document.addEventListener("keyup", this.handleKeyUp);
        clearInterval(this.intervalo);
    }

    handleKeyUp = (event) => {
        if (event.key === "d") {
            this.setState({
              walking: false,
            });
        }

        if (event.key === "a") {
            this.setState({
              walking: false,
            });
        }
    }

    handleKeyDown = (event) => {
        if (event.key === "d") {
          this.setState(prevState => ({
            x: prevState.x + 10, // Incrementa la coordenada "x" en 10
            right: true,
            walking: true,
          }), () => {
            // Actualiza el objeto styles con las nuevas coordenadas
            this.styles = {
                ...this.styles,
                left: `${this.state.x}px`,
                top: `${this.state.y}px`,
            };
          });
        }

        if (event.key === "a") {
          this.setState(prevState => ({
            right: false,
            walking: true,
          }), () => {
            // Actualiza el objeto styles con las nuevas coordenadas
            this.styles = {
                ...this.styles,
                left: `${this.state.x}px`,
                top: `${this.state.y}px`,
            };
          });
          }

          if (event.key === " ") { // Espacio para saltar
            if (!this.state.jumping) {
                this.setState({
                    jumping: true,
                    velocityY: JUMP_FORCE
                });
            }
        }

          console.log(this.state.x + ", " + this.state.y)
    };

    update = () => {
      if (this.state.right && this.state.walking) {
        this.setState(prevState => ({
          x: prevState.x + 10, // Decrementa la coordenada "x" en 10
        }), () => {
          // Actualiza el objeto styles con las nuevas coordenadas
          this.styles = {
              ...this.styles,
              left: `${this.state.x}px`,
              top: `${this.state.y}px`,
          };
        });
      } else if (this.state.walking) {
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
      if (this.state.jumping) {
          this.setState(prevState => ({
              y: prevState.y + prevState.velocityY,
              velocityY: prevState.velocityY + GRAVITY,
              jumping: false
          }), () => {
            // Actualiza el objeto styles con las nuevas coordenadas
            this.styles = {
                ...this.styles,
                left: `${this.state.x}px`,
                top: `${this.state.y}px`,
            };
          });
      } else if (this.state.y < 500-COLISION) {
        this.setState(prevState => ({
          y: prevState.y + prevState.velocityY,
          velocityY: prevState.velocityY + GRAVITY
        }), () => {
          // Actualiza el objeto styles con las nuevas coordenadas
          this.styles = {
              ...this.styles,
              left: `${this.state.x}px`,
              top: `${this.state.y}px`,
          };
        });
      } else {
        this.setState(() => ({
          y: 500-COLISION,
          velocityY: 0
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

    handleWalking() {
        if (this.state.right === true) return "player--walker-1";
        else return  "player--walker-2";
    }

    render() {
        return (
            <div style={this.styles} className={this.state.walking ? this.handleWalking() : 'player--blocker'}/>
        );
    }
}

export default Player;
