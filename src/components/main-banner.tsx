import React from "react";
//import { useState } from "react";

function Banner(props: any) {
  // const [title, setTitle] = useState("pageTitle");
  // setTitle("");
  return (
    <div>
      {/* <!--Page Header Start--> */}
      <section className="page-header">
        <div
          className="page-header-bg"
          style={{ backgroundImage: `url(${props.bgImage})` }}
        ></div>
        <div className="container">
          <div className="page-header__inner">
            <h2> {props.title}</h2>
          </div>
        </div>
      </section>
      {/* <!--Page Header End--> */}
    </div>
  );
}
export default Banner;
