export type Review = {
  reviewId: number;
} & NewReview;

export type NewReview = {
  shortDescription: string;
  title: string;
  movieId: number;
  reviewText: string;
  starRating: number;
  reviewerId: string;
  releaseDate: string;
  imageUrl?: string;
};

export type Reviewer = {
  id: string;
  name: string;
  username: string;
};
