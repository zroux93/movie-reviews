import styles from "../page.module.css";

import reviews from "./reviews";
import { MovieReviewCard } from "./MovieReviewCard";
import Link from "next/link";

export default function Reviews() {
  return (
    <main className={styles.main}>
      <h2>This is a movie review page</h2>
      <div className={styles.grid}>
        {reviews.map((review) => (
          <Link className={styles.card} href={`/reviews/${review.reviewId}`}>
            <MovieReviewCard
              title={review.title}
              description={review.shortDescription}
              releaseDate={review.releaseDate}
              imageUrl={review.imageUrl}
              numberOfStars={review.numberOfStars}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
