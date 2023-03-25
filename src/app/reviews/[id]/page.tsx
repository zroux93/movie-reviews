import { MovieReview } from "./MovieReview";
// import reviews from "../reviews";

import { getReviewById } from "../../api/reviews/reviewStore";
import { getReviewerById } from "@/app/api/reviewers/reviewersStore";

type ReviewPageProps = {
  params: { id: string };
};

function ReviewPage({ params: { id } }: ReviewPageProps) {
  // const review = reviews.find((r) => r.reviewId === Number(id));

  const review = getReviewById(id);

  if (!review) {
    return <div>Could not find this review, sorry! ID is {id}</div>;
  }

  const reviewerName = getReviewerById(review.reviewerId)?.name || "unknown";

  return (
    <MovieReview
      title={"Review"}
      reviewText={review.reviewText}
      releaseDate={review.releaseDate}
      shortDescription={review.shortDescription}
      imageUrl={""}
      numberOfStars={review.starRating}
      reviewerName={reviewerName}
      reviewId={id}
    />
  );
}

export default ReviewPage;
