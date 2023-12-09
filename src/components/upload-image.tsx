import React, { useCallback } from "react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";

export default function UploadImage({
  url,
  setUrl,
}: {
  url: string | undefined;
  setUrl: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      // If no file is dropped, do nothing
      if (acceptedFiles.length === 0) return;

      // If there is a previous file, revoke the object URL
      if (url) URL.revokeObjectURL(url);

      // Set the new object URL
      setUrl(URL.createObjectURL(acceptedFiles[0]));
    },
    [url, setUrl]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      "image/*": [],
    },
  });

  return (
    <section>
      <div
        {...getRootProps()}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
          borderWidth: "2px",
          borderRadius: "2px",
          borderColor: "#eeeeee",
          borderStyle: "dashed",
          backgroundColor: "#fafafa",
          color: "#bdbdbd",
          outline: "none",
          transition: "border .24s ease-in-out",
        }}
      >
        <input
          {...getInputProps()}
          style={{
            display: "none",
          }}
        />
        {isDragActive ? (
          <p>Drop the image here!</p>
        ) : (
          <p>Drag and drop an image here, or click to select an image!</p>
        )}
      </div>
      <aside
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          marginTop: 16,
        }}
      >
        <div
          style={{
            display: "flex",
            minWidth: 0,
            overflow: "hidden",
          }}
        >
          {url ? (
            <Image
              id="input"
              src={url}
              width={250}
              height={250}
              alt="Preview"
            />
          ) : (
            <p>Preview</p>
          )}
        </div>
      </aside>
    </section>
  );
}
