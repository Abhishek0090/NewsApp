import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  c = "Abhishek"
  render() {
    return (
      <div>
        Hello this is my first Class based React app and {this.c}
      </div>
    )
  }
}
