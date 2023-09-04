import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from './pages';
import Tests from './pages/tests';
import Projects from './pages/projects';
import KidEkko from './pages/me';
import "./App.css";
import "./Extra.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/me" element={<KidEkko />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tests" element={<Tests />} />
      </Routes>
      <Footer />
    </Router>
  );
}
// element over component, what's the differnece?
// why does element work and component doesn't

export default App
