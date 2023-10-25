import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function OurProject() {
  return (
    <div>
      {/* <!--CTA One Start--> */}
      <section className="cta-one">
        <div className="container">
          <div className="cta-one__inner">
            <div className="cta-one-bg"></div>
            <h2 className="cta-one__title">
              Always delivering quality solutions
            </h2>
            <p className="cta-one__text"></p>
            <a href="about.html" className="thm-btn cta-one__btn">
              Discover more
            </a>
          </div>
        </div>
      </section>
      {/* <!--CTA One End--> */}

      {/* <!--Project Two Start--> */}
      <section className="project-two">
        <div className="project-two__top">
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-6">
                <div className="project-two__top-left">
                  <div className="section-title text-left">
                    <div className="section-title__tagline-box">
                      <span className="section-title__tagline">
                        Recently completed work
                      </span>
                      <div className="section-title-shape">
                        <img
                          src="assets/images/shapes/section-title-shape.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <h2 className="section-title__title">
                      Our recently completed projects list
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="project-two__top-right">
                  <p className="project-two__top-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. quis nostrud exercitation ullamco laboris.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-two__bottom">
          <div className="project-two__container">
            <OwlCarousel
              items={4}
              className="owl-carousel owl-theme thm-owl__carousel project-two__carousel"
              loop={true}
              nav={false}
              margin={30}
              autoplay={true}
              dots={true}
              smartSpeed={500}
              autoplayTimeout={10000}
              navText={[
                '<span className="fa fa-angle-left"></span>',
                '<span className="fa fa-angle-right"></span>',
              ]}
              responsive={{
                "0": {
                  items: 1,
                },
                "768": {
                  items: 2,
                },
                "992": {
                  items: 3,
                },
                "1200": {
                  items: 4,
                },
              }}
            >
              <div className="project-two__single">
                <div className="project-two__img">
                  <img src="assets/images/project/project-2-1.jpg" alt="" />
                </div>
                <div className="project-two__content">
                  <p className="project-two__sub-title">Technology</p>
                  <h3 className="project-two__title">
                    <a href="project-details.html">Cyber security</a>
                  </h3>
                  <div className="project-two__arrow">
                    <a href="project-details.html">
                      <i className="fa fa-long-arrow-alt-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-two__single">
                <div className="project-two__img">
                  <img src="assets/images/project/project-2-2.jpg" alt="" />
                </div>
                <div className="project-two__content">
                  <p className="project-two__sub-title">Design</p>
                  <h3 className="project-two__title">
                    <a href="project-details.html">Deployment service</a>
                  </h3>
                  <div className="project-two__arrow">
                    <a href="project-details.html">
                      <i className="fa fa-long-arrow-alt-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-two__single">
                <div className="project-two__img">
                  <img src="assets/images/project/project-2-3.jpg" alt="" />
                </div>
                <div className="project-two__content">
                  <p className="project-two__sub-title">Ideas</p>
                  <h3 className="project-two__title">
                    <a href="project-details.html">Tech solutions</a>
                  </h3>
                  <div className="project-two__arrow">
                    <a href="project-details.html">
                      <i className="fa fa-long-arrow-alt-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-two__single">
                <div className="project-two__img">
                  <img src="assets/images/project/project-2-4.jpg" alt="" />
                </div>
                <div className="project-two__content">
                  <p className="project-two__sub-title">Solution</p>
                  <h3 className="project-two__title">
                    <a href="project-details.html">Platform integration</a>
                  </h3>
                  <div className="project-two__arrow">
                    <a href="project-details.html">
                      <i className="fa fa-long-arrow-alt-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-two__single">
                <div className="project-two__img">
                  <img src="assets/images/project/project-2-1.jpg" alt="" />
                </div>
                <div className="project-two__content">
                  <p className="project-two__sub-title">Technology</p>
                  <h3 className="project-two__title">
                    <a href="project-details.html">Cyber security</a>
                  </h3>
                  <div className="project-two__arrow">
                    <a href="project-details.html">
                      <i className="fa fa-long-arrow-alt-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-two__single">
                <div className="project-two__img">
                  <img src="assets/images/project/project-2-2.jpg" alt="" />
                </div>
                <div className="project-two__content">
                  <p className="project-two__sub-title">Design</p>
                  <h3 className="project-two__title">
                    <a href="project-details.html">Deployment service</a>
                  </h3>
                  <div className="project-two__arrow">
                    <a href="project-details.html">
                      <i className="fa fa-long-arrow-alt-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-two__single">
                <div className="project-two__img">
                  <img src="assets/images/project/project-2-3.jpg" alt="" />
                </div>
                <div className="project-two__content">
                  <p className="project-two__sub-title">Ideas</p>
                  <h3 className="project-two__title">
                    <a href="project-details.html">Tech solutions</a>
                  </h3>
                  <div className="project-two__arrow">
                    <a href="project-details.html">
                      <i className="fa fa-long-arrow-alt-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-two__single">
                <div className="project-two__img">
                  <img src="assets/images/project/project-2-4.jpg" alt="" />
                </div>
                <div className="project-two__content">
                  <p className="project-two__sub-title">Solution</p>
                  <h3 className="project-two__title">
                    <a href="project-details.html">Platform integration</a>
                  </h3>
                  <div className="project-two__arrow">
                    <a href="project-details.html">
                      <i className="fa fa-long-arrow-alt-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-two__single">
                <div className="project-two__img">
                  <img src="assets/images/project/project-2-1.jpg" alt="" />
                </div>
                <div className="project-two__content">
                  <p className="project-two__sub-title">Technology</p>
                  <h3 className="project-two__title">
                    <a href="project-details.html">Cyber security</a>
                  </h3>
                  <div className="project-two__arrow">
                    <a href="project-details.html">
                      <i className="fa fa-long-arrow-alt-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-two__single">
                <div className="project-two__img">
                  <img src="assets/images/project/project-2-2.jpg" alt="" />
                </div>
                <div className="project-two__content">
                  <p className="project-two__sub-title">Design</p>
                  <h3 className="project-two__title">
                    <a href="project-details.html">Deployment service</a>
                  </h3>
                  <div className="project-two__arrow">
                    <a href="project-details.html">
                      <i className="fa fa-long-arrow-alt-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-two__single">
                <div className="project-two__img">
                  <img src="assets/images/project/project-2-3.jpg" alt="" />
                </div>
                <div className="project-two__content">
                  <p className="project-two__sub-title">Ideas</p>
                  <h3 className="project-two__title">
                    <a href="project-details.html">Tech solutions</a>
                  </h3>
                  <div className="project-two__arrow">
                    <a href="project-details.html">
                      <i className="fa fa-long-arrow-alt-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-two__single">
                <div className="project-two__img">
                  <img src="assets/images/project/project-2-4.jpg" alt="" />
                </div>
                <div className="project-two__content">
                  <p className="project-two__sub-title">Solution</p>
                  <h3 className="project-two__title">
                    <a href="project-details.html">Platform integration</a>
                  </h3>
                  <div className="project-two__arrow">
                    <a href="project-details.html">
                      <i className="fa fa-long-arrow-alt-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      {/* <!--Project Two  End--> */}
    </div>
  );
}
export default OurProject;
