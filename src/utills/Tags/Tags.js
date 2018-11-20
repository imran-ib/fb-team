import React from "react";
import { Link } from "react-router-dom";
function Tags({
  link,
  children,
  LinkTo,
  background,
  size,
  color,
  font,
  padding,
  display
}) {
  const template = (
    <div
      style={{
        background: background,
        color: color,
        fontSize: size,
        fontFamily: font,
        padding: padding,
        display: "inline-block"
      }}
    >
      {children}
    </div>
  );

  if (link) {
    return <Link to={`${LinkTo}`}>{template}</Link>;
  } else {
    return template;
  }
}

export default Tags;
