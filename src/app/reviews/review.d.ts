export type Review = {
  reviewId: number;
} & NewReview;

export type NewReview = {
  shortDescription: string;
  title: string;
  movieId: number;
  reviewText: string;
  starRating: number;
  reviewerId: number;
  releaseDate: string;
  imageUrl?: string;
};

export type Reviewer = {
  id: number;
  name: string;
  username: string;
};
