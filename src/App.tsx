import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OutsourcingServicesPage from "./pages/services-outsourcing-page";
import "./App.css";
import Homepage from "./pages/home-page";
import ContactPage from "./pages/contact-page";
import SoftwareDevPage from "./pages/services-softwareDev-page";
import DisasterRecoveryPage from "./pages/services-disaster-recovery-page ";
import ConsultancyPage from "./pages/services-consultancy -page ";
import AboutPage from "./pages/about-page";
import ProductsPage from "./pages/products-page";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={` ${darkMode ? "dark" : "light"}`}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage setDarkMode={setDarkMode} />} />
          <Route
            path="/contact"
            element={<ContactPage setDarkMode={setDarkMode} />}
          />
          <Route
            path="/about"
            element={<AboutPage setDarkMode={setDarkMode} />}
          />
          <Route
            path="/products"
            element={<ProductsPage setDarkMode={setDarkMode} />}
          />
          <Route
            path="/softwaredev"
            element={<SoftwareDevPage setDarkMode={setDarkMode} />}
          />
          <Route
            path="/outsource"
            element={<OutsourcingServicesPage setDarkMode={setDarkMode} />}
          />
          <Route
            path="/disaster-recovery"
            element={<DisasterRecoveryPage setDarkMode={setDarkMode} />}
          />
          <Route
            path="/consultancy"
            element={<ConsultancyPage setDarkMode={setDarkMode} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
