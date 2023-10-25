import React, { useState } from "react";
import StyleSwitcher from "../components/style-switcher";
import MainHeader from "../components/main-header";
import Banner from "../components/main-banner";
import MobileNav from "../components/mobile-navigation";
import SearchPopup from "../components/SearchPopup";
import SoftwareDev from "../components/services-components/services-softwareDev";
import Footer from "../components/footer";
function SoftwareDevPage({ setDarkMode }) {
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
          title="Services / Software Outsourcing"
          bgImage="assets/images/backgrounds/services.jpg"
        />
        <SoftwareDev />
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
export default SoftwareDevPage;
