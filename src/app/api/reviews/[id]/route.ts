import { NextResponse } from "next/server";

import { getReviewById, Review, updateReviewById } from "../reviewStore";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  if (!params) {
    return NextResponse.error();
  }

  const review = getReviewById(params.id);

  return NextResponse.json({ review });
}

export async function PUT(request: Request) {
  console.log("REQUEST RECEIVED BY SERVER: ", request);
  const requestJson = await request.json();
  console.log("request json received was", requestJson);
  const review: Review = { ...requestJson.review };

  console.log("review is", review);

  updateReviewById(review);

  return NextResponse.json({ review });
}
