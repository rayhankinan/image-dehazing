import { Image } from "@nextui-org/react";

export default function InputImage({
  inputUrl,
}: {
  inputUrl: string | undefined;
}) {
  return (
    <Image
      id="input"
      src={inputUrl}
      fallbackSrc="/images/250x250.png"
      width={250}
      height={250}
      alt="Input Preview"
    />
  );
}
