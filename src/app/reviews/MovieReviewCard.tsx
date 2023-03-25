function MovieReviewCard({
  title,
  description,
  imageUrl,
  numberOfStars,
  releaseDate,
}) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export { MovieReviewCard };
