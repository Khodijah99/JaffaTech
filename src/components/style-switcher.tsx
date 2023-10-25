import React, { useState } from "react";

function StyleSwitcher({ setDarkMode }) {
  const [onSwitcher, setOnSwitcher] = useState(false);
  const onDarkModeHandler = () => {
    setDarkMode(true);
  };
  const offDarkModeHandler = () => {
    setDarkMode(false);
  };
  const switcherToggler = () => {
    setOnSwitcher((prev) => !prev);
  };
  return (
    <div>
      {/* <!-- style switcher --> */}

      <div className={`style-switcher ${onSwitcher ? "active" : ""}`}>
        <span id="switcher-toggler" onClick={switcherToggler}>
          <i className="fa fa-cog"></i>
        </span>

        <h3>Layout Options</h3>
        <div className="layout-feature" id="colorMode">
          <span
            className="dark-switcher span"
            data-theme="notech-dark"
            onClick={onDarkModeHandler}
          >
            Dark
          </span>
          <span
            className="light-switcher"
            data-theme="notech-light"
            onClick={offDarkModeHandler}
          >
            Light
          </span>

          {/* <!-- /.ltr-switcher --> */}
        </div>
        {/* <!-- /.language-feature --> */}
      </div>
      {/* <!-- end style switcher --> */}
    </div>
  );
}

export default StyleSwitcher;
