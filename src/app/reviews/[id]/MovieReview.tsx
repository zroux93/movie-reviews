import Link from 'next/link';

type MovieReviewProps = {
  title: string;
  shortDescription: string;
  reviewText: string;
  imageUrl?: string;
  numberOfStars: number;
  releaseDate: string;
  reviewerName: string;
  reviewId: number;
};

function MovieReview({
  title,
  shortDescription,
  reviewText,
  imageUrl,
  numberOfStars,
  releaseDate,
  reviewerName,
  reviewId,
}: MovieReviewProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{shortDescription}</p>
      <p>{reviewText}</p>
      <p>This film has {numberOfStars} stars!</p>
      <p>Reviewed by {reviewerName}</p>
      <div className="d-flex justify-content-between">
        <Link className="btn btn-primary" href={`/reviews/edit/${reviewId}`}>
          Edit this review
        </Link>
        <Link className="btn btn-outline-primary" href={`/reviews`}>
          Back to all reviews
        </Link>
      </div>
    </div>
  );
}

export { MovieReview };
