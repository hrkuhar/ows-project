import React, { Component } from "react";
import './HomePage.css';

class HomePage extends Component {
  state = {};
  render() {
    return (
      <div className="home-page">
        <div className="home-image-container">
          <h1 className="home-title">OWS RESTAURANT</h1>
          <p className="home-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis finibus erat. In hac habitasse platea dictumst. Aliquam vel enim libero. Nam sed laoreet eros. Ut varius, ligula id varius sollicitudin, lectus neque aliquet dui, at tempor turpis ipsum ac nisi. Etiam dictum aliquet lacus, id egestas purus pretium id. Pellentesque eget justo et arcu bibendum molestie.</p>
        </div>
        
      </div>
    )
  }
}

export default HomePage;
