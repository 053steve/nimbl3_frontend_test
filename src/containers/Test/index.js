import React, { Component } from 'react'
import logo from './logo.svg';
import './Test.css'


class Test extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.

        </p>
        <div className="row align-middle">
          <div className="columns">These colums have the same height.</div>
          <div className="columns">That's right, equal-height columns are possible with Flexbox too! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, tempora. Impedit eius officia possimus laudantium? Molestiae eaque, sapiente atque doloremque placeat! In sint, fugiat saepe sunt dolore tempore amet cupiditate.</div>
        </div>
      </div>
    );
  }
}

export default Test;
