import React, { useState } from "react";
import Banner from "../components/main-banner";
import Footer from "../components/footer";
import MainHeader from "../components/main-header";
import AboutUs from "../components/about-components/about";
import MobileNav from "../components/mobile-navigation";
import SearchPopup from "../components/SearchPopup";
import StyleSwitcher from "../components/style-switcher";

function AboutPage({ setDarkMode }) {
  const [searchPopup, setSearchPopup] = useState<Boolean>(false);
  const [mobileNav, setMobileNav] = useState<Boolean>(false);

  return (
    <div>
      <StyleSwitcher setDarkMode={setDarkMode} />
      <div className="page-wrapper">
        <MainHeader
          setSearchPopup={setSearchPopup}
          searchPopup={searchPopup}
          setMobileNav={setMobileNav}
        />
        <Banner
          title="About Us"
          bgImage="assets/images/backgrounds/office.jpg"
        />
        <AboutUs />
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
export default AboutPage;
