import { useState } from "react";
import Head from "next/head";
import PyScript from "@/components/pyscript";
import Dropbox from "@/components/dropbox";
import InputImage from "@/components/input-image";
import ProcessButton from "@/components/process-button";
import OutputImage from "@/components/output-image";
import HazeImage from "@/components/haze-image";

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
        <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-8">
          <Dropbox inputUrl={inputUrl} setInputUrl={setInputUrl} />
          <InputImage inputUrl={inputUrl} />
          <ProcessButton />
          <div className="flex flex-row gap-8">
            <OutputImage />
            <HazeImage />
          </div>
          <PyScript />
        </div>
      </main>
    </>
  );
}
