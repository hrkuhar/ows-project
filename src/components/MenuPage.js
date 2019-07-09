import React, { Component } from "react";
import "./MenuPage.css";
import menuItems from "../data/menuItems.json";

class MenuPage extends Component {
  state = {};

  constructor(){
    super();
    console.log(menuItems);
  }

  listItems = menuItems.map(item => (
    <div className="menu-item" key={item.Id.toString()}>
      <img
        className="menu-item-image"
        src={require("../resources/images/" + item.Image)}
      />
      <div className="menu-item-content">
        <div className="menu-item-name">{item.Title}</div>
        <div className="menu-item-description">{item.Description}</div>
        <div className="menu-item-price">{item.Price}</div>
      </div>
    </div>
  ));

  render() {
    return (
      <div className="menu-page">
        <div className="menu-items">{this.listItems}</div>
      </div>
    );
  }
}

export default MenuPage;
