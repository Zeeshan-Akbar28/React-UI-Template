import React from "react";

function Button({ position, icon }) {
  const iconButton = position ? (
    <a className="btn">
      {icon}
      <button className="btn--sides">Button Text</button>
    </a>
  ) : (
    <a className="btn">
      <button className="btn--sides">Button Text</button>
      {icon}
    </a>
  );

  return <>{iconButton}</>;
}

export default Button;
