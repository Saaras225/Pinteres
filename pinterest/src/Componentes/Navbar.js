import React, { Component } from 'react';

import './Navbar.css';


class Navbar extends Component{

    render() {
      return (
        <form onSubmit={this.obtenerDatos}>
          <div className="container-all">
          <div id="medium">
          <button id='conticon'><i className='fab fa-pinterest'></i></button>
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
          <i id="shar" className='fas fa-comment-dots'></i>
          <i id="bell" className='far fa-bell'></i>
          <i id="points" className='fas fa-ellipsis-h'></i>
          </div>
          </div>
          </form>
      );
    }
  }
  
  export default Navbar;
