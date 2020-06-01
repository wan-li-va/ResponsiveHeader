import React, { Component } from 'react';
import './App.css';

export default class LargeHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <h1>The Wall Street Journal</h1>
      </div>
    )
  }
}