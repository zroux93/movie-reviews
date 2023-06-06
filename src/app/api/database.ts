import { createKysely } from '@vercel/postgres-kysely';
import { NewReview } from './reviews/reviewStore';
import { Reviewer } from './reviewers/reviewersStore';
import { Generated } from 'kysely';

type ReviewSchema = {
  short_description: string | undefined;
  title: string;
  review_id: Generated<number>;
  reviewer_id: number;
  movie_id: number;
  star_rating: number;
  release_date: string;
  image_url: string | undefined;
  review_text: string;
};

interface Database {
  review: ReviewSchema;
  reviewer: Reviewer;
}

const db = createKysely<Database>();

export { db };
