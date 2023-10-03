import React from "react";
import StyleSwitcher from "../components/style-switcher";
import MainHeader from "../components/main-header";
import Banner from "../components/main-banner";
import DisasterRecovery from "../components/services-components/services-disaster-recovery";
import Footer from "../components/footer";
function DisasterRecoveryPage() {
  return (
    <div>
      <StyleSwitcher />
      <div className="page-wrapper">
        <MainHeader />
        <Banner />
        <DisasterRecovery />
        <Footer />
      </div>
    </div>
  );
}
export default DisasterRecoveryPage;
