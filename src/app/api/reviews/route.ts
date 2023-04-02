import { NextResponse } from "next/server";

// import { getReviewById } from "../reviewStore";

export async function GET(request: Request, { params }: any) {
  //   if (!params) {
  //     return NextResponse.error();
  //   }

  //   console.log(params.id);

  //   const review = getReviewById(params.id);

  console.log("hit server route!");

  return new NextResponse("Hello, Next.js!");
}
