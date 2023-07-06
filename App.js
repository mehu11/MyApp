//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
//import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

  function App() {
    const [mode, setMode] = useState('light');//whether dark mode is enabled or not

    const toggleMode = ()=>{
      if(mode === 'light'){
          setMode('dark');
          document.body.style.backgroundColor = 'rgb(18 9 86)';
          document.title = 'TextUtils - Dark Mode';
          //setInterval(() => {
            //document.title = 'TextUtils is Amazing ';
            //}, 2000);
            //setInterval(() => {
              //document.title = 'Install TextUtils Now';
              // },1500);
           // }
        //  }
      }
      else{
       setMode('light');
       document.body.style.backgroundColor = 'white';
       document.title = 'TextUtils - Light Mode'
      }
    }
  
    return (
      <>
      <Router>
      <Navbar title="TextUtils" toggleMode={toggleMode} aboutText="AboutTextUtils" mode={mode} />
      <div className="container my-3">
        
        <Routes>
          <Route  exact path="/about" element={<About/>}>
          
          </Route>
          <Route  exact path="/" element={<TextForm heading="Entering the text to analyze below" mode={mode}/>}>
          
          </Route>
        </Routes>
      </div>
      
      </Router>
     
      </>
          );
}

export default App;


//exact path v/s path===> example===>/users and /users/home 

//<About />
//with the help of react router we make single page application
//page har click pe reload nhi hota
//we dont need to bring whole data from the server again and again 



//angular m routing built in hoti h 