import React, { Component } from "react";
import './Header.css';

class Header extends Component {
  state = {};

  render() {
    return (
      <div className="header">
          <a href="/" className="main-logo-container">
              <img className="img-main-logo" src={require("../resources/images/icon-logo-main.png")}></img>
        </a>
        <div className="img-menu-mobile-container" onClick={this.props.onToggleMobileNav}>
              <img className="img-menu-mobile" src={require("../resources/images/icon-menu-mobile.png")}></img>
        </div>
        <ul class="nav-items">
          <li class="nav-item">
            <a href="/">HOME</a>
          </li>
          <li class="nav-item">
            <a href="/menu">MENU</a>
          </li>
          <li class="nav-item">
            <a href="/about">ABOUT US</a>
          </li>
          <li class="nav-item">
            <a href="/contact">CONTACT</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Header;
