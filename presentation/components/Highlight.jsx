import React from "react";

const Wrapper = ({ strike, children }) => {
  if (strike) {
    return (
      <div style={{ position: "relative", display: "inline" }}>
        <div
          id="strike"
          style={{
            position: "absolute",
            height: "3px",
            width: "90%",
            backgroundColor: "red",
            transform: "rotate(-36deg)",
            top: "20px",
            left: "-5px",
          }}
        />
        {children}
      </div>
    );
  }

  return children;
};

const Highlight = ({ children, style, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <div style={{ ...style }}>{children}</div>
    </Wrapper>
  );
};

export { Highlight };
