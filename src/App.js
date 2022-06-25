import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from './pages/Home';
import Contect from "./pages/Contect";
import About from "./pages/About";
import Menu from "./pages/Menu";

import { BrowserRouter ,Route, Routes } from "react-router-dom";
  




function App() {
  return (
    // <div className="App">
      <BrowserRouter>
    
         <Navbar/>
         {/* <h1>Hello new project</h1> */}
     
          <Routes>
         
             <Route path="/home" element= {<Home />}/>
             <Route path="/menu" element= {<Menu/>}/>
             <Route path="/about" element= {<About />}/>
             <Route path="/contect" element= {<Contect/>}/>
             {/* <Route path="/" element= {Home}/> */}
           
             </Routes>
             <Footer/>
      </BrowserRouter> 
   
      
      
  //  </div>
  );
}

export default App;
