import React from "react";
import { NavLink } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Autoplay,
  EffectCreative,
  EffectFade,
  Pagination,
  A11y,
} from "swiper/modules";
// // import Swiper styles
import "swiper/css";
import "swiper/swiper-bundle.css";

function Slider() {
  const bgImg1 = "assets/images/backgrounds/office.jpg";
  const bgImg2 = "asset/image1.jpeg";
  const bgImg3 = "assets/images/backgrounds/main-slider-2.jpeg";
  return (
    <div className="main-slider main-slider-two">
      {/* <!--Main Slider Start--> */}
      <Swiper
        className="swiper-container thm-swiper__slider"
        // install Swiper modules
        modules={[Autoplay, EffectCreative, EffectFade, Pagination, A11y]}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -500],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "bullets",
          clickable: true,
          // el: "#main-slider-pagination",
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <div
              className="image-layer"
              style={{ backgroundImage: `url(${bgImg1})` }}
            >
              {" "}
            </div>
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
                      Welcome to <br />
                      <span className="highlight"> Jaffa Technologies</span>
                    </h2>
                    <div className="main-slider-two__btn-box">
                      <NavLink
                        className="thm-btn main-slider-two__btn"
                        to="/contact"
                      >
                        Discover more
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <div
              className="image-layer"
              style={{ backgroundImage: `url(${bgImg2})` }}
            ></div>
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
                      A Step <br /> Away from <br /> your{" "}
                      <span className="highlight">IT Solution. </span>
                    </h2>
                    <div className="main-slider-two__btn-box">
                      <NavLink
                        className="thm-btn main-slider-two__btn"
                        to="/contact"
                      >
                        Discover more
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <div
              className="image-layer"
              style={{ backgroundImage: `url(${bgImg3})` }}
            ></div>
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
                      {" "}
                      <span className="highlight">
                        {" "}
                        Innovative <br /> solutions{" "}
                      </span>
                      for <br /> your businesses
                    </h2>
                    <div className="main-slider-two__btn-box">
                      <NavLink
                        className="thm-btn main-slider-two__btn"
                        to="/contact"
                      >
                        Discover more
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* <!-- If we need navigation buttons --> */}
          <div className="swiper-pagination" id="main-slider-pagination"></div>
        </div>
      </Swiper>
      {/* <!--Main Slider End--> */}
    </div>
  );
}
export default Slider;
