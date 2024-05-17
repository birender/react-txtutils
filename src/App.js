
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/NavBar';
import News from './components/News';

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="container my-3">
        <News></News>
        </div>
      </div>
    )
  }
}

export default App