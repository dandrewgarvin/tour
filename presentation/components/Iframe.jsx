import React from "react";

const Iframe = ({ url }) => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <iframe style={{ height: "100%", width: "100%" }} src={url} />
    </div>
  );
};

export { Iframe };
