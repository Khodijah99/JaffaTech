import React from "react";
import StyleSwitcher from "../components/style-switcher";
import MainHeader from "../components/main-header";
import Banner from "../components/main-banner";
import SoftwareOutsourcing from "../components/services-components/services-outsourcing";
import Footer from "../components/footer";
function OutsourcingServicesPage() {
  return (
    <div>
      <StyleSwitcher />
      <div className="page-wrapper">
        <MainHeader />
        <Banner />
        <SoftwareOutsourcing />
        <Footer />
      </div>
    </div>
  );
}
export default OutsourcingServicesPage;
