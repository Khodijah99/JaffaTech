import React, { useState } from "react";
import Slider from "../components/slider";
import Header from "../components/header";
import DeliveringIT from "../components/deliveringIT";
import CompanyIntro from "../components/company-intro";
import Services from "../components/services";
import OurProject from "../components/project";
import Footer from "../components/footer";
import OurPartners from "../components/partners";
import MobileNav from "../components/mobile-navigation";
import SearchPopup from "../components/SearchPopup";
import StyleSwitcher from "../components/style-switcher";

function Homepage({ setDarkMode }) {
  const [searchPopup, setSearchPopup] = useState<Boolean>(false);
  const [mobileNav, setMobileNav] = useState<Boolean>(false);
  return (
    <div>
      <StyleSwitcher setDarkMode={setDarkMode} />
      <div className="page-wrapper">
        <Header
          setSearchPopup={setSearchPopup}
          searchPopup={searchPopup}
          setMobileNav={setMobileNav}
        />
        <Slider />
        <DeliveringIT />
        <CompanyIntro />
        <Services />
        <OurProject />
        <OurPartners />
        <Footer />
        <MobileNav setMobileNav={setMobileNav} mobileNav={mobileNav} />
        <SearchPopup
          setSearchPopup={setSearchPopup}
          searchPopup={searchPopup}
        />
      </div>
    </div>
  );
}
export default Homepage;
