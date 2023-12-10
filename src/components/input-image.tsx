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
      fallbackSrc="/images/300x300.png"
      width={300}
      height={300}
      alt="Input Preview"
    />
  );
}
