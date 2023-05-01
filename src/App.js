import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Forum from "./components/Forum";
import Login from "./components/Login";


import "./assets/nav.css"
import "./assets/About.css"

import 
{
  BrowserRouter as Router,
  Route
  
} from "react-router-dom";

import { Routes } from "react-router-dom";

const App = ()=>{ 
   
    return(
        <>
          <Router>
             <Navbar/>
             <Routes>
                
                
                <Route path='/about' element={<About/>} />
                <Route path='/services' element={<Services/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/forum' element={<Forum/>} />
                <Route path='/Login' element={<Login/>} />
              </Routes>
          </Router>
          
          
        </>
        
    );
}

export default App;