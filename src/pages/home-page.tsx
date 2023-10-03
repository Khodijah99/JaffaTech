import React from "react";
import Slider from "../components/slider";
import TopHeader from "../components/top-header";
import DeliveringIT from "../components/deliveringIT";
import CompanyIntro from "../components/company-intro";
import Services from "../components/services";
import OurProject from "../components/project";
import Footer from "../components/footer";
import OurPartners from "../components/partners";
import Mobilewrap from "../components/mobile-wrapper";
import StyleSwitcher from "../components/style-switcher";

function Homepage() {
  return (
    <div>
      <StyleSwitcher />
      <div className="page-wrapper">
        <TopHeader />
        <Slider />
        <DeliveringIT />
        <CompanyIntro />
        <Services />
        <OurProject />
        <OurPartners />
        <Footer />
        <Mobilewrap />
        <a
          href="#"
          data-target="html"
          className="scroll-to-target scroll-to-top"
        >
          <i className="fa fa-angle-up"></i>
        </a>
      </div>
    </div>
  );
}
export default Homepage;
