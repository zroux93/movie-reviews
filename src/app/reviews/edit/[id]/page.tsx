import ReviewManager from "../ReviewManager";

type ReviewEditorPageProps = {
  params: { id: string };
};

export default function ReviewEditorPage({
  params: { id },
}: ReviewEditorPageProps) {
  return (
    <>
      <ReviewManager id={id} mode="edit" />
    </>
  );
}
