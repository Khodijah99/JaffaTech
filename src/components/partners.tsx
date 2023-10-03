import React from "react";

const bgImage = "assets/images/backgrounds/tech-bg-1-1.jpg";
const partnersbgImage = "asset/images/backgrounds/partnersbg.jpeg";

function OurPartners() {
  return (
    <div>
      {/* <!--We Stand Start--> */}
      <section className="we-stand">
        <div className="container">
          <div className="we-stand__top">
            <div className="we-stand__top-title-box">
              <div className="we-stand__top-title-box-bg"></div>
              <h2
                style={{ backgroundImage: `url(${bgImage})` }}
                className="we-stand__top-title"
              >
                tecnology
              </h2>
            </div>
            <div className="we-stand-shape">
              <img src="assets/images/shapes/we-stand-shape.png" alt="" />
            </div>
          </div>
          <div className="we-stand__bottom">
            <div className="row">
              <div className="col-xl-4 col-lg-4">
                <div className="we-stand__left">
                  <div className="section-title text-left">
                    <div className="section-title__tagline-box">
                      <span className="section-title__tagline">
                        Technology growth
                      </span>
                      <div className="section-title-shape">
                        <img
                          src="assets/images/shapes/section-title-shape.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <h2 className="section-title__title">
                      We’re the stand out experts in tech business
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                <div className="we-stand__text-box">
                  <p className="we-stand__text-1">
                    We believe that success is achieved through a highly
                    collaborative interaction, so that we can work.
                  </p>
                  <p className="we-stand__text-2">
                    Together to identify and eval opportunities beyond your
                    current operations.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                <div className="we-stand__right">
                  <div className="we-stand__progress">
                    <div className="we-stand__progress-single">
                      <h4 className="we-stand__progress-title">Software</h4>
                      <div className="bar">
                        <div className="bar-inner count-bar" data-percent="90%">
                          <div className="count-text">90%</div>
                        </div>
                      </div>
                    </div>
                    <div className="we-stand__progress-single">
                      <h4 className="we-stand__progress-title">Development</h4>
                      <div className="bar">
                        <div className="bar-inner count-bar" data-percent="46%">
                          <div className="count-text">46%</div>
                        </div>
                      </div>
                    </div>
                    <div className="we-stand__progress-single">
                      <h4 className="we-stand__progress-title">Technology</h4>
                      <div className="bar marb-0">
                        <div className="bar-inner count-bar" data-percent="60%">
                          <div className="count-text">60%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--We Stand End--> */}

      {/* <!--Brand Two Start--> */}
      <section className="brand-one brand-two">
        <div className="container">
          <div className="brand-two__inner">
            <div
              className="thm-swiper__slider swiper-container"
              data-swiper-options='{"spaceBetween": 100, "slidesPerView": 5, "autoplay": { "delay": 5000 }, "breakpoints": {
                        "0": {
                            "spaceBetween": 30,
                            "slidesPerView": 2
                        },
                        "375": {
                            "spaceBetween": 30,
                            "slidesPerView": 2
                        },
                        "575": {
                            "spaceBetween": 30,
                            "slidesPerView": 3
                        },
                        "767": {
                            "spaceBetween": 50,
                            "slidesPerView": 4
                        },
                        "991": {
                            "spaceBetween": 50,
                            "slidesPerView": 5
                        },
                        "1199": {
                            "spaceBetween": 100,
                            "slidesPerView": 5
                        }
                    }}'
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img src="assets/images/brand/brand-1-1.png" alt="" />
                </div>
                {/* <!-- /.swiper-slide --> */}
                <div className="swiper-slide">
                  <img src="assets/images/brand/brand-1-2.png" alt="" />
                </div>
                {/* <!-- /.swiper-slide --> */}
                <div className="swiper-slide">
                  <img src="assets/images/brand/brand-1-3.png" alt="" />
                </div>
                {/* <!-- /.swiper-slide --> */}
                <div className="swiper-slide">
                  <img src="assets/images/brand/brand-1-4.png" alt="" />
                </div>
                {/* <!-- /.swiper-slide --> */}
                <div className="swiper-slide">
                  <img src="assets/images/brand/brand-1-5.png" alt="" />
                </div>
                {/* <!-- /.swiper-slide --> */}
                <div className="swiper-slide">
                  <img src="assets/images/brand/brand-1-1.png" alt="" />
                </div>
                {/* <!-- /.swiper-slide --> */}
                <div className="swiper-slide">
                  <img src="assets/images/brand/brand-1-2.png" alt="" />
                </div>
                {/* <!-- /.swiper-slide --> */}
                <div className="swiper-slide">
                  <img src="assets/images/brand/brand-1-3.png" alt="" />
                </div>
                {/* <!-- /.swiper-slide --> */}
                <div className="swiper-slide">
                  <img src="assets/images/brand/brand-1-4.png" alt="" />
                </div>
                {/* <!-- /.swiper-slide --> */}
                <div className="swiper-slide">
                  <img src="assets/images/brand/brand-1-5.png" alt="" />
                </div>
                {/* <!-- /.swiper-slide --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Brand Two End--> */}
      {/* <!--Brand One End--> */}
      <section className="business-from-two">
        <div className="business-from-two-img">
          <img src=" assets/images/resources/handshake.jpg" alt="" />
        </div>
        <div className="business-from-two-bg-box">
          <div
            className="business-from-two-bg"
            data-jarallax
            data-speed="0.2"
            data-imgPosition="50% 0%"
            style={{ backgroundImage: `url(${partnersbgImage})` }}
          ></div>
        </div>
        <div className="container">
          <div className="section-title text-left">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">
                Industries we’re serving
              </span>
              <div className="section-title-shape">
                <img
                  src="assets/images/shapes/section-title-shape.png"
                  alt=""
                />
              </div>
            </div>
            <h2 className="section-title__title">
              IT services customized for <br /> your industry
            </h2>
          </div>
          <div className="business-from-two__content-box">
            <ul className="list-unstyled business-from-two__list">
              <li
                className="business-from-two__single wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="business-from-two__content">
                  <div className="business-from-two__icon">
                    <span className="icon-mobile-banking"></span>
                  </div>
                  <h4 className="business-from-two__title">Banking</h4>
                </div>
              </li>
              <li
                className="business-from-two__single wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="business-from-two__content">
                  <div className="business-from-two__icon">
                    <span className="icon-mental-health"></span>
                  </div>
                  <h4 className="business-from-two__title">Healthcare</h4>
                </div>
              </li>
              <li
                className="business-from-two__single wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="business-from-two__content">
                  <div className="business-from-two__icon">
                    <span className="icon-education"></span>
                  </div>
                  <h4 className="business-from-two__title">Higher education</h4>
                </div>
              </li>
              <li
                className="business-from-two__single wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="business-from-two__content">
                  <div className="business-from-two__icon">
                    <span className="icon-manufacturing"></span>
                  </div>
                  <h4 className="business-from-two__title">Manufacturing</h4>
                </div>
              </li>
              <li
                className="business-from-two__single wow fadeInUp"
                data-wow-delay="500ms"
              >
                <div className="business-from-two__content">
                  <div className="business-from-two__icon">
                    <span className="icon-stock-market"></span>
                  </div>
                  <h4 className="business-from-two__title">Capital markets</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!--Brand One End--> */}
    </div>
  );
}

export default OurPartners;
