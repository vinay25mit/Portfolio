import React from "react";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Profile from "./routes/Profile";
import OurTeam from "./routes/OurTeam";
import Contact from "./routes/Contact";
import {Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/OurTeam" element={<OurTeam/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Profile" element={<Profile/>} />
        <Route path="/Project" element={<Project/>} />
        <Route path="/Contact" element={<Contact/>} />
     </Routes>
    </>
  );
}

export default App;
