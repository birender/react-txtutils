// NEWS API 1aafdb26827c468ba763e89b7a6828e8
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export class App extends Component {
  render() {
    const apikey = '6ebe665750794121a3eab86cfaedeff8'; // Old 1aafdb26827c468ba763e89b7a6828e8
    return (
      <Router>
        <Navbar />
        <div className="container my-3">
          <Routes>        
            <Route exact path="/" element={<News key="general" category="General" apikey={apikey} />} />            
            <Route exact path="/business" element={<News key="business" category="business" apikey={apikey}/>} />
            <Route exact path="/entertainment" element={<News key="entertainment" category="entertainment" apikey={apikey}/>} />
            <Route exact path="/health" element={<News key="health" category="health" apikey={apikey}/>} />
            <Route exact path="/science" element={<News key="science" category="science" apikey={apikey}/>} />
            <Route exact path="/sports" element={<News key="sports" category="sports" apikey={apikey}/>} />
            <Route exact path="/technology" element={<News key="technology" category="technology" apikey={apikey}/>} />        
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App