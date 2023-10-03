import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OutsourcingServicesPage from "./pages/services-outsourcing-page";
import "./App.css";
import Homepage from "./pages/home-page";
import ContactPage from "./pages/contact-page";
import SoftwareDevPage from "./pages/services-softwareDev-page";
import DisasterRecoveryPage from "./pages/services-disaster-recovery-page ";
import ConsultancyPage from "./pages/services-consultancy -page ";
import AboutPage from "./pages/about-page";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/softwaredev" element={<SoftwareDevPage />} />
          <Route path="/outsource" element={<OutsourcingServicesPage />} />
          <Route path="/disaster-recovery" element={<DisasterRecoveryPage />} />
          <Route path="/consultancy" element={<ConsultancyPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
