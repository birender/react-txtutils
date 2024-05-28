// NEWS API 1aafdb26827c468ba763e89b7a6828e8
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export class App extends Component {
  state = {
    progress : 0
  };
  
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    const apikey = process.env.REACT_APP_NEWS_API_KEY; // Old 1aafdb26827c468ba763e89b7a6828e8    
    return (
      <Router>
        <LoadingBar color='#f11946' progress={this.state.progress}/>
        <Navbar />        
        <div className="container my-3">
          <Routes>        
            <Route exact path="/" element={<News setProgress={this.setProgress} key="general" category="General" apikey={apikey} />} />            
            <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" category="business" apikey={apikey}/>} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" category="entertainment" apikey={apikey}/>} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" category="health" apikey={apikey}/>} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" category="science" apikey={apikey}/>} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress}  key="sports" category="sports" apikey={apikey}/>} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" category="technology" apikey={apikey}/>} />        
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App