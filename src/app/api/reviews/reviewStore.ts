import { NewReview, Review } from '@/app/reviews/review';
import { ReviewSchema, db } from '../database';

type DbReview = Omit<ReviewSchema, 'reviewer_id' | 'review_id'> & {
  reviewer_id: number;
  review_id: number;
};

function mapReviewFromDbToApp(dbReview: DbReview) {
  return {
    reviewId: dbReview.review_id,
    reviewerId: dbReview.reviewer_id,
    releaseDate: dbReview.release_date,
    movieId: dbReview.movie_id,
    starRating: dbReview.star_rating,
    reviewText: dbReview.review_text,
    shortDescription: dbReview.short_description,
    imageUrl: dbReview.image_url,
    title: dbReview.title,
  };
}

export async function getReviewById(reviewId: number) {
  console.log({ reviewId });
  const result = await db
    .selectFrom('review')
    .selectAll()
    .where('review_id', '=', reviewId)
    .executeTakeFirstOrThrow();

  return mapReviewFromDbToApp(result);
}

export async function getAllReviews() {
  const result = await db.selectFrom('review').selectAll().execute();

  console.log('result is', result);
  return result.map(mapReviewFromDbToApp);
}

export async function addReview(review: NewReview) {
  console.log('review to add is', review);
  const result = await db
    .insertInto('review')
    .values({
      reviewer_id: review.reviewerId,
      release_date: review.releaseDate,
      movie_id: review.movieId,
      star_rating: review.starRating,
      review_text: review.reviewText,
      short_description: review.shortDescription,
      image_url: review.imageUrl || '',
      title: review.title,
    })
    .execute();
  return result;
}

export async function updateReviewById(review: Review) {
  const result = await db
    .updateTable('review')
    .set({
      reviewer_id: review.reviewerId,
      release_date: review.releaseDate,
      movie_id: review.movieId,
      star_rating: review.starRating,
      review_text: review.reviewText,
      short_description: review.shortDescription,
      image_url: review.imageUrl,
      title: review.title,
    })
    .where('review.review_id', '==', review.reviewId)
    .executeTakeFirstOrThrow();

  return result;
}
