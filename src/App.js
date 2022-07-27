// import Allroutes from './Allroutes';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

// import './App.css'

import Navbar1 from './components/Navbar1';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import { LS_LOGGIN_INFO } from './constants';

// import "./Style.css";




function App() {
  const [isLoggeIn,setLoggedIn]= useState(false);
  const [user,setUser] = useState({});

  

  useEffect(()=>{
    const loggedInUser = JSON.parse(localStorage.getItem(LS_LOGGIN_INFO));
    if(loggedInUser){
  
      setUser(loggedInUser);
      setLoggedIn(true);
      
    }},[]);
// console.log(isLoggeIn,user)
  return (
      // <div className='App'>
      // <div className='App-header'> 
    <Router>
        <Navbar1  isLoggeIn={isLoggeIn} user={user}></Navbar1>
          <Routes>
              <Route exact path= "/Home" element={<Home></Home>}> </Route>

              <Route exact path="/login" element={<Login setLoggedIn={setLoggedIn}></Login>}></Route>
              <Route exact path="/signup" element={<Signup></Signup>}></Route>
    
          </Routes>
    </Router>
    // </div>
    // </div>
  
  );
}

export default App;
