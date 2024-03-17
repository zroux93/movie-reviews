'use server';

import { revalidatePath } from 'next/cache';
import {
  addReview,
  updateReviewById,
  deleteReviewById,
} from '../api/reviews/reviewStore';
import { Review, type NewReview } from './review';

export const createReview = async (data: NewReview) => {
  await addReview({ ...data, movieId: 1 });
  revalidatePath('/reviews');
};

export const editReview = async (data: Review) => {
  await updateReviewById(data);
  revalidatePath('/reviews');
  revalidatePath(`/reviews/${data.reviewId}`);
};

export const deleteReview = async (reviewId: number) => {
  await deleteReviewById(reviewId);
  revalidatePath('/reviews');
};
