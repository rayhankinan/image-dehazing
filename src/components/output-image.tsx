import { Button, Card, CardBody, Image } from "@nextui-org/react";

export default function OutputImage() {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <Image
        id="output"
        src="/images/300x300.png"
        fallbackSrc="/images/300x300.png"
        width={300}
        height={300}
        alt="Output Preview"
      />
      <Button id="download-output">Download Image</Button>
      <Card>
        <CardBody>
          <p>
            Peak signal-to-noise ratio (PSNR):{" "}
            <span id="peak-signal-to-noise-ratio">0 db</span>
          </p>
        </CardBody>
      </Card>
    </div>
  );
}
