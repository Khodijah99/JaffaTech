import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Header({ setSearchPopup, searchPopup, setMobileNav }) {
  const onSearchPopupHandler = () => {
    setSearchPopup(true);
  };
  const mobileNavHandler = () => {
    setMobileNav(true);
  };

  const [isSticky, setSticky] = useState<boolean>(false);

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 130) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);
  //To display responsive menu => Add class Expanded.
  const [expand, setExpand] = useState<Boolean>(false);

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
                      {" "}
                      <span>info "at" jaffatech.com</span>
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
                    <NavLink to="/softwaredev"> Services </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact"> Contact </NavLink>
                  </li>
                </ul>
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
                <span
                  className="mobile-nav__toggler"
                  onClick={mobileNavHandler}
                >
                  <i className="fa fa-bars"></i>
                </span>
                <ul className="main-menu__list">
                  <li>
                    <NavLink to="/"> Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about"> About Us </NavLink>
                  </li>
                  <li>
                    <NavLink to="/softwaredev"> Services </NavLink>
                  </li>
                  <li className="dropdown">
                    <NavLink to="/products"> Products </NavLink>

                    <ul>
                      <li>
                        <NavLink to="/products"> Smart Bills </NavLink>
                      </li>
                      <li>
                        <NavLink to="/products"> WaterBoard </NavLink>
                      </li>
                      <li>
                        <NavLink to="/products">Another Products </NavLink>
                      </li>
                      <li>
                        <NavLink to="/products">Other Products </NavLink>
                      </li>
                    </ul>
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
                      src="assets/images/icon/main-menu-icon-comment.png"
                      alt=""
                    />
                  </div>
                  <div className="main-menu__call-number">
                    <p>Have any question?</p>
                    <h5>
                      <span>
                        <span>Free</span> +234 8087717597
                      </span>
                    </h5>
                  </div>
                </div>
                <div
                  className="main-menu__search-box"
                  onClick={onSearchPopupHandler}
                >
                  <span className="main-menu__search  search-toggler icon-magnifying-glass"></span>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div
        className={`stricky-header stricked-menu main-menu main-menu-two ${
          isSticky ? "stricky-fixed" : " "
        }`}
      >
        <div className="sticky-header__content">
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
                <span
                  className="mobile-nav__toggler"
                  onClick={mobileNavHandler}
                >
                  <i className="fa fa-bars"></i>
                </span>
                <ul className="main-menu__list">
                  <li>
                    <NavLink to="/"> Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about"> About Us </NavLink>
                  </li>
                  <li>
                    <NavLink to="/softwaredev"> Services </NavLink>
                  </li>
                  <li className="dropdown">
                    <NavLink to="/products"> Products </NavLink>

                    <ul>
                      <li>
                        <NavLink to="/products"> Smart Bills </NavLink>
                      </li>
                      <li>
                        <NavLink to="/products"> WaterBoard </NavLink>
                      </li>
                      <li>
                        <NavLink to="/products">Another Products </NavLink>
                      </li>
                      <li>
                        <NavLink to="/products">Other Products </NavLink>
                      </li>
                    </ul>
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
                      src="assets/images/icon/main-menu-icon-comment.png"
                      alt=""
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
                <div
                  className="main-menu__search-box"
                  onClick={onSearchPopupHandler}
                >
                  <span className="main-menu__search search-toggler icon-magnifying-glass"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /.sticky-header__content --> */}
      </div>
      {/* <!-- /.stricky-header --></div> */}
    </div>
  );
}
export default Header;
