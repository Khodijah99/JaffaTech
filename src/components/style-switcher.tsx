import React from "react";
function StyleSwitcher() {
  return (
    <div>
      {/* <!-- style switcher --> */}

      <div className="style-switcher">
        <a href="#" id="switcher-toggler">
          <i className="fa fa-cog"></i>
        </a>
        <h3>Layout Options</h3>
        <div className="layout-feature" id="colorMode">
          <a href="" className="dark-switcher" data-theme="notech-dark">
            Dark
          </a>
          <a href="" className="light-switcher" data-theme="notech-light">
            Light
          </a>
          <button className="boxed-switcher">Boxed</button>
          {/* <!-- /.ltr-switcher --> */}
        </div>
        {/* <!-- /.language-feature --> */}
      </div>
      {/* <!-- end style switcher --> */}
    </div>
  );
}
export default StyleSwitcher;
