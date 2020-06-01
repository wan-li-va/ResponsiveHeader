import React, { Component } from 'react';
import './App.css';

export default class SmallHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <h1>WSJ</h1>
      </div>
    )
  }
}