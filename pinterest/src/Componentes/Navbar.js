import React, { Component } from 'react';

import './Navbar.css';

class Navbar extends Component{

busquedaRef = React.createRef();

obtenerDatos= (e) => {
  e.preventDefault();

  //esto trae el valor que se agrega en el input 
  
  const termino= this.busquedaRef.current.value;

  this.props.datosBusqueda(termino);

}

    render() {
      return (
        <form onSubmit={this.obtenerDatos}>
          <div className="container-all">
          <div id="medium">
          <div id='conticon'><img className="icon" id='icon' src='https://banner2.kisspng.com/20180802/xqb/kisspng-logo-clip-art-pinterest-computer-icons-image-pinterest-logo-svg-vector-amp-png-transparent-5b62da9e5ff952.9132679815332051503931.jpg'></img></div>
          <div id='cap-input'>
          <div id='all-input'>
          <img id="lupa" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3blNT9rjCAsWI0x6f7OQ765WmCjdkvv3LyIOCtji4JO7GYxu2"></img>
          <input id='buscar' ref={this.busquedaRef} type="search" placeholder="Buscar" ></input>
          </div>
          </div>
          </div>
          <div id="buttons" className="buttons">
          <button id="inicio">Inicio</button>
          <button id="siguiendo">Siguiendo</button>
          <button id="sara"><img src=""></img>Sara</button>
          </div>
          </div>
          </form>
      );
    }
  }
  
  export default Navbar;
