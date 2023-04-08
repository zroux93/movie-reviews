import { NextResponse } from "next/server";

// import { getReviewById } from "../reviewStore";

import { getAllReviews } from "./reviewStore";

export async function GET(request: Request, { params }: any) {
  const reviews = getAllReviews();
  console.log("reviews on server side are:", reviews);
  return NextResponse.json({ reviews: reviews });
}
