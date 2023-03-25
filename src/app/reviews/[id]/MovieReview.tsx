import Link from "next/link";

type MovieReviewProps = {
  title: string;
  shortDescription: string;
  reviewText: string;
  imageUrl?: string;
  numberOfStars: number;
  releaseDate: string;
  reviewerName: string;
  reviewId: string;
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
      <Link href={`/reviews/edit/${reviewId}`}>Edit this review</Link>
    </div>
  );
}

export { MovieReview };
