import React from "react";
function CompanyIntro() {
  return (
    <div>
      {/* <!--Trusted Company Start--> */}
      <section className="trusted-company">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="trusted-company__left">
                <div
                  className="trusted-company__img wow slideInLeft"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <img
                    src="assets/images/resources/trusted-company-img-1.jpeg"
                    alt=""
                  />
                  <div className="trusted-company__solution">
                    <p className="trusted-company__solution-content">
                      JaffaTech is providing the best solution by our experts
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="trusted-company__right">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <span className="section-title__tagline">
                      Company introduction
                    </span>
                    <div className="section-title-shape">
                      <img
                        src="assets/images/shapes/section-title-shape.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <h2 className="section-title__title">
                    JaffaTech is your trusted IT services company
                  </h2>
                </div>
                <p className="trusted-company__text-1">
                  A step away from your IT solutions....
                </p>
                <p className="trusted-company__text-2">
                  We help you transform your innovation performance for
                  long-term success by combining our Programming knowledge with
                  our expertise in product and technology development processes.
                  Our team is able to give Technical Support, Project Validation
                  and Alternative Solutions.
                </p>

                <div className="trusted-company__person">
                  <div className="trusted-company__person-img">
                    <img
                      src="assets/images/resources/trusted-company-person-img.jpg"
                      alt=""
                    />
                  </div>
                  <div className="trusted-company__person-content">
                    <h2 className="trusted-company__person-name">
                      Kevin Martin
                    </h2>
                    <p className="trusted-company__person-text">
                      Founder of JaffaTech company
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Trusted Company End--> */}
    </div>
  );
}

export default CompanyIntro;
