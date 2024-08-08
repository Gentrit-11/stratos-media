// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import AboutUsPage from "./pages/AboutUsPage";
import OurWorkPage from "./pages/OurWorkPage";
import BlogPage from "./pages/BlogPage";
import PricePage from "./pages/PricePage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router basename="/StratosMedia">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/ourwork" element={<OurWorkPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

