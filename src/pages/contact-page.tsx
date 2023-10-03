import React from "react";
import Banner from "../components/main-banner";
import Footer from "../components/footer";
import MainHeader from "../components/main-header";
import ContactSection from "../components/contact-componets/contact-section";
import StyleSwitcher from "../components/style-switcher";
function ContactPage() {
  return (
    <div>
      <StyleSwitcher />
      <div className="page-wrapper">
        <MainHeader />
        <Banner />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
export default ContactPage;
