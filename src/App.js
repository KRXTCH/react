import React from 'react';
import "./App.css";
import NavBar from './pages/components/NavBar';
import AboutMe from "./pages/main-pages/AboutMe";
import Home from "./pages/main-pages/Home.js";
import Projects from "./pages/main-pages/Projects";
import StickyBox from "react-sticky-box";


function App() {
  return (
    <div className="App">
      <div className="App-body">
      
        <div className="bg_img"  style={{paddingTop:"8vh"}}>
        <StickyBox style={{ zIndex: "5"}}>
          <NavBar />
        </StickyBox>
        <Home />
        <AboutMe />
        <Projects />
        </div>
        
      </div>
    </div>
  );
}

export default App;
