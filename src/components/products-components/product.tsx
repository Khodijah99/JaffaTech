import React from "react";

import ReactWOW from "react-wow";
import "animate.css";
import MajorFeatures from "./product-features";

function Products() {
  return (
    <div>
      {/* <!--Project Details Start--> */}
      <div className="project-details">
        <div className="container">
          <div className="project-details__top">
            <div className="row">
              <div className="col-xl-12">
                <div className="project-details__img-box">
                  <img
                    src="assets/images/resources/smartbill_bg.png"
                    alt="smartbill"
                  />
                  <div className="project-details__details-box">
                    <ul className="list-unstyled project-details__details">
                      <li>
                        <div className="project-details__details-content">
                          <span className="project-details__details-title">
                            Product Name:
                          </span>
                          <p className="project-details__details-name">
                            Smart Bills Platform
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="project-details__details-content">
                          <span className="project-details__details-title">
                            Category:
                          </span>
                          <p className="project-details__details-name">
                            Business Intelligence ,Technology
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="project-details__details-content">
                          <span className="project-details__details-title">
                            Services:
                          </span>
                          <p className="project-details__details-name">
                            Inventory Management Tool,
                            <br /> Buisness Efficiency Solution.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="project-details__details-content">
                          <span className="project-details__details-title">
                            Web:
                          </span>
                          <p className="project-details__details-name">
                            <a href="#">smartbills platform</a>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="project-details__content-one">
                  <div className="section-title text-left">
                    <div className="section-title__tagline-box">
                      <span className="section-title__tagline">
                        Smart Bills
                      </span>
                      <div className="section-title-shape">
                        <img
                          src="assets/images/shapes/section-title-shape.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <h3 className="project-details__content-one-title">
                      Products Introduction
                    </h3>
                  </div>

                  <p className="project-details__content-one-text">
                    The SmartBills Billing Platform (SBP) was developed by Jaffa
                    Technologies Limited (JaffaTech) as an enterprise level
                    cloud-based (always online) billing platform aimed at
                    meeting all the billing and payment needs of Service based
                    Organizations. The SBP is an intelligent cloud-based
                    all-in-one billing platform architected around a
                    configurable micro-services paradigm and utilizing
                    cutting-edge technologies to deliver a 360-degree billing
                    experience. The platform on the one hand provides billers
                    with deep insights and business intelligence reporting while
                    having the flexibility to integrate with smart nodes (i.e.
                    smart meters, internet of things, mobile data collecting
                    devices, or any devices that can collect and send data over
                    IP network). On the other hand, it allows customers have
                    access to their bills, view their billing history and make
                    payments.
                  </p>
                </div>
                <div className="project-details__content-two">
                  <div className="section-title text-left">
                    <div className="section-title__tagline-box">
                      <span className="section-title__tagline">
                        Why Smart Bills
                      </span>
                      <div className="section-title-shape">
                        <img
                          src="assets/images/shapes/section-title-shape.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <h3 className="project-details__content-one-title">
                      Benefit of using the Product
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <section className="get-to-know">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6">
                    <ReactWOW
                      animation="slideInLeft"
                      data-wow-delay="100ms"
                      data-wow-duration="2500ms"
                    >
                      <div className="get-to-know__img-box">
                        <div className="get-to-know__img">
                          <img
                            src="assets/images/resources/smart_edited.png"
                            alt=""
                          />
                        </div>
                        <div className="get-to-know__small-img">
                          <img
                            src="assets/images/resources/edited_chart.png"
                            alt=""
                          />
                        </div>

                        <div className="get-to-know-shape-1">
                          <img
                            src="assets/images/shapes/get-to-know-shape-1.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </ReactWOW>
                  </div>
                  <div className="col-xl-6">
                    <div className="get-to-know__right">
                      <div className="project-details__content-three">
                        <p className="project-details__content-two-text">
                          With SmartBills, Organizations can leverage the latest
                          in cutting edge technology to not only hit critical
                          revenue targets but also improve them. SmartBills
                          helps Organizations achieve this through its expansive
                          Business Model which meets clients and customers where
                          they are (in their homes, at the bank or on their
                          favorite social media).
                        </p>
                        <p className="project-details__content-three-text">
                          With such an expansive Business Model, a wealth of
                          data is generated by the second which would easily
                          overwhelm even the most capable statisticians –
                          however, SmartBills with it’s capable AI engines and
                          analytics provides real-time insights on large data
                          pools, giving Managers and Executives the intelligence
                          they need, at any given time, to make the right
                          decisions.
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* <!--Get To Know End--> */}
            <div className="row">
              <div className="col-xl-12 pt-5">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <span className="section-title__tagline">Features</span>
                    <div className="section-title-shape">
                      <img
                        src="assets/images/shapes/section-title-shape.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <h3 className="project-details__content-one-title">
                    Some major features of the Product
                  </h3>
                </div>
                <ReactWOW
                  animation="bounceInRight"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <div className="service-details__faq">
                    <div
                      className="accrodion-grp faq-one-accrodion"
                      data-grp-name="faq-one-accrodion-1"
                    >
                      <MajorFeatures />
                    </div>
                  </div>
                </ReactWOW>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--Project Details End--> */}
    </div>
  );
}

export default Products;
