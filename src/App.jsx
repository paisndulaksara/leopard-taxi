import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import ContactUs from "./pages/Contactus/Contactus"; // Make sure this page exists

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        {/* You can add more routes here, e.g. /about, /book, etc. */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
