import React, { useState } from "react";

import Banner from "../components/main-banner";
import Footer from "../components/footer";
import MainHeader from "../components/main-header";
import MobileNav from "../components/mobile-navigation";
import SearchPopup from "../components/SearchPopup";
import StyleSwitcher from "../components/style-switcher";
import Products from "../components/products-components/product";

function ProductsPage({ setDarkMode }) {
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
          title="Our Product"
          bgImage="assets/images/backgrounds/product-bg.jpg"
        />
        <Products />
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
export default ProductsPage;
