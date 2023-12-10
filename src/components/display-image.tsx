import React from "react";

function MutableImage() {
  return React.createElement("img", {
    id: "output",
    src: "/images/250x250.png",
    width: 250,
    height: 250,
    alt: "Preview",
  });
}

export default function DisplayImage() {
  return (
    <div
      style={{
        display: "flex",
        minWidth: 0,
        overflow: "hidden",
      }}
    >
      <MutableImage />
    </div>
  );
}
