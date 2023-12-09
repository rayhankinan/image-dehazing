import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import Preview from "@/types/preview";

export default function UploadImage({
  file,
  setFile,
}: {
  file: Preview | undefined;
  setFile: React.Dispatch<React.SetStateAction<Preview | undefined>>;
}) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length === 0) return;

      setFile(
        Object.assign(acceptedFiles[0], {
          preview: URL.createObjectURL(acceptedFiles[0]),
        })
      );
    },
    [setFile]
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
          {file ? (
            <Image
              src={file.preview}
              width={250}
              height={250}
              alt="Preview"
              // Revoke data uri after image is loaded
              onLoad={() => {
                URL.revokeObjectURL(file.preview);
              }}
            />
          ) : (
            <p>Preview</p>
          )}
        </div>
      </aside>
    </section>
  );
}
