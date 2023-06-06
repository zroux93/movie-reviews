// import { Review } from './reviewStore';

// import { db } from '../database';

// export async function getReviewById(id: number) {
//   const result = await db
//     .selectFrom('review')
//     .selectAll()
//     .where('review.review_id', '==', id)
//     .executeTakeFirstOrThrow();

//   return result;
// }

// export async function updateReview(review: Review) {
//   const result = await db
//     .updateTable('review')
//     .set({
//       reviewer_id: review.reviewerId,
//       release_date: review.releaseDate,
//       movie_id: review.movieId,
//       star_rating: review.starRating,
//       review_text: review.reviewText,
//       short_description: review.shortDescription,
//       image_url: review.imageUrl,
//       title: review.title,
//     })
//     .where('review.review_id', '==', review.reviewId)
//     .executeTakeFirstOrThrow();

//   return result;
// }

// export async function addReview(review: Review) {
//   const result = await db
//     .insertInto('review')
//     .values({
//       reviewer_id: review.reviewerId,
//       release_date: review.releaseDate,
//       movie_id: review.movieId,
//       star_rating: review.starRating,
//       review_text: review.reviewText,
//       short_description: review.shortDescription,
//       image_url: review.imageUrl,
//       title: review.title,
//     })
//     .execute();
//   return result;
// }

// export async function getAllReviews() {
//   const result = await db.selectFrom('review').selectAll().execute();
//   return result;
// }
