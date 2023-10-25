import React from "react";
import { NavLink } from "react-router-dom";
import ReactWOW from "react-wow";
import "animate.css";
const bgImage = "assets/images/backgrounds/office.jpg";
function AboutUs() {
  return (
    <div>
      {/* <!--We Help Start--> */}
      <section className="we-help">
        <div className="container">
          <div className="we-help__inner">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="we-help__left">
                  <div className="section-title text-left">
                    <div className="section-title__tagline-box">
                      <span className="section-title__tagline">Who we are</span>
                      <div className="section-title-shape">
                        <img
                          src="assets/images/shapes/section-title-shape.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <h4 className="section-title__title">
                      EXCEEDING CLIENT'S EXPECTATIONS
                    </h4>
                  </div>
                  <p className="we-help__text-1">
                    Established in 2008, Jaffa Technologies is a reputable IT
                    solutions firm dedicated to providing full cycle software
                    development and outsourcing, integrated systems engineering
                    and IT Disaster recovery services. Our services span across
                    business applications, system integration, payment systems,
                    process automation, process optimization, and surveillance
                    systems. Our clients span a number of industries, including
                    government, education, financial institutions,
                    telecommunication providers, Small and Medium Businesses
                    (SMBs) and enterprise
                  </p>
                  <p className="we-help__text-2">
                    Since clients are different, we believe in a personal
                    approach to every client and project. Our process typically
                    starts with understanding our client's requirements and
                    risks, we then assemble a cross-functional team to help
                    define the path to the solution. We define the deliverables
                    and a timeline and establish effective communication between
                    the development team and client.
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="we-help__right">
                  <ReactWOW
                    animation="slideInRight"
                    data-wow-delay="100ms"
                    data-wow-duration="2500ms"
                  >
                    <div
                      className="we-help__img wow animated"
                      data-wow-delay="100ms"
                      data-wow-duration="2500ms"
                    >
                      <img
                        src="assets/images/resources/jaffatech_bg.png"
                        alt=""
                      />
                    </div>
                  </ReactWOW>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--We Help End--> */}
      {/* <!--Business From Start--> */}
      <section className="business-from">
        <div className="business-from-bg-box">
          <div
            className="business-from-bg jarallax"
            data-jarallax
            data-speed="0.2"
            data-imgPosition="50% 0%"
            style={{ backgroundImage: `url(${bgImage})` }}
          ></div>
        </div>
        <div className="container">
          <div className="business-from__inner text-center">
            <p className="business-from__sub-title">Solving Problems Is Our</p>
            <h2 className="business-from__title">PASSION</h2>
            <div className="business-from__btn-box">
              <NavLink to="/contact" className="business-from__btn thm-btn">
                Contact us now{" "}
              </NavLink>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Business From End-->

        <!--Notech More Start--> */}
      <section className="notech-more">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="notech-more__left">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <span className="section-title__tagline">How we work</span>
                    <div className="section-title-shape">
                      <img
                        src="assets/images/shapes/section-title-shape.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <h2 className="section-title__title">
                    Agile Development Approach
                  </h2>
                </div>
                <p className="notech-more__text">
                  Our development process focusses on providing a tight feedback
                  loop with our clients. By employing daily collaboration and
                  delivering software on a regular basis (sprints), we maximize
                  both productivity and visibility.
                </p>
                <p>
                  More importantly, any deviations or misinterpretations of
                  client's requirements are flagged early and corrected thereby
                  reducing risk and ensuring timely software delivery. We
                  utilize collaboration tools to track work progress, ensure
                  effective communication and project management.
                </p>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="notech-more__right">
                <ReactWOW
                  animation="slideInRight"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <div className="notech-more__img wow slideInRight">
                    <img src="assets/images/resources/agile.webp" alt="" />
                  </div>
                </ReactWOW>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Notech More End--> */}

      {/* <!--Notech More Start--> */}
      <section className="notech-more">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="welcome-three__left">
                <div className="welcome-three__img-box">
                  <div className="welcome-three__img">
                    <img
                      src="assets/images/resources/quality_assurance.png"
                      alt=""
                    />
                  </div>
                  <div className="welcome-three__shape-1">
                    <div className="welcome-three__shape-2"></div>
                  </div>
                  <div className="welcome-three__shape-3">
                    <img
                      src="assets/images/shapes/welcome-three-shape-3.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="welcome-three__right">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <span className="section-title__tagline">How we work</span>
                    <div className="section-title-shape">
                      <img
                        src="assets/images/shapes/section-title-shape.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <h2 className="section-title__title">Quality Assurance</h2>
                </div>

                <p className="welcome-three__text-2">
                  Quality is the mainstay of our business and the source of
                  confidence our clients have in the solutions we provide. The
                  development of our solutions are test-driven and undergo well
                  formulated QA procedures that help us deliver the great
                  experiences our clients’ expect.
                </p>
                <div className="welcome-three__icon-box">
                  <div className="welcome-three__icon">
                    <span className="notech-two-icon-freelance"></span>
                  </div>
                  <div className="welcome-three__icon-content">
                    <p className="welcome-three__icon-text">
                      Stop worrying, we take care of your <br />
                      technology problems.
                    </p>
                  </div>
                </div>
                <div className="welcome-three__btn-box">
                  <NavLink to="/contact" className="business-from__btn thm-btn">
                    Discover more
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Notech More End--> */}

      {/* <!--Notech More Start--> */}
      <section className="notech-more">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="notech-more__left">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <span className="section-title__tagline">How we work</span>
                    <div className="section-title-shape">
                      <img
                        src="assets/images/shapes/section-title-shape.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <h2 className="section-title__title">
                    Intellectual Property Protection
                  </h2>
                </div>
                <p className="notech-more__text">
                  Our clients’ ideas are their own and we take careful steps to
                  ensure that the trust they put in us, when they choose us to
                  bring those ideas to life, is secured. Through non-disclosure
                  agreements, legal agreements and strict professional ethics,
                  we take your Intellectual Property seriously and also ensure
                  that the best security standards are adhered to in the
                  solutions we provide.
                </p>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="notech-more__right">
                <ReactWOW
                  animation="slideInRight"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <div className="notech-more__img ">
                    <img src="assets/images/resources/IP_Lock.jpg" alt="" />
                  </div>
                </ReactWOW>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Notech More End--> */}

      {/* <!--Notech More Start--> */}
      <section className="notech-more">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="welcome-three__left">
                <div className="welcome-three__img-box">
                  <div className="welcome-three__img">
                    <img
                      src="assets/images/resources/website-maintenance.png"
                      alt=""
                    />
                  </div>
                  <div className="welcome-three__shape-1">
                    <div className="welcome-three__shape-2"></div>
                  </div>
                  <div className="welcome-three__shape-3">
                    <img
                      src="assets/images/shapes/welcome-three-shape-3.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="welcome-three__right">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <span className="section-title__tagline">How we work</span>
                    <div className="section-title-shape">
                      <img
                        src="assets/images/shapes/section-title-shape.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <h2 className="section-title__title">
                    Support and Maintenance
                  </h2>
                </div>

                <p className="welcome-three__text-2">
                  In our ever changing world, a solution provided to tackle a
                  particular problem might have need to evolve to also tackle a
                  new one; We provide our clients with the support they need,
                  not only in servicing the solutions we provide, but also in
                  adapting those solutions to meet new business requirements.
                </p>
                <p>
                  We empower our clients by bringing the technical expertise and
                  problem solving capability required to keep the products and
                  services we provide running optimally, thus, enabling them to
                  focus more on their core business.
                </p>
                <div className="welcome-three__icon-box">
                  <div className="welcome-three__icon">
                    <span className="notech-two-icon-freelance"></span>
                  </div>
                  <div className="welcome-three__icon-content">
                    <p className="welcome-three__icon-text">
                      Stop worrying, we take care of your <br />
                      technology problems.
                    </p>
                  </div>
                </div>
                <div className="welcome-three__btn-box">
                  <NavLink to="/contact" className="business-from__btn thm-btn">
                    Discover more
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Notech More End--> */}
    </div>
  );
}
export default AboutUs;
