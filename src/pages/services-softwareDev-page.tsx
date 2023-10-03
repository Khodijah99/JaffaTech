import React from "react";
import StyleSwitcher from "../components/style-switcher";
import MainHeader from "../components/main-header";
import Banner from "../components/main-banner";
import SoftwareDev from "../components/services-components/services-softwareDev";
import Footer from "../components/footer";
function SoftwareDevPage() {
  return (
    <div>
      <StyleSwitcher />
      <div className="page-wrapper">
        <MainHeader />
        <Banner />
        <SoftwareDev />
        <Footer />
      </div>
    </div>
  );
}
export default SoftwareDevPage;
