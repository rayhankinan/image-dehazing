export default function ProcessButton({ url }: { url: string | undefined }) {
  // This button will be disabled no matter what until the PyScript has been loaded

  return (
    <button py-click="process_image" disabled={!url}>
      Process Image
    </button>
  );
}
