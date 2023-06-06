// server component

import { getAllReviews } from '@/app/api/reviews/reviewStore';

import Link from 'next/link';
import { MovieReviewCard } from './MovieReviewCard';

export default async function Reviews() {
  const reviews = await getAllReviews();

  return (
    <>
      <h1>Movie Reviews</h1>
      <div className="row row-cols-md-4">
        {reviews.length ? (
          reviews.map((review) => (
            <div key={review.review_id} className="col">
              <Link href={`/reviews/${review.reviewId}`}>
                <MovieReviewCard
                  title={review.title}
                  description={review.shortDescription}
                  releaseDate={review.releaseDate}
                  imageUrl={review.imageUrl}
                  numberOfStars={review.starRating}
                />
              </Link>
            </div>
          ))
        ) : (
          <p>No reviews created yet!</p>
        )}
      </div>
      <div>
        <Link href={'/reviews/new'}>Create a new review!</Link>
      </div>
    </>
  );
}
