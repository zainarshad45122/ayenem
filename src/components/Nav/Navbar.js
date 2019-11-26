import React, { Component } from "react"
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

          <a id="header-menu-trigger" href="#0">
            <span className="header-menu-text">Menu</span>
            <span className="header-menu-icon"></span>
          </a>

          <nav id="menu-nav-wrap">
            <a href="#0" className="close-button" title="close">
              <span>Close</span>
            </a>

            <h3>ayenem.</h3>

            <ul className="nav-list">
              <li className="current">
                <a className="smoothscroll" href="#home" title="">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about" title="">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#services" title="">
                  Services
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#partners" title="">
                  Partners
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio" title="">
                  Values
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#contact" title="">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>
    
    )
  }
}
export default Navbar
