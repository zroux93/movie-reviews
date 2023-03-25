function MovieReview({
  title,
  shortDescription,
  reviewText,
  imageUrl,
  numberOfStars,
  releaseDate,
}) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{shortDescription}</p>
      <p>{reviewText}</p>
      <p>This film has {numberOfStars} stars!</p>
    </div>
  );
}

export { MovieReview };
