import React from "react";

const ColorDisplay = ({ colorValue }) => {
  return (
    <section className="colorbox" style={{ backgroundColor: colorValue }}>
      <p>{colorValue ? colorValue : "Empty Value"}</p>
    </section>
  );
};

ColorDisplay.defaultProps = {
  colorValue: "Empty Color Value",
};

export default ColorDisplay;
