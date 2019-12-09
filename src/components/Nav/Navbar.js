import React, { Component } from "react"
import { slide as Menu } from 'react-burger-menu'
import './Navbar.css'
class Navbar extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return ( 
      
        <header>
         
          <div className="header-logo">
            <a href="index.html">ayenem</a>
          </div>
      <Menu right disableAutoFocus width={ 230 } >
      <a  className="menu-item--small item" href="" style={{ color:'white', marginTop:'-30px'  }}><b style={{ fontSize:'24px' }}>ayenem.</b></a>
      <br/>
        <a  className="menu-item--small" href="#home" style={{ color:'lightgrey' }}>Home</a>
        <a  className="menu-item--small" href="#about" style={{ color:'lightgrey' }}>About</a>
        <a  className="menu-item--small" href="#services" style={{ color:'lightgrey' }}>Services</a>
        <a  className="menu-item--small" href="#partners" style={{ color:'lightgrey' }}>Partners</a>
        <a  className="menu-item--small" href="#portfolio" style={{ color:'lightgrey' }}>Values</a>
        <a  className="menu-item--small" href="#contact" style={{ color:'lightgrey' }}>Contact</a>
      </Menu>
          

    
        </header>
    
    )
  }
}
export default Navbar
