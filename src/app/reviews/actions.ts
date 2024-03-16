'use server';

import { addReview, updateReviewById } from '../api/reviews/reviewStore';
import { Review, type NewReview } from './review';

export const handleCreateReview = async (data: NewReview) => {
  console.log(data);
  await addReview({ ...data, reviewerId: 1, movieId: 1 });
};

export const handleEditReview = async (data: Review) => {
  console.log(data);
  await updateReviewById(data);
};
