import React from "react";
import { Image } from "@nextui-org/react";

export default function OutputImage() {
  return (
    <Image
      id="output"
      src="/images/300x300.png"
      fallbackSrc="/images/300x300.png"
      width={300}
      height={300}
      alt="Output Preview"
    />
  );
}
