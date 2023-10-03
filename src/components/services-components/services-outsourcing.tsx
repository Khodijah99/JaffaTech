import React from "react";
import { NavLink } from "react-router-dom";
import ServiceTemplate from "./services-template";

function SoftwareOutsourcing() {
  return (
    <section className="service-details">
      <div className="container">
        <div className="row">
          <ServiceTemplate />
          <div className="col-xl-8 col-lg-7">
            <div className="service-details__right">
              <div className="service-details__img">
                <img src="asset/outsourcing.png" alt="" />
              </div>
              <div className="service-details__content">
                <h3 className="service-details__content-title">
                  SOFTWARE DEVELOPMENT <br /> OUTSOURCING
                </h3>
                <p className="service-details__text-1">
                  Our software development outsourcing services allows us to
                  integrate our teams into our client's environment. Given that
                  every client is unique, we have no boiler-plate template that
                  we apply across all clients rather we seek to understand the
                  perculiarity of each client's need and develop a working
                  relationship accordingly.
                </p>
                <p className="service-details__text-2">
                  Our Outsourcing Services supports the following models:
                </p>
              </div>
            </div>
          </div>

          {/* <!--Feature Two Start--> */}
          <section className="feature-two">
            <div className="container">
              <div className="row">
                {/* <!--Feature Two Single Start--> */}
                <div className="col-xl-4 col-lg-4">
                  <div className="feature-two__single">
                    <div className="feature-two__single-inner">
                      <div className="feature-two__img">
                        <img src="assets/images/resources/Cycle.jpg" alt="" />
                        <div className="feature-two__letter">
                          <h5>f</h5>
                        </div>
                      </div>
                      <div className="feature-two__content">
                        <h4 className="feature-two__title">
                          <NavLink to="/about">
                            Full Cycle Product <br />
                            Development
                          </NavLink>
                        </h4>
                        <p className="feature-two__text">
                          The client provides us with requirements for a product
                          and we allocate skilled personnel from our pools of
                          resources to develop the product under the direction
                          of the client designated Product Owner.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--Feature Two Single End-->
					<!--Feature Two Single Start--> */}
                <div className="col-xl-4 col-lg-4">
                  <div className="feature-two__single">
                    <div className="feature-two__single-inner">
                      <div className="feature-two__img">
                        <img src="assets/images/resources/team.jpeg" alt="" />
                        <div className="feature-two__letter">
                          <h5>t</h5>
                        </div>
                      </div>
                      <div className="feature-two__content">
                        <h4 className="feature-two__title">
                          <NavLink to="/about">Team Augumentation</NavLink>
                        </h4>
                        <p className="feature-two__text">
                          We provide remote resource(s) to compliment the
                          client's team with the needed technology skills.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--Feature Two Single End-->
					<!--Feature Two Single Start--> */}
                <div className="col-xl-4 col-lg-4">
                  <div className="feature-two__single">
                    <div className="feature-two__single-inner">
                      <div className="feature-two__img">
                        <img
                          src="assets/images/resources/hosted-employees.jpg"
                          alt=""
                        />
                        <div className="feature-two__letter">
                          <h5>h</h5>
                        </div>
                      </div>
                      <div className="feature-two__content">
                        <h4 className="feature-two__title">
                          <NavLink to="/about">
                            Hosted Employee <br />
                            Services
                          </NavLink>
                        </h4>
                        <p className="feature-two__text">
                          We provided dedicated resources and assign a Project
                          Manager to work on client's projects. The client sets
                          the work schedule of these reources.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--Feature Two Single End--> */}
              </div>
            </div>
          </section>
          {/* <!--Feature Two End--> */}
        </div>
      </div>
    </section>
  );
}

export default SoftwareOutsourcing;
