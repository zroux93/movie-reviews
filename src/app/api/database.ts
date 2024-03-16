import { createKysely } from '@vercel/postgres-kysely';
import { Generated } from 'kysely';
import { Reviewer } from '../reviews/review';

export type ReviewSchema = {
  short_description: string;
  title: string;
  review_id: Generated<number>;
  reviewer_id: number;
  movie_id: number;
  star_rating: number;
  release_date: string;
  image_url: string;
  review_text: string;
};

export type ReviewerSchema = {
  username: string;
  name: string;
  id: Generated<number>;
};

interface Database {
  review: ReviewSchema;
  reviewer: ReviewerSchema;
}

const db = createKysely<Database>();

export { db };
