import React, { Component } from "react";
import './ContactPage.css';

class ContactPage extends Component {
  state = {};
  render() {
    return (
      <div className="reservation-page">
        <form class="reservation-form">
          <label for="reservation-email">Your Email</label>
          <input type="email" id="reservation-email"></input>
          <label for="reservation-text">Message</label>
          <textarea type="email" id="reservation-text" rows="10"></textarea>

          <button type="submit">SEND</button>
        </form>
      </div>
    )
  }
}

export default ContactPage;
