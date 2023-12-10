import React, { useCallback } from "react";
import { Card, CardBody } from "@nextui-org/react";
import Dropzone from "react-dropzone";

export default function Dropbox({
  inputUrl,
  setInputUrl,
}: {
  inputUrl: string | undefined;
  setInputUrl: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      // If no file is dropped, do nothing
      if (acceptedFiles.length === 0) return;

      // If there is a previous file, revoke the object URL
      if (inputUrl) URL.revokeObjectURL(inputUrl);

      // Set the new object URL
      setInputUrl(URL.createObjectURL(acceptedFiles[0]));
    },
    [inputUrl, setInputUrl]
  );

  return (
    <Dropzone onDrop={onDrop}>
      {({ getRootProps, getInputProps, isDragActive }) => (
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <Card className="cursor-pointer">
            <CardBody>
              {isDragActive ? (
                <p>Drop the image here!</p>
              ) : (
                <p>Drag and drop an image here, or click to select an image</p>
              )}
            </CardBody>
          </Card>
        </div>
      )}
    </Dropzone>
  );
}
