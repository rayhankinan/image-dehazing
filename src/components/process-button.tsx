import { useEffect, useRef } from "react";
import { Button } from "@nextui-org/react";

export default function ProcessButton({
  inputUrl,
}: {
  inputUrl: string | undefined;
}) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!buttonRef.current) return;

    buttonRef.current.setAttribute("py-click", "process_image");
  }, [buttonRef]);

  return (
    <Button ref={buttonRef} isDisabled={!inputUrl}>
      Process Image
    </Button>
  );
}
