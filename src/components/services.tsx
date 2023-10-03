import React from "react";
function Services() {
  return (
    <div>
      {/* <!--Services Two Start--> */}
      <section className="services-two">
        <div className="service-two__shape-1"></div>
        {/* <!-- /.service-two__shape-1 --> */}
        <div className="service-two__shape-2"></div>
        {/* <!-- /.service-two__shape-2 --> */}
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">
                What we’re offering
              </span>
              <div className="section-title-shape">
                <img
                  src="assets/images/shapes/section-title-shape.png"
                  alt=""
                />
              </div>
            </div>
            <h2 className="section-title__title">
              Services we’re providing <br /> to our customers
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="100ms"
            >
              {/* <!--Services Two Single--> */}
              <div className="services-two__single">
                <div className="services-two__icon">
                  <span className="icon-coding"></span>
                </div>
                <h3 className="services-two__title">
                  <a href="product-development.html">Products Development</a>
                </h3>
                <p className="services-two__text">
                  Our software development services encompasses ...
                </p>
                <div className="services-two__btn-box">
                  <a
                    href="product-development.html"
                    className="thm-btn services-two__btn"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="200ms"
            >
              {/* <!--Services Two Single--> */}
              <div className="services-two__single">
                <div className="services-two__icon">
                  <span className="icon-design-thinking"></span>
                </div>
                <h3 className="services-two__title">
                  <a href="ui-ux-designing.html">
                    Software Development
                    <br /> Outsourcing
                  </a>
                </h3>
                <p className="services-two__text">
                  Our software development outsourcing services allows...
                </p>
                <div className="services-two__btn-box">
                  <a
                    href="ui-ux-designing.html"
                    className="thm-btn services-two__btn"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="300ms"
            >
              {/* <!--Services Two Single--> */}
              <div className="services-two__single">
                <div className="services-two__icon">
                  <span className="icon-technology"></span>
                </div>
                <h3 className="services-two__title">
                  <a href="digital-marketing.html">
                    IT Disaster Recovery
                    <br /> Services
                  </a>
                </h3>
                <p className="services-two__text">
                  Our ITDR Services focuses on helping clients achieve ...
                </p>
                <div className="services-two__btn-box">
                  <a
                    href="digital-marketing.html"
                    className="thm-btn services-two__btn"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="400ms"
            >
              {/* <!--Services Two Single--> */}
              <div className="services-two__single">
                <div className="services-two__icon">
                  <span className="icon-content"></span>
                </div>
                <h3 className="services-two__title">
                  <a href="content-management.html">Consultancy</a>
                </h3>
                <p className="services-two__text">
                  We have a dedicated team of professionals with significant
                  experience in business and...
                </p>
                <div className="services-two__btn-box">
                  <a
                    href="content-management.html"
                    className="thm-btn services-two__btn"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Services Two End--> */}

      {/* <!--Why Choose One Start--> */}
      <section className="why-choose-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="why-choose-one__left">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <span className="section-title__tagline">
                      JaffaTech company benefits
                    </span>
                    <div className="section-title-shape">
                      <img
                        src="assets/images/shapes/section-title-shape.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <h2 className="section-title__title">
                    Why you should choose JaffaTech?
                  </h2>
                </div>
                <div className="why-choose-one__tab">
                  <div className="why-choose-one__tab-box tabs-box">
                    <ul className="tab-buttons clearfix list-unstyled">
                      <li data-tab="#mission" className="tab-btn active-btn">
                        <span>Our mission</span>
                      </li>
                      <li data-tab="#vision" className="tab-btn">
                        <span>Our vision</span>
                      </li>
                      <li data-tab="#history" className="tab-btn">
                        <span>Our history</span>
                      </li>
                    </ul>
                    <div className="tabs-content">
                      {/* <!--tab--> */}
                      <div className="tab active-tab" id="mission">
                        <div className="why-choose-one__tab-content">
                          <p className="why-choose-one__tab-text">
                            Our mission is to provide innovative and fit for
                            purpose solutions by leveraging our dedicated
                            experts, proven processes and technological prowess.
                            We design and deliver quality solutions that
                            streamline business outcomes and empower our clients
                            to achieve success and profitability.
                          </p>
                        </div>
                      </div>
                      {/* <!--tab--> */}
                      <div className="tab" id="vision">
                        <div className="why-choose-one__tab-content">
                          <p className="why-choose-one__tab-text">
                            To be a leading golbal provider of IT Services.
                          </p>
                        </div>
                      </div>
                      {/* <!--tab--> */}
                      <div className="tab " id="history">
                        <div className="why-choose-one__tab-content">
                          <p className="why-choose-one__tab-text">
                            Established in 2008, Jaffa Technologies is a
                            reputable IT solutions firm dedicated to providing
                            full cycle software development and outsourcing,
                            integrated systems engineering and IT Disaster
                            recovery services. Our services span across business
                            applications, system integration, payment systems,
                            process automation, process optimization, and
                            surveillance systems. Our clients span a number of
                            industries, including government, education,
                            financial institutions, telecommunication providers,
                            Small and Medium Businesses (SMBs) and enterprise
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="why-choose-one__right">
                <p className="trusted-company__text-1">Our values include:</p>
                <div className="why-choose-one__points-box">
                  <div className="why-choose-one__points-img">
                    <img
                      src="assets/images/resources/why-choose-one-points-img.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="why-choose-one__points-content">
                    <ul className="list-unstyled why-choose-one__points">
                      <li>
                        <div className="icon">
                          <span className="icon-tick"></span>
                        </div>
                        <div className="text">
                          <p>Professionalism.</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-tick"></span>
                        </div>
                        <div className="text">
                          <p>Team work.</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-tick"></span>
                        </div>
                        <div className="text">
                          <p>Effective Communication.</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-tick"></span>
                        </div>
                        <div className="text">
                          <p>Innovation</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-tick"></span>
                        </div>
                        <div className="text">
                          <p>Continous Learning.</p>
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
      {/* <!--Why Choose One End--> */}
    </div>
  );
}
export default Services;
