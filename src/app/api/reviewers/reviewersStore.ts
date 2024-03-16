// import fsPromise from "fs/promises";
// import path from "path";
import { Reviewer } from '@/app/reviews/review';
import { db } from '../database';

export async function getReviewerById(id: number) {
  const result = await db
    .selectFrom('reviewer')
    .selectAll()
    .where('id', '=', id)
    .executeTakeFirst();

  if (!result) {
    return {
      name: 'Not Found',
      username: 'not_found',
      id: 0,
    };
  }

  const reviewer: Reviewer = {
    name: result.name,
    username: result.username,
    id: result.id,
  };

  return reviewer;
}

export async function addReviewer(name: string, username: string) {
  const result = await db
    .insertInto('reviewer')
    .values({ name: name, username: username })
    .execute();

  return result;
}
