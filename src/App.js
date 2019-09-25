import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

import Posts from './components/Posts';
import Postform from './components/Postform';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Postform/>
        <hr/>
        <Posts/>
      </div>
    )
  }
}
