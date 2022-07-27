import React from "react";

const Video = ({ src }) => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <video style={{ maxHeight: "100%", width: "100%" }} autoPlay>
        <source src={src} />
      </video>
    </div>
  );
};

export { Video };
