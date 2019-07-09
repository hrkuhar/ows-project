import React, { Component } from "react";
import "./MainGrid.css";
import Footer from "./Footer";
import HomePage from "./HomePage";
import AboutUsPage from "./AboutUsPage";
import MenuPage from "./MenuPage";
import ContactPage from "./ContactPage";
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class MainGrid extends Component {
 

  render() {
    return (
      <div className="main-grid">
        <Route path="/menu" component={MenuPage}></Route>
        <Route path="/about" component={AboutUsPage}></Route>
        <Route path="/contact" component={ContactPage}></Route>
        <Route path="/" exact component={HomePage}></Route>
        <Footer />
      </div>
    );
  }
}

export default MainGrid;
