
/*import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import Loginform from "./components/loginform.js"



import { useEffect, useState } from 'react';
import {BrowserRouter,Routes,Route}from 'react-router-dom';


function App() {
  const[token,setToken] = useState(false)
  if(token){
    sessionStorage.setItem('token',JSON.stringify(token))
  }
  useEffect(() => {
    if(sessionStorage.getItem('token')){
      let data = JSON.parse(sessionStorage.getItem('token'))
      setToken(data)
    }
  },[])

  
  return ( 
   
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Loginform/>}/>
      
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
