import Head from "next/head";
import { PyScript } from "@/components/pyscript";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Tugas Makalah IF4073 Interpretasi dan Pengolahan Citra"
        />
        <link rel="icon" href="/favicon.ico" />
        <title>🦜 Polyglot - Piratical PyScript</title>
      </Head>
      <main>
        <h1>Polyglot 🦜 💬 🇬🇧 ➡️ 🏴‍☠️</h1>
        <p>Translate English into Pirate speak...</p>
        <input
          type="text"
          name="english"
          id="english"
          placeholder="Type English here..."
        />
        {/* This button will be disabled until the JavaScript has been loaded */}
        <button py-click="translate_english">Translate</button>
        <div id="output"></div>
        <PyScript />
      </main>
    </>
  );
}
