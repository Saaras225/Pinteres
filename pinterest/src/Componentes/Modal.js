import React from 'react';
import './Modal.css'

function Modal (props) {
        return (
            <div className="container-modal" onClick={(e)=>{
                if(e.target.getAttribute("class") === "container-modal"){
                    props.onClose()
                }
                }}>
                <i className="fas fa-angle-left"></i>    
            <div className="modal">
                <div className="header-modal">
                    <i className="fas fa-ellipsis-h"></i>
                    <button className="btn-send"><i class="fas fa-upload"></i> Enviar</button>
                    <button className="btn-save"><i class="fas fa-thumbtack"></i> Guardar</button>
                </div>

                <div className="containerImgyText">
                    <div className="img-container">
                        <img className="img-modal" src={props.img} alt=""/>
                    </div>
                    <div className="text-container">
                        <h5>{props.phototitle}</h5>
                        <button className="link">yourphoto.com</button>
                        <p className="parrafo">Hope you like this photo, if you do...put a like.</p>
                        <p className="parrafo">Publicado el 14 de Abril de 2019</p>
                        <p className="parrafo">{props.category}</p>
                        <hr className="line"/>
                        <p className="texto">Fotos y comentarios</p>
                        <button className="btn-numberfotos"> 10 Fotos</button>
                        <p className="coments">Comentarios</p>
                    </div>
                </div>
            </div>
            </div>
        )
}

export default Modal;