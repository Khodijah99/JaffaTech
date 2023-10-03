import React from "react";
const bgImage = "asset/contact4.png";
let title = "Contact us";
function Banner() {
  return (
    <div>
      {/* <!--Page Header Start--> */}
      <section className="page-header">
        <div
          className="page-header-bg"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
        <div className="container">
          <div className="page-header__inner">
            <h2> {title} </h2>
          </div>
        </div>
      </section>
      {/* <!--Page Header End--> */}
    </div>
  );
}
export default Banner;
