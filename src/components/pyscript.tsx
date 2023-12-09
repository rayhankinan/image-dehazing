import React from "react";

export function PyScript() {
  return React.createElement("script", {
    type: "py",
    src: "/main.py",
    config: "/pyscript.json",
  });
}
