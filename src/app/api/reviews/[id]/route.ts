import { NextResponse } from "next/server";

import { getReviewById } from "../reviewStore";

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

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const requestJson = await request.json();
}
