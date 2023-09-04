import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from './pages';
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
      </Routes>
      <Footer />
    </Router>
  );
}
// element over component, what's the difference?
// why does element work and component doesn't

export default App
