import fsPromise from "fs/promises";
import path from "path";

export type Review = {
  shortDescription: string;
  title: string;
  movieId: string;
  reviewId: string;
  reviewText: string;
  starRating: number;
  reviewerId: string;
  releaseDate: string;
  imageUrl?: string;
};

const reviews: Review[] = [];

function loadReviews() {
  let reviewsFile = require("../data/reviews.json");
  reviewsFile.forEach((r: Review) => {
    addReview(r);
  });
}

async function saveReviews() {
  const _path = path.resolve("src/app/api/data/reviews.json");
  const result = await fsPromise.writeFile(
    _path,
    JSON.stringify(reviews, null, 4)
  );

  console.log("file writing result is", result);
  return result;
}

loadReviews();

export function getReviewById(reviewId: string) {
  const result = reviews.find((r) => r.reviewId === reviewId);
  if (!result) {
    throw Error(`Review not found for id ${reviewId}`);
    // return null;
  } else {
    return result;
  }
}

export function getReviewsForMovieId(movieId: string) {
  return reviews.filter((r) => r.movieId === movieId);
}

export function getAllReviews() {
  return reviews;
}

export function addReview(review: Review) {
  reviews.push(review);
}

export function updateReviewById(review: Review) {
  const reviewIndex = reviews.findIndex((r) => r.reviewId === review.reviewId);
  if (reviewIndex >= 0) {
    reviews[reviewIndex] = review;
  } else {
    addReview(review);
  }
  saveReviews();
  console.log("review store is now:", reviews);
}
