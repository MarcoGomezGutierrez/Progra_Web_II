import imagenSrc from './max-payne.png';

// Declaramos una clase de JavaScript ES6
class Juego {
    constructor(nombre) {
      this.nombre = nombre;
    }
  }
  
  // Creamos un juego
  const juego = new Juego('Max Payne');
  
  const parrafo = document.createElement('p');
  parrafo.textContent = `Me encanta ${juego.nombre}.`;
  
  // Creamos la cabecera
  const encabezado = document.createElement('h1');
  encabezado.textContent = 'El miedo le da alas a los hombres';
  
  // Agrega el encabezado al div #root
  const app = document.querySelector('#root');
  app.append(encabezado, parrafo);

  const imagen = document.createElement('img'); 
  imagen.src = imagenSrc;

  app.append(encabezado, parrafo, imagen);