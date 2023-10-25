import React, { useState } from "react";
function SearchPopup({ setSearchPopup, searchPopup }) {
  const offSearchPopupHandler = () => {
    setSearchPopup(false);
  };
  return (
    <div className={`search-popup ${searchPopup ? "active" : ""} `}>
      <div
        className="search-popup__overlay search-toggler"
        onClick={offSearchPopupHandler}
      ></div>
      {/* <!-- /.search-popup__overlay --> */}
      <div className="search-popup__content">
        <form action="#">
          <label className="sr-only">search here</label>
          <input type="text" id="search" placeholder="Search Here..." />
          <button type="submit" aria-label="search submit" className="thm-btn">
            <i className="icon-magnifying-glass"></i>
          </button>
        </form>
      </div>
      {/* <!-- /.search-popup__content --> */}
    </div>
  );
}

export default SearchPopup;
