// NEWS API 1aafdb26827c468ba763e89b7a6828e8
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