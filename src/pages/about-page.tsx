import React from "react";
import Banner from "../components/main-banner";
import Footer from "../components/footer";
import MainHeader from "../components/main-header";
import AboutUs from "../components/about-components/about";
import StyleSwitcher from "../components/style-switcher";
function AboutPage() {
  return (
    <div>
      <StyleSwitcher />
      <div className="page-wrapper">
        <MainHeader />
        <Banner />
        <AboutUs />
        <Footer />
      </div>
    </div>
  );
}
export default AboutPage;
