import React, { Component } from "react";
import './Backdrop.css';

class Backdrop extends Component {
    state = {};

  render() {
    return (
      <div class={this.props.show == true ? "backdrop backdrop-visible" : "backdrop"} onClick={this.props.onToggleMobileNav}>     
      </div>
    )
  }
}

export default Backdrop;
