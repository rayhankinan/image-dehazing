import React from "react";
import { Image } from "@nextui-org/react";

export default function OutputImage() {
  return (
    <Image
      id="output"
      src="/images/250x250.png"
      fallbackSrc="/images/250x250.png"
      width={250}
      height={250}
      alt="Output Preview"
    />
  );
}
