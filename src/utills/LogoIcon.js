import React from "react";
import { Link } from "react-router-dom";

//Logo
import MainLogo from "../Resources/images/logos/logo.png";

function LogoIcon({ link, linkTo, width, height }) {
  const template = (
    <div
      className="img_cover"
      style={{
        width: width,
        height: height,
        background: `url(${MainLogo}) no-repeat`
      }}
    />
  );

  if (link) {
    // logo with link
    return <Link to={linkTo}> {template}</Link>;
  } else {
    // logo without lick

    return template;
  }
}

export default LogoIcon;
