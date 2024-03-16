'use server';

import { type NewReview } from './review';

export const handleCreateReview = async (data: NewReview) => {
  console.log(data);
};
