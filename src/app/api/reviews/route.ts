import { NextResponse } from 'next/server';

import { addReview, getAllReviews } from './reviewStore';
import { NewReview } from '@/app/reviews/review';

export async function GET(request: Request, { params }: any) {
  const reviews = getAllReviews();
  console.log('reviews on server side are:', reviews);
  return NextResponse.json({ reviews: reviews });
}

export async function POST(request: Request, { params }: any) {
  console.log('REQUEST RECEIVED BY SERVER: ', request);
  const requestBody = await request.json();
  console.log('request json received was', requestBody);
  const review: NewReview = { ...requestBody, reviewerId: 1, movieId: 1 };

  console.log('review is', review);
  const result = await addReview(review);

  return NextResponse.json({ result });
}
