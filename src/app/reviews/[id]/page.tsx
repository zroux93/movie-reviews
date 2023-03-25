import { MovieReview } from "./MovieReview";
import reviews from "../reviews";

function ReviewPage({ params: { id } }) {
  const review = reviews.find((r) => r.reviewId === Number(id));
  if (!review) {
    return <div>Could not find this review, sorry! ID is {id}</div>;
  }

  return (
    <MovieReview
      title={review.title}
      reviewText={review.reviewText}
      releaseDate={review.releaseDate}
      shortDescription={review.shortDescription}
      imageUrl={review.imageUrl}
      numberOfStars={review.numberOfStars}
    />
  );
}

export default ReviewPage;
