import React from "react";

export default function PyScript() {
  return React.createElement("script", {
    type: "py",
    src: "/python/main.py",
    config: "/python/pyscript.json",
  });
}
