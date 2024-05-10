import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
function App() {
  const [darkMode,setDarkMode] = useState('light');
  
  const toggleMode=()=>{
    if( darkMode === 'light'){
      setDarkMode('dark');
      document.body.style.backgroundColor ='grey';
    }else{
      setDarkMode('light');
      document.body.style.backgroundColor ='white';
    }    
  }

  return (
    <>      
      <Navbar title="Textutils" mode={darkMode} toggleMode={toggleMode}/>   
      <div className="container my-3">
        {/* <TextForm heading="Enter Text Below"/> */}
        <About mode={darkMode} />
      </div>         
    </>    
  );
}
export default App;