import React from "react";

//components
import Logo from "../../utills/LogoIcon";

function Footer() {
  return (
    <footer className="bck_blue">
      <div className="footer_logo">
        <Logo link={true} linkTo="/" width="70px" height="70px" />
      </div>
      <div className="footer_discl">
        Manchester city 2018.All rights reseverd
      </div>
    </footer>
  );
}

export default Footer;
