import React from "react";

function Slider() {
  return (
    <div>
      {/* <!--Main Slider Start--> */}
      <section className="main-slider main-slider-two">
        <div
          className="swiper-container thm-swiper__slider"
          data-swiper-options='{"slidesPerView": 1, "loop": true,
                "effect": "fade",
                "pagination": {
                "el": "#main-slider-pagination",
                "type": "bullets",
                "clickable": true
                },
                "navigation": {
                "nextEl": "#main-slider__swiper-button-next",
                "prevEl": "#main-slider__swiper-button-prev"
                },
                "autoplay": {
                "delay": 5000
                }}'
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="image-layer"></div>
              {/* <!-- /.image-layer --> */}
              <div className="main-slider-two__shape-1">
                <img
                  src="/assets/images/shapes/main-slider-two-shape-1.png"
                  alt=""
                />
              </div>
              <div className="main-slider-two__shape-2">
                <img
                  src="/assets/images/shapes/main-slider-two-shape-2.png"
                  alt=""
                />
              </div>
              <div className="main-slider-two__big-text-1">not</div>
              <div className="main-slider-two__big-text-2">ech</div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="main-slider__content">
                      <h2>
                        Innovative <br /> solutions for <br /> your businesses
                      </h2>
                      <div className="main-slider-two__btn-box">
                        <a
                          href="about.html"
                          className="thm-btn main-slider-two__btn"
                        >
                          Discover more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="image-layer"></div>
              {/* <!-- /.image-layer --> */}
              <div className="main-slider-two__shape-1">
                <img
                  src="/assets/images/shapes/main-slider-two-shape-1.png"
                  alt=""
                />
              </div>
              <div className="main-slider-two__shape-2">
                <img
                  src="/assets/images/shapes/main-slider-two-shape-2.png"
                  alt=""
                />
              </div>
              <div className="main-slider-two__big-text-1">not</div>
              <div className="main-slider-two__big-text-2">ech</div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="main-slider__content">
                      <h2>
                        Innovative <br /> solutions for <br /> your businesses
                      </h2>
                      <div className="main-slider-two__btn-box">
                        <a
                          href="about.html"
                          className="thm-btn main-slider-two__btn"
                        >
                          Discover more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="image-layer"></div>
              {/* <!-- /.image-layer --> */}
              <div className="main-slider-two__shape-1">
                <img
                  src="/assets/images/shapes/main-slider-two-shape-1.png"
                  alt=""
                />
              </div>
              <div className="main-slider-two__shape-2">
                <img
                  src="assets/images/shapes/main-slider-two-shape-2.png"
                  alt=""
                />
              </div>
              <div className="main-slider-two__big-text-1">not</div>
              <div className="main-slider-two__big-text-2">ech</div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="main-slider__content">
                      <h2>
                        Innovative <br /> solutions for <br /> your businesses
                      </h2>
                      <div className="main-slider-two__btn-box">
                        <a
                          href="about.html"
                          className="thm-btn main-slider-two__btn"
                        >
                          Discover more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- If we need navigation buttons --> */}
          <div className="swiper-pagination" id="main-slider-pagination"></div>
        </div>
      </section>
      {/* <!--Main Slider End--> */}
    </div>
  );
}
export default Slider;
