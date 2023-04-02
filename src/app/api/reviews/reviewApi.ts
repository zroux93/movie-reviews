import { baseUrl, makeRequest } from "../api";

import { Review } from "./reviewStore";

export async function getReviewById(id: string) {
  console.log("ID is", id);

  const newRequest = new Request(new URL(`${baseUrl}/api/reviews/${id}`), {
    method: "GET",
    cache: "no-store",
  });

  const response = await makeRequest(newRequest);

  const jsonReview: Review = {
    ...response.review,
  };
  return jsonReview;
}

export async function updateReview(review: Review) {
  console.log("review to update is:", review);
}
