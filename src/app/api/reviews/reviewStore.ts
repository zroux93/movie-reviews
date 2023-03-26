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

class ReviewStore {
  reviews: Review[] = [
    {
      title: "Interstellar",
      shortDescription:
        "Great sci-fi film driven by an emotional family story.",
      reviewText: "Saw it in IMAX the first time!",
      starRating: 5,
      releaseDate: "2014",
      reviewId: "0",
      reviewerId: "zroux93",
      movieId: "1",
      imageUrl:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71LNVGVpWYL.jpg",
    },
    {
      title: "Star Wars: A New Hope",
      shortDescription: "Use the Force, Luke!",
      reviewText:
        "The original Star Wars is a fun space opera film, and required viewing for any sci-fi fan.",
      starRating: 4,
      releaseDate: "1978",
      reviewId: "1",
      reviewerId: "zroux93",
      movieId: "1",
      imageUrl:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81P3lDJbjCL.jpg",
    },
    {
      title: "Inception",
      shortDescription: "Brilliantly dreamy sci-fi film",
      reviewText: "Christopher Nolan made a masterpiece with this one.",
      starRating: 5,
      releaseDate: "1978",
      reviewId: "2",
      reviewerId: "zroux93",
      movieId: "1",
      imageUrl:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51Qx9c4ppzL._AC_UF894,1000_QL80_.jpg",
    },
    {
      title: "Encanto",
      shortDescription: "Musical about a magical house in Colombia",
      reviewText: "We really enjoyed Encanto!",
      starRating: 5,
      releaseDate: "2021",
      reviewId: "3",
      reviewerId: "kristinna112",
      movieId: "1",
      imageUrl:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81DXM+rfH1L._AC_SL1500_.jpg",
    },
  ];
}

const _reviewStore = new ReviewStore();

export function getReviewById(reviewId: string) {
  const result = _reviewStore.reviews.find((r) => r.reviewId === reviewId);
  if (!result) {
    throw Error(`Review not found for id ${reviewId}`);
  } else {
    return result;
  }
}

export function getReviewsForMovieId(movieId: string) {
  return _reviewStore.reviews.filter((r) => r.movieId === movieId);
}

export function getAllReviews() {
  return _reviewStore.reviews;
}

export function addReview(
  title: string,
  releaseDate: string,
  movieId: string,
  reviewId: string,
  reviewText: string,
  starRating: number,
  reviewerId: string,
  shortDescription: string,
  imageUrl?: string
) {
  const newReview: Review = {
    movieId,
    reviewId,
    reviewText,
    starRating,
    reviewerId,
    shortDescription,
    releaseDate,
    title,
    imageUrl,
  };
  _reviewStore.reviews.push(newReview);
}

export function updateReviewById(review: Review) {
  const reviewIndex = _reviewStore.reviews.findIndex(
    (r) => r.reviewId === review.reviewId
  );
  _reviewStore.reviews[reviewIndex] = review;
  console.log("review store is now:", _reviewStore.reviews);
}

export async function GET(request: Request) {
  return new Response("Hello...");
}
