import { useEffect, useRef } from "react";
import { Button } from "@nextui-org/react";

export default function DownloadButton() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!buttonRef.current) return;

    buttonRef.current.setAttribute("py-click", "download_image");
  }, [buttonRef]);

  return (
    <Button id="process" ref={buttonRef}>
      Download Image
    </Button>
  );
}
