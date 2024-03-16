'use server';

import { addReview } from '../api/reviews/reviewStore';
import { type NewReview } from './review';

export const handleCreateReview = async (data: NewReview) => {
  console.log(data);
  await addReview({ ...data, reviewerId: 1, movieId: 1 });
};
