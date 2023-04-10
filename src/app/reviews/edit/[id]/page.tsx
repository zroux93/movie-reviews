import { getReviewById } from "@/app/api/reviews/reviewApi";

import ReviewEditManager from "./ReviewEditManager";

type ReviewEditorPageProps = {
  params: { id: string };
};

export default async function ReviewEditorPage({
  params: { id },
}: ReviewEditorPageProps) {
  const reviewInitialData = await getReviewById(id);

  return <ReviewEditManager review={reviewInitialData} />;
}
