import React, { Component } from 'react';

import Navbar from './Componentes/Navbar';
import Modal from './Componentes/Modal';
import './Componentes/Modal.css'
import './Componentes/Api.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      items:[],
      isLoaded:false,
      pageCounter:1,
      modal:false,
      title:null,
      description:null,
    }
    this.openModal=this.openModal.bind(this);
    this.closeModal=this.closeModal.bind(this);
    
  }

  callingPage=(page)=>{
    fetch('https://pixabay.com/api/?key=12148037-e56b019734e5094d2a3274cef&image_type=all&orientation=all&page='+page+'&per_page=20&category=feelings')
    .then(res => res.json())
    .then((result)=> {
        console.log([...this.state.items,...result.hits])
        this.setState({
          ...this.state,
          pageCounter: page,
          items:[...this.state.items,...result.hits]});
        });
  }

  componentDidMount(){
    window.onscroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop
        >= document.documentElement.offsetHeight
      ) {
        this.callingPage(this.state.pageCounter+1)
      }
    };
    this.callingPage(this.state.pageCounter)
        }

  renderImage = (image) => {
    return (
      
      <div className="item" key={image.id}>
        <img id="img"  src={image.previewURL} onClick={(e)=>this.openModal(image)} />
        <div className="container">
          <p id="user">{image.user}</p>
          <p id="user">{image.category}</p>
        </div>
      </div>
      
    );
  }

  openModal(image){
    console.log(image.target);
    this.setState({
    ...this.state,
    modal:image.previewURL,
    title: image.user,
    description:image.category,
  })
  }

  closeModal(){
    this.setState({
    ...this.state,
    modal:false
  })
  }

  render() {
      return(
        <div className="App">
        <Navbar />
        <div className="masonry">
        {this.state.items.map(link=> this.renderImage(link))};
        </div>
        <div>
        {this.state.modal && <Modal onClose={this.closeModal}  img={this.state.modal} phototitle={this.state.title} category={this.state.description}/> }
        </div>
        </div>
      );
  }

  }

export default App;