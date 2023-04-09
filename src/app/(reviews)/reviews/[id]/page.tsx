import { Suspense } from "react";

import { Review } from "../../../api/reviews/reviewStore";
import { getReviewerById } from "../../../api/reviewers/reviewersStore";
import { getReviewById } from "../../../api/reviews/reviewApi";

import { MovieReview } from "./MovieReview";

type ReviewPageProps = {
  params: { id: string };
};

async function ReviewPage({ params: { id } }: ReviewPageProps) {
  const review: Review | null = await getReviewById(id);

  if (!review) {
    return <div>Could not find this review, sorry! ID is {id}</div>;
  }

  const reviewerName = getReviewerById(review.reviewerId)?.name || "unknown";

  return (
    <Suspense fallback={<div>Loading!</div>}>
      <MovieReview
        title={"Review"}
        reviewText={review.reviewText}
        releaseDate={review.releaseDate}
        shortDescription={review.shortDescription}
        imageUrl={review.imageUrl}
        numberOfStars={review.starRating}
        reviewerName={reviewerName}
        reviewId={id}
      />
    </Suspense>
  );
}

export default ReviewPage;
