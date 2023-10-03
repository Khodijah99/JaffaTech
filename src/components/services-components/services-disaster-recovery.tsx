import React from "react";
import ServiceTemplate from "./services-template";

function DisasterRecovery() {
  return (
    <section className="service-details">
      <div className="container">
        <div className="row">
          <ServiceTemplate />
          <div className="col-xl-8 col-lg-7">
            <div className="service-details__right">
              <div className="service-details__img">
                <img
                  src="assets/images/resources/disaster-recovery.jpg"
                  alt=""
                />
              </div>
              <div className="service-details__content">
                <h3 className="service-details__content-title">
                  IT DISASTER RECOVERY SERVICES
                </h3>
                <p className="service-details__text-1">
                  Our ITDR Services focuses on helping clients achieve their IT
                  Business Continuity Plan targets while maximizing TCO. We work
                  with different sized organizations with varying focus in terms
                  of RTO and RPO.Regardless of what the primary focus is (i.e
                  recoverability or resiliency), we have a solution for you.
                </p>
                <p className="service-details__text-2">
                  JaffaTech has expertise in the following areas:
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
                        <p>ITDR Planning</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-check"></span>
                      </div>
                      <div className="text">
                        <p>Server Virtualization.</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-check"></span>
                      </div>
                      <div className="text">
                        <p>Server Consolidation.</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-check"></span>
                      </div>
                      <div className="text">
                        <p>Disater Recovery.</p>
                      </div>
                    </li>
                  </ul>
                  <ul className="list-unstyled trusted-company__points trusted-company__points-two">
                    <li>
                      <div className="icon">
                        <span className="icon-check"></span>
                      </div>
                      <div className="text">
                        <p>DR Simulation Testing.</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-check"></span>
                      </div>
                      <div className="text">
                        <p>Storage Consolidation.</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-check"></span>
                      </div>
                      <div className="text">
                        <p>Replication.</p>
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

export default DisasterRecovery;
