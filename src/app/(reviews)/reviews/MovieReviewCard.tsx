import Image from "next/image";

type MovieReviewCardProps = {
  title: string;
  description: string;
  imageUrl?: string;
  numberOfStars: number;
  releaseDate: string;
};

function MovieReviewCard({
  title,
  description,
  imageUrl,
  numberOfStars,
  releaseDate,
}: MovieReviewCardProps) {
  return (
    <div className="card shadow-sm">
      {imageUrl && (
        <div
          className="bd-placeholder-img card-img-top"
          //   style={{ width: "100%", height: "100%", position: "relative" }}
        >
          <Image
            src={imageUrl}
            width={1200}
            height={400}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
            alt="poster artwork"
          />
        </div>
      )}
      <div className="card-body">
        <h2>{title}</h2>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

export { MovieReviewCard };
