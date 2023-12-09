import React from "react";

export default function PyScript() {
  return React.createElement("script", {
    type: "py",
    src: "/main.py",
    config: "/pyscript.json",
  });
}
