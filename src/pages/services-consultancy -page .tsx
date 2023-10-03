import React from "react";
import StyleSwitcher from "../components/style-switcher";
import MainHeader from "../components/main-header";
import Banner from "../components/main-banner";
import Consultancy from "../components/services-components/services-consultancy";
import Footer from "../components/footer";
function ConsultancyPage() {
  return (
    <div>
      <StyleSwitcher />
      <div className="page-wrapper">
        <MainHeader />
        <Banner />
        <Consultancy />
        <Footer />
      </div>
    </div>
  );
}
export default ConsultancyPage;
