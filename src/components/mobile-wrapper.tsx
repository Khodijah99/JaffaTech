import React from "react";
function Mobilewrap() {
  return (
    <div>
      {/* <!-- /.mobile-nav__wrapper Start --> */}
      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler"></div>
        {/* <!-- /.mobile-nav__overlay --> */}
        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler">
            <i className="fa fa-times"></i>
          </span>

          <div className="logo-box">
            <a href="index.html" aria-label="logo image">
              <img
                src="assets/images/resources/footer-logo.png"
                width="155"
                alt=""
              />
            </a>
          </div>
          {/* <!-- /.logo-box --> */}
          <div className="mobile-nav__container"></div>
          {/* <!-- /.mobile-nav__container --> */}

          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <a href="mailto:needhelp@packageName__.com">
                needhelp@notech.com
              </a>
            </li>
            <li>
              <i className="fa fa-phone-alt"></i>
              <a href="tel:666-888-0000">666 888 0000</a>
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

export default Mobilewrap;
