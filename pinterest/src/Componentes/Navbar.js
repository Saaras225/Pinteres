import React, { Component } from 'react';

import './Navbar.css';


class Navbar extends Component{

    render() {
      return (
        <form onSubmit={this.obtenerDatos}>
          <div className="container-all">
          <div id="medium">
          <button id='conticon'><img className="icon" id='icon' src='/Imagenes/pinLogo.png'></img></button>
          <div id='cap-input'>
          <div id='all-input'>
          <img id="lupa" src="/Imagenes/buscador-musical.png"></img>
          <input id='buscar' ref={this.busquedaRef} type="search" placeholder="Buscar" ></input>
          </div>
          </div>
          </div>
          <div id="buttons" className="buttons">
          <button id="inicio">Inicio</button>
          <button id="siguiendo">Siguiendo</button>
          <button id="sarin">S</button>
          <button id="sara">Sara</button>
          <img id="shar" src='/Imagenes/share.png'></img>
          <img id="bell" src='/Imagenes/bell.jpg'></img>
          <img id="points" src='/Imagenes/points.jpg'></img>

          </div>
          </div>
          </form>
      );
    }
  }
  
  export default Navbar;
