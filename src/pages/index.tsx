import { useState } from "react";
import Head from "next/head";
import PyScript from "@/components/pyscript";
import Dropbox from "@/components/dropbox";
import InputImage from "@/components/input-image";
import ProcessButton from "@/components/process-button";
import OutputImage from "@/components/output-image";

export default function Home() {
  const [inputUrl, setInputUrl] = useState<string>();

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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "25px",
          }}
        >
          <Dropbox inputUrl={inputUrl} setInputUrl={setInputUrl} />
          <InputImage inputUrl={inputUrl} />
          <ProcessButton inputUrl={inputUrl} />
          <OutputImage />
          <PyScript />
        </div>
      </main>
    </>
  );
}
