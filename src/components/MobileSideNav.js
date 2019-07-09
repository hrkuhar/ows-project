import React, { Component } from "react";
import "./MobileSideNav.css";

class MobileSideNav extends Component {
  state = {};

  render() {
    return (
      <nav class={this.props.show == true ? "mobile-side-nav nav-visible" : "mobile-side-nav"}>
        <ul class="mobile-side-nav-items">
            <li>
            <div className="logo-container">
              <img className="img-main-logo" src={require("../resources/images/icon-logo-main.png")}></img>
        </div>
            </li>
          <li class="mobile-side-nav-item">
            <a href="/">HOME</a>
          </li>
          <li class="mobile-side-nav-item">
            <a href="/menu">MENU</a>
          </li>
          <li class="mobile-side-nav-item">
            <a href="/about">ABOUT US</a>
          </li>
          <li class="mobile-side-nav-item">
            <a href="/contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default MobileSideNav;
