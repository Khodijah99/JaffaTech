import React from "react";
import { NavLink } from "react-router-dom";
function TopHeader() {
  return (
    <div>
      <header className="main-header main-header-two clearfix">
        <div className="main-header__top">
          <div className="main-header__top-inner clearfix">
            <div className="main-header__top-left">
              <ul className="list-unstyled main-header__top-address">
                <li>
                  <div className="icon">
                    <span className="icon-pin"></span>
                  </div>
                  <div className="text">
                    <p>No 9, Gindiri Street, Garki II Abuja, Nigeria.</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-email"></span>
                  </div>
                  <div className="text">
                    <p>
                      <a href="mailto:needhelp@company.com">
                        info "at" jaffatech.com
                      </a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="main-header__top-right">
              <div className="main-header__top-right-content">
                <ul className="list-unstyled main-header__top-right-menu">
                  <li>
                    <NavLink to="/about">About </NavLink>
                  </li>
                  <li>
                    <NavLink to="/projects"> Projects </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact"> Contact </NavLink>
                  </li>
                </ul>
                <div className="main-header__top-right-social">
                  <NavLink to="/">
                    <i className="fab fa-twitter"></i>
                  </NavLink>
                  <NavLink to="/">
                    <i className="fab fa-facebook"></i>
                  </NavLink>
                  <NavLink to="/">
                    <i className="fab fa-pinterest-p"></i>
                  </NavLink>
                  <NavLink to="/">
                    <i className="fab fa-instagram"></i>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="main-menu main-menu-two clearfix">
          <div className="main-menu__wrapper clearfix">
            <div className="main-menu__left main-menu__left--two">
              <div className="main-menu__logo">
                <NavLink to="/">
                  <img
                    className="logo-dark"
                    src="assets/images/resources/logo.png"
                    alt="logo1"
                  />
                  <img
                    className="logo-light"
                    src="assets/images/resources/logo.png"
                    alt="logo2"
                  />
                </NavLink>
              </div>
              <div className="main-menu__main-menu-box main-menu__main-menu-box--two">
                <NavLink to="/" className="mobile-nav__toggler">
                  <i className="fa fa-bars"></i>
                </NavLink>
                <ul className="main-menu__list">
                  <li className=" current ">
                    <NavLink to="/"> Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about"> About Us </NavLink>
                  </li>
                  <li>
                    <NavLink to="/softwaredev"> Services </NavLink>
                  </li>
                  <li>
                    <NavLink to="/projects"> Projects </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact"> Contact </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="main-menu__right">
              <div className="main-menu__search-call">
                <div className="main-menu__call">
                  <div className="main-menu__call-icon">
                    <img
                      src="./assets/files/assets/images/icon/main-menu-icon-comment.png"
                      alt="search"
                    />
                  </div>
                  <div className="main-menu__call-number">
                    <p>Have any question?</p>
                    <h5>
                      <a href="tel:234 8087717597">
                        <span>Free</span> +234 8087717597
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="main-menu__search-box">
                <NavLink to="/">
                  <div className="main-menu__search search-toggler icon-magnifying-glass"></div>
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="stricky-header stricked-menu main-menu main-menu-two">
        <div className="sticky-header__content"></div>
        {/* <!-- /.sticky-header__content --> */}
      </div>
      {/* <!-- /.stricky-header --> */}
    </div>
  );
}
export default TopHeader;
