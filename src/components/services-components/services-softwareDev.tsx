import React from "react";
import ServiceTemplate from "./services-template";

function SoftwareDev() {
  return (
    <section className="service-details">
      <div className="container">
        <div className="row">
          <ServiceTemplate />
          <div className="col-xl-8 col-lg-7">
            <div className="service-details__right">
              <div className="service-details__img">
                <img src="assets/images/resources/softwaredev-img.png" alt="" />
              </div>
              <div className="service-details__content">
                <h3 className="service-details__content-title">
                  SOFTWARE DEVELOPMENT
                </h3>
                <p className="service-details__text-1">
                  Our software development services encompasses the full product
                  development life cycle from defining initial requirements
                  through to longevity support thereby enabling a maximum return
                  on investment. We begin with a thorough understanding and
                  analysis of our client's requirement then we deliver work in
                  short sprints to allow for ongoing feedback and eliminate any
                  unwelcome surprises.
                </p>
                <p className="service-details__text-2">
                  The services we offer include:
                </p>
              </div>

              <div className="service-details__benefits-right">
                <div className="trusted-company__points-box">
                  <ul className="list-unstyled trusted-company__points">
                    <li>
                      <div className="icon">
                        <span className="icon-check"></span>
                      </div>
                      <div className="text">
                        <p>Web Application Development.</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-check"></span>
                      </div>
                      <div className="text">
                        <p>Desktop Application Development.</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-check"></span>
                      </div>
                      <div className="text">
                        <p>Back Office Automation.</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-check"></span>
                      </div>
                      <div className="text">
                        <p>Cloud Application Development.</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-check"></span>
                      </div>
                      <div className="text">
                        <p>Software as a Service Development.</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-check"></span>
                      </div>
                      <div className="text">
                        <p>IoT Solutions and Wearables.</p>
                      </div>
                    </li>
                  </ul>
                  <ul className="list-unstyled trusted-company__points trusted-company__points-two">
                    <li>
                      <div className="icon">
                        <span className="icon-check"></span>
                      </div>
                      <div className="text">
                        <p>Social Media Integration.</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-check"></span>
                      </div>
                      <div className="text">
                        <p>System Integration.</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-check"></span>
                      </div>
                      <div className="text">
                        <p>Database Management.</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-check"></span>
                      </div>
                      <div className="text">
                        <p>Business Analytics.</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-check"></span>
                      </div>
                      <div className="text">
                        <p>
                          {" "}
                          Mobile/Tablet Application Development <br /> (Hybrid
                          and Native).
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SoftwareDev;
