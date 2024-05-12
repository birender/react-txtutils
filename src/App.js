import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [darkMode,setDarkMode] = useState('light');
  const [alert ,seteAlerts ] = useState(null);

  const showAlerts=(message,type)=>{
    seteAlerts({
      message :message,
      type:type
    });

    setTimeout(() => {
      seteAlerts(null)
    }, 1500);
  }

  const toggleMode=()=>{
    if( darkMode === 'light'){
      setDarkMode('dark');
      document.body.style.backgroundColor ='grey';
      showAlerts("Dark Mode Has Been Enabled","success");
    }else{
      setDarkMode('light');
      document.body.style.backgroundColor ='white';
      showAlerts("light Mode Has Been Enabled","warning")
    }    
  }

  return (
    <>      
      <Navbar title="Textutils" mode={darkMode} toggleMode={toggleMode}/>   
      <Alert alert={alert}></Alert>
      <div className="container my-3">
        <TextForm showAlert = {showAlerts} heading="Enter Text Below" mode={darkMode}/>
        {/* <About mode={darkMode} /> */}
      </div>         
    </>    
  );
}
export default App;