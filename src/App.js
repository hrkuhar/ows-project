import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import MainGrid from "./components/MainGrid";
import Header from "./components/Header";
import Backdrop from "./components/Backdrop";
import MobileSideNav from "./components/MobileSideNav";


class App extends Component{

  constructor(props){
    super(props);
    this.state = { showMobileSideNav : false };
    this.toggleMobileNav = this.toggleMobileNav.bind(this);
  }

  toggleMobileNav(){
    this.setState({ showMobileSideNav : !this.state.showMobileSideNav})
  };

  render(){
    return (
      <React.Fragment>
        <Header onToggleMobileNav={this.toggleMobileNav}/>
        <MainGrid />
        <Backdrop show={this.state.showMobileSideNav} onToggleMobileNav={this.toggleMobileNav}/>
        <MobileSideNav show={this.state.showMobileSideNav}/>
      </React.Fragment>
    );
  }

}

export default App;
