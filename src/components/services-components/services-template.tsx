import React from "react";
import { NavLink } from "react-router-dom";

const bgImage = " assets/images/backgrounds/flyer.jpg";
function ServiceTemplate() {
  return (
    <div className="col-xl-4 col-lg-5">
      {/* <!--Service Details Start--> */}

      <div className="service-details__left">
        <div className="service-details__service">
          <h3 className="service-details__title">Services</h3>
          <ul className="service-details__service-list list-unstyled">
            <li>
              <NavLink to="/softwaredev">
                Software Development
                <span className="fa fa-long-arrow-alt-right"></span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/outsource">
                Software Development Outsourcing{" "}
                <span className="fa fa-long-arrow-alt-right"></span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/disaster-recovery">
                IT Disaster Recovery Services{" "}
                <span className="fa fa-long-arrow-alt-right"></span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/consultancy">
                Consultancy
                <span className="fa fa-long-arrow-alt-right"></span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="service-details__need-help">
          <div
            className="service-details__need-help-bg"
            style={{ backgroundImage: `url(${bgImage})` }}
          ></div>
          <div className="service-details__need-help-icon">
            <img
              src="assets/images/icon/service-details-need-help-icon.png"
              alt=""
            />
          </div>
          <h2 className="service-details__need-help-title">
            Easy solutions <br /> to your tech <br />
            problem
          </h2>
          <div className="service-details__need-help-contact">
            <p>Have any question?</p>
            <a href="tel:980009850">
              {" "}
              <span>Free</span> +234 8087717597
            </a>
          </div>
        </div>
        <div className="service-details__download">
          <a
            href="about.html"
            className="thm-btn service-details__download-btn"
          >
            Download our flyer
          </a>
        </div>
      </div>

      {/* <SoftwareDev /> */}
    </div>
  );
}
export default ServiceTemplate;
