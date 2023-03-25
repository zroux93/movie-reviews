import { getAllReviews } from "../api/reviews/reviewStore";

import Link from "next/link";
import { MovieReviewCard } from "./MovieReviewCard";

export default function Reviews() {
  const reviews = getAllReviews();

  return (
    <main className="container">
      <h1>Movie Reviews</h1>
      <div>
        <Link href={"/reviews/new"}>Create a new review!</Link>
      </div>
      <div className="row row-cols-md-4">
        {reviews.map((review) => (
          <div className="col">
            <Link key={review.reviewId} href={`/reviews/${review.reviewId}`}>
              <MovieReviewCard
                title={review.title}
                description={review.shortDescription}
                releaseDate={review.releaseDate}
                imageUrl={review.imageUrl}
                numberOfStars={review.starRating}
              />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
