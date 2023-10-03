import React from "react";
function Footer() {
  return (
    <div>
      {/* <!--Site Footer Start--> */}
      <footer className="site-footer">
        <div
          className="site-footer-bg-1 wow slideInLeft"
          data-wow-delay="100ms"
          data-wow-duration="2500ms"
        ></div>
        <div
          className="site-footer-bg-2 wow slideInRight"
          data-wow-delay="100ms"
          data-wow-duration="2500ms"
        ></div>
        <div className="site-footer__top">
          <div className="container">
            <div className="site-footer__top-inner">
              <div className="site-footer__top-left">
                <div className="site-footer__top-icon">
                  <span className="icon-artificial-intelligence"></span>
                </div>
                <h3 className="site-footer__top-title">
                  Helping you overcome your technology challenges
                </h3>
              </div>
              <div className="site-footer__top-right">
                <a href="about.html" className="thm-btn site-footer__btn">
                  Discover more
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer__middle">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="footer-widget__column footer-widget__about">
                  <div className="footer-widget__logo">
                    <a href="index.html">
                      <img src="assets/images/resources/logo.png" alt="" />
                    </a>
                  </div>
                  <div className="footer-widget__about-text-box">
                    <p className="footer-widget__about-text">
                      Send us a message.
                    </p>
                  </div>
                  <form className="footer-widget__newsletter-form">
                    <div className="footer-widget__newsletter-input-box">
                      <input
                        type="email"
                        placeholder="Email address"
                        name="email"
                      />
                      <button
                        type="submit"
                        className="footer-widget__newsletter-btn"
                      >
                        <img
                          src="assets/images/icon/footer-widget-newsletter-send-icon.png"
                          alt=""
                        />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="footer-widget__column footer-widget__links clearfix">
                  <h3 className="footer-widget__title">Links</h3>
                  <ul className="footer-widget__links-list list-unstyled clearfix">
                    <li>
                      <a href="about.html">About us</a>
                    </li>
                    <li>
                      <a href="projects-page-1.html">Our projects</a>
                    </li>
                    <li>
                      <a href="contact.html">Contacts</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="footer-widget__column footer-widget__contact clearfix">
                  <h3 className="footer-widget__title">Contact</h3>
                  <ul className="footer-widget__contact-list list-unstyled clearfix">
                    <li>
                      <div className="icon">
                        <span className="icon-telephone"></span>
                      </div>
                      <div className="text">
                        <p>
                          <a href="tel:980009850">+234 8087717597</a>
                        </p>
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
                    <li>
                      <div className="icon">
                        <span className="icon-pin"></span>
                      </div>
                      <div className="text">
                        <p>
                          No 9, Gindiri Street, Garki II
                          <br /> Abuja, Nigeria
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="footer-widget__column footer-widget__social-box clearfix">
                  <div className="site-footer__social">
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="site-footer__bottom-inner">
                  <p className="site-footer__bottom-text">
                    © All Copyright 2023 by <a href="#">Jaffatech.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!--Site Footer End--> */}
    </div>
  );
}

export default Footer;
