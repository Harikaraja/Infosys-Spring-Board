import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Resources from "./components/Resources";
import Login from "./components/Login";
import Branches from "./components/Branches";
import Footer from "./components/Footer";

import "./assets/nav.css"
import "./assets/About.css"
import "./assets/services.css"
import "./assets/Branches.css"
import "./assets/Home.css"
import cover from  "./assets/images/cover.jpg";
import health1 from './assets/images/health1.jpg';
import health2 from './assets/images/health1.jpg';
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
                <Route path='/branches' element={<Branches/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/resources' element={<Resources/>} />
                <Route path='/Login' element={<Login/>} />
               
               
                <Route path='/' element={
                  <>
                    <div style={{display:'flex',flexDirection:'row',gap:'1rem',margin:'0.5rem 3rem'}}>
                      <div className="box1" style={{background:'rgb(238,44,130)', height:'80px',width:'290px',padding:'2rem',borderRadius:'5px',}}>
                        <p><a href="/" style={{textDecoration:'none',color:'white'}}>Book An Appointment</a></p>
                      </div>
                      <div className="box1" style={{background:'#1F509A', height:'80px',width:'290px',padding:'2rem',borderRadius:'5px',color:'white'}}>
                        <p><a href="/" style={{textDecoration:'none',color:'white'}}>Video Consultation</a></p>
                      </div>
                      <div className="box1" style={{background:'rgb(238,44,130)', height:'80px',width:'290px',padding:'2rem',borderRadius:'5px',color:'white'}}>
                        <p><a href="/" style={{textDecoration:'none',color:'white'}}>Submit Your Query</a></p>
                      </div>
                      <div className="box1" style={{background:'#1F509A', height:'80px',width:'290px',padding:'2rem',borderRadius:'5px',color:'white'}}>
                        <p><a href="/" style={{textDecoration:'none',color:'white'}}>Find A Doctor</a></p>
                      </div>
                      <div className="box1" style={{background:'rgb(238,44,130)', height:'80px',width:'290px',padding:'2rem',borderRadius:'5px',color:'white'}}>
                        <p><a href="/" style={{textDecoration:'none',color:'white'}}>Book Vaccination</a></p>
                      </div>
                    </div>
                    
                    <img src={cover} alt="covereed" width={100+'%'} height={550+'px'} />
                    <br/><br/><br/>
                    
                    <center><h1>Our  Vision</h1></center>
                    <div className="vision--class">
                      What Does Lorem Ipsum Mean? Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual
                      presentation. Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as "pain itself." Advertisements.What Does Lorem Ipsum Mean? Lorem ipsum, in graphical and textual context, 
                      refers to filler text that is placed in a document or visual
                      presentation. Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as "pain itself." Advertisements.What Does Lorem Ipsum Mean? Lorem ipsum, in graphical and textual context, refers to
                      filler text that is placed in a document or visual
                      presentation. Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as "pain itself." Advertisements.
                    </div>

                    <center><h1>Our  Mission</h1></center>
                    <div className="vision--class">
                      What Does Lorem Ipsum Mean? Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual
                      presentation. Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as "pain itself." Advertisements.What Does Lorem Ipsum Mean? Lorem ipsum, in graphical and textual context, 
                      refers to filler text that is placed in a document or visual
                      presentation. Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as "pain itself." Advertisements.What Does Lorem Ipsum Mean? Lorem ipsum, in graphical and textual context, refers to
                      filler text that is placed in a document or visual
                      presentation. Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as "pain itself." Advertisements.
                    </div>

                    <center><h1>Why is Health Essential</h1></center>
                    <div className="health1">
                    <img src={health1} alt="covereed" width={350+'px'} height={250+'px'} />
                    <p>What Does Lorem Ipsum Mean? Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual
                      presentation. Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as "pain itself." Advertisements.What Does Lorem Ipsum Mean? Lorem ipsum, in graphical and textual context, 
                      refers to filler text that is placed in a document or visual
                      presentation. Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as "pain itself." Advertisements.What Does Lorem Ipsum Mean? Lorem ipsum, in graphical and textual context, refers to
                      filler text that is placed in a document or visual</p>
                    </div>

                    <center><h1>Stay Healthy</h1></center>
                    <div className="health1">
                    <img src={health2} alt="covereedsd" width={350+'px'} height={250+'px'} />
                    <p>What Does Lorem Ipsum Mean? Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual
                      presentation. Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as "pain itself." Advertisements.What Does Lorem Ipsum Mean? Lorem ipsum, in graphical and textual context, 
                      refers to filler text that is placed in a document or visual
                      presentation. Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as "pain itself." Advertisements.What Does Lorem Ipsum Mean? Lorem ipsum, in graphical and textual context, refers to
                      filler text that is placed in a document or visual</p>
                    </div>
                  </>
                } />
                

              </Routes>

          </Router>
          
         <Footer/>
        </>
        
    );
}

export default App;