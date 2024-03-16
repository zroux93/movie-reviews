import { Suspense } from 'react';

import { getReviewerById } from '@/app/api/reviewers/reviewersStore';

import { MovieReview } from './MovieReview';
import { Review } from '../review';
import { getReviewById } from '@/app/api/reviews/reviewStore';

type ReviewPageProps = {
  params: { id: number };
};

async function ReviewPage({ params }: ReviewPageProps) {
  console.log('params:', params);
  const { id } = params;
  const review: Review | null = await getReviewById(Number(id));

  if (!review) {
    return <div>Could not find this review, sorry! ID is {id}</div>;
  }

  const reviewerName =
    (await getReviewerById(review.reviewerId))?.name || 'unknown';

  return (
    <Suspense fallback={<div>Loading!</div>}>
      <MovieReview
        title={'Review'}
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
