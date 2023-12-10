import React from "react";

export default function PyScript() {
  return React.createElement("script", {
    type: "py",
    src: "/pyscript/main.py",
    config: "/pyscript/pyscript.json",
  });
}
