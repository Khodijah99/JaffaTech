import React, { useState } from "react";
import { NavLink } from "react-router-dom";
function MobileNav({ setMobileNav, mobileNav }) {
  const offMobileNav = () => {
    setMobileNav(false);
  };
  return (
    <div>
      {/* <!-- /.mobile-nav__wrapper Start --> */}
      <div className={`mobile-nav__wrapper ${mobileNav ? "expanded" : ""}`}>
        <div
          className="mobile-nav__overlay mobile-nav__toggler"
          onClick={offMobileNav}
        ></div>
        {/* <!-- /.mobile-nav__overlay --> */}
        <div className="mobile-nav__content">
          <span
            className="mobile-nav__close mobile-nav__toggler"
            onClick={offMobileNav}
          >
            <i className="fa fa-times"></i>
          </span>

          <div className="logo-box">
            <NavLink to="/">
              <img src="assets/images/resources/logo.png" alt="logo" />
            </NavLink>
          </div>
          {/* <!-- /.logo-box --> */}
          <div className="mobile-nav__container">
            <ul className="main-menu__list">
              <li className="current">
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/softwaredev">Services</NavLink>
              </li>
              <li>
                <NavLink to="/products">Product</NavLink>
              </li>
              <li className="dropdown">
                <NavLink to="/">
                  Projects
                  <button aria-label="dropdown toggler">
                    <i className="fa fa-angle-down"></i>
                  </button>
                </NavLink>

                <ul>
                  <li>
                    <a href="projects-page-1.html">Project 01</a>
                  </li>
                  <li>
                    <a href="project-carousel-1.html">Project Carousel 01</a>
                  </li>
                  <li>
                    <a href="projects-page-2.html">Project 02</a>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          {/* <!-- /.mobile-nav__container --> */}

          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <a href="mailto:needhelp@packageName__.com">
                info "at" jaffatech.com
              </a>
            </li>
            <li>
              <i className="fa fa-phone-alt"></i>
              <a href="tel:+234 8087717597">+234 8087717597</a>
            </li>
          </ul>
          {/* <!-- /.mobile-nav__contact --> */}
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-facebook-square"></a>
              <a href="#" className="fab fa-pinterest-p"></a>
              <a href="#" className="fab fa-instagram"></a>
            </div>
            {/* <!-- /.mobile-nav__social --> */}
          </div>
          {/* <!-- /.mobile-nav__top --> */}
        </div>
        {/* <!-- /.mobile-nav__content --> */}
      </div>
      {/* <!-- /.mobile-nav__wrapper End --> */}
    </div>
  );
}

export default MobileNav;
