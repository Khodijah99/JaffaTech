import React from "react";
import ServiceTemplate from "./services-template";

function Consultancy() {
  return (
    <section className="service-details">
      <div className="container">
        <div className="row">
          <ServiceTemplate />
          <div className="col-xl-8 col-lg-7">
            <div className="service-details__right">
              <div className="service-details__img">
                <img
                  src="assets/images/resources/tech-consultant.avif"
                  alt=""
                />
              </div>
              <div className="service-details__content">
                <h3 className="service-details__content-title">CONSULTANCY</h3>
                <p className="service-details__text-1">
                  We have a dedicated team of professionals with significant
                  experience in business and technical operations to help cater
                  for your IT needs in the areas of:
                </p>
                <p className="service-details__text-2">
                  The services we offer include:
                </p>
              </div>

              <div className="service-details__benefits-right">
                <ul className="list-unstyled service-details__points">
                  <li>
                    <div className="service-details__points-icon">
                      <span className="icon-customer-service"></span>
                    </div>
                    <h4 className="service-details__points-title">
                      IT Infrastructure Planning.
                    </h4>
                    <p className="service-details__points-text"></p>
                  </li>
                  <li>
                    <div className="service-details__points-icon">
                      <span className="icon-market-analysis"></span>
                    </div>
                    <h4 className="service-details__points-title">
                      IT Strategy Planning.
                    </h4>
                    <p className="service-details__points-text"></p>
                  </li>
                  <li>
                    <div className="service-details__points-icon">
                      <span className="icon-technical-support"></span>
                    </div>
                    <h4 className="service-details__points-title">
                      Business Process Review, <br /> Automation or
                      Optimization.
                    </h4>
                    <p className="service-details__points-text"></p>
                  </li>
                </ul>

                <ul className="list-unstyled service-details__points">
                  <li>
                    <div className="service-details__points-icon">
                      <span className="icon-customer-service"></span>
                    </div>
                    <h4 className="service-details__points-title">
                      Data Management and Analysis.
                    </h4>
                    <p className="service-details__points-text"></p>
                  </li>
                  <li>
                    <div className="service-details__points-icon">
                      <span className="icon-market-analysis"></span>
                    </div>
                    <h4 className="service-details__points-title">
                      Project Management.
                    </h4>
                    <p className="service-details__points-text"></p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Consultancy;
