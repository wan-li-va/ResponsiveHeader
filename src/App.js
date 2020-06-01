import React, { Component } from 'react';
import './App.css';
import MediaQuery from "react-responsive";
import LargeHeader from './LargeHeader.js';
import SmallHeader from './SmallHeader.js';
import Subheader from './Subheader.js';
import Sidebar from './Sidebar.js';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // windowWidth: 0,
      // windowHeight: 0,
    }
  }

  // componentDidMount = () => {
  //   this.updateDimensions();
  //   window.addEventListener("resize", this.updateDimensions);
  // }

  // componentWillUnmount = () => {
  //   window.removeEventListener("resize", this.updateDimensions);
  // }

  // updateDimensions = () => {
  //   let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;
  //   let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;

  //   this.setState({ windowWidth, windowHeight })
  // }

  render() {

    return (
      <div>
        <div className="App">
          <MediaQuery query="(min-device-width: 1000px)">
            <LargeHeader className="header" />
            <Subheader />
          </MediaQuery>
        </div>
        <div className="App">
          <MediaQuery query="(min-device-width: 500px) and (max-device-width: 1000px)">
            <LargeHeader className="header" />
            <Sidebar className="Sidebar" />
          </MediaQuery>
        </div>
        <div className="App">
          <MediaQuery query="(max-device-width: 500px)">
            <SmallHeader className="header" />
            <Sidebar className="Sidebar" />
          </MediaQuery>
        </div>
      </div>
    )
  }
}