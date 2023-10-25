import React, { useState } from "react";
import StyleSwitcher from "../components/style-switcher";
import MainHeader from "../components/main-header";
import Banner from "../components/main-banner";
import Consultancy from "../components/services-components/services-consultancy";
import Footer from "../components/footer";
import MobileNav from "../components/mobile-navigation";
import SearchPopup from "../components/SearchPopup";
function ConsultancyPage({ setDarkMode }) {
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
          title="Services / Consultancy"
          bgImage="assets/images/backgrounds/services.jpg"
        />
        <Consultancy />
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
export default ConsultancyPage;
