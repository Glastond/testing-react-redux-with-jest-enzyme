import React from "react";
import "./styles.scss";

const Header = () => {
  return (
    <header data-test="headerComponent">
      <div className="wrap">
        <div className="logo">
          <h3 data-test="LogoImg">Logo</h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
