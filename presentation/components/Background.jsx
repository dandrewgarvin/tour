import React from "react";

const Background = ({ children, style }) => {
  return (
    <div style={{ height: "100vh", width: "100vw", ...style }}>{children}</div>
  );
};

export { Background };
