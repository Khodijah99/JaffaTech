import React, { useState } from "react";
import Banner from "../components/main-banner";
import Footer from "../components/footer";
import MainHeader from "../components/main-header";
import ContactSection from "../components/contact-componets/contact-section";
import MobileNav from "../components/mobile-navigation";
import SearchPopup from "../components/SearchPopup";
import StyleSwitcher from "../components/style-switcher";
function ContactPage({ setDarkMode }) {
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
          title="Contact Us"
          bgImage="assets/images/backgrounds/contact-bg.png"
        />
        <ContactSection />
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
export default ContactPage;
