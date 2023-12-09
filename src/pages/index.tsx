import { useState } from "react";
import Head from "next/head";
import PyScript from "@/components/pyscript";
import UploadImage from "@/components/upload-image";
import Preview from "@/types/preview";

export default function Home() {
  const [file, setFile] = useState<Preview>();

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
        <UploadImage file={file} setFile={setFile} />
        {/* This button will be disabled no matter what until the JavaScript has been loaded */}
        <button py-click="hello_world" disabled={!file}>
          Translate
        </button>
        <div id="output"></div>
        <PyScript />
      </main>
    </>
  );
}
