import { useState } from "react";
import Head from "next/head";
import PyScript from "@/components/pyscript";
import UploadImage from "@/components/upload-image";
import ProcessButton from "@/components/process-button";
import DisplayImage from "@/components/display-image";

export default function Home() {
  const [url, setUrl] = useState<string>();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Tugas Makalah IF4073 Interpretasi dan Pengolahan Citra"
        />
        <link rel="icon" href="/favicon.ico" />
        <title>Image Dehazing</title>
      </Head>
      <main>
        <UploadImage url={url} setUrl={setUrl} />
        <ProcessButton url={url} />
        <DisplayImage />
        <PyScript />
      </main>
    </>
  );
}
