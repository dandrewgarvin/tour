import React from "react";

const Text = ({ children, style }) => {
  return <div style={{ display: "inline", ...style }}>{children}</div>;
};

export { Text };
