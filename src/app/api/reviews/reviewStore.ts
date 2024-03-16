import { NewReview, Review } from '@/app/reviews/review';
import { db } from '../database';

// function loadReviews() {
//   let reviewsFile = require("../data/reviews.json");
//   reviewsFile.forEach((r: Review) => {
//     addReview(r);
//   });
// }

// async function saveReviews() {
//   // TODO: add better error handling
//   const _path = path.resolve("src/app/api/data/reviews.json");
//   const result = await fsPromise.writeFile(
//     _path,
//     JSON.stringify(reviews, null, 4)
//   );
//   return result;
// }

// loadReviews();
// loadReviews();

// export function getReviewById(reviewId: string) {
//   const result = reviews.find((r) => r.reviewId === reviewId);
//   if (!result) {
//     throw Error(`Review not found for id ${reviewId}`);
//     // return null;
//   } else {
//     return result;
//   }
// }
export async function getReviewById(reviewId: number) {
  const result = await db
    .selectFrom('review')
    .selectAll()
    .where('review.review_id', '==', reviewId)
    .executeTakeFirstOrThrow();
}

// export function getReviewsForMovieId(movieId: string) {
//   return reviews.filter((r) => r.movieId === movieId);
//   return result;
// const result = reviews.find((r) => r.reviewId === reviewId)
// if (!result) {
//     throw Error(`Review not found for id ${reviewId}`)
//     // return null;
// } else {
//     return result
// }
// }

// TODO: add this later?
// export function getReviewsForMovieId(movieId: string) {
//     return reviews.filter((r) => r.movieId === movieId);
// }

export async function getAllReviews() {
  const result = await db.selectFrom('review').selectAll().execute();

  console.log('result is', result);
  return result.map((r) => ({
    reviewId: r.review_id,
    reviewerId: r.reviewer_id,
    releaseDate: r.release_date,
    movieId: r.movie_id,
    starRating: r.star_rating,
    reviewText: r.review_text,
    shortDescription: r.short_description,
    imageUrl: r.image_url,
    title: r.title,
  }));
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

// const reviewIndex = reviews.findIndex((r) => r.reviewId === review.reviewId);
// if (reviewIndex >= 0) {
//   reviews[reviewIndex] = review;
// } else {
//   addReview(review);
// }
// saveReviews();
// console.log('review store is now:', reviews);
