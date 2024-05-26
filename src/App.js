// NEWS API 1aafdb26827c468ba763e89b7a6828e8
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <div className="container my-3">
          <Routes>
          
            <Route exact path="/" element={<News key="general" category="General" />} />            
            <Route exact path="/business" element={<News key="business" category="business" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" category="entertainment" />} />
            <Route exact path="/health" element={<News key="health" category="health" />} />
            <Route exact path="/science" element={<News key="science" category="science" />} />
            <Route exact path="/sports" element={<News key="sports" category="sports" />} />
            <Route exact path="/technology" element={<News key="technology" category="technology" />} />
          
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App