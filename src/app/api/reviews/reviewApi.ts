import { baseUrl, makeRequest } from "../api";

import { Review } from "./reviewStore";

export async function getReviewById(id: string, revalidate?: boolean) {
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

  const updateReviewRequest = new Request(
    new URL(`${baseUrl}/api/reviews/${review.reviewId}`),
    {
      method: "PUT",
      body: JSON.stringify({ review }),
    }
  );

  const updateResponse = await makeRequest(updateReviewRequest);
  console.log("updated review: response was:", updateResponse);

  const revalidateUrl = `${baseUrl}/api/revalidate?=testToken`;
  const revalidateRequest = new Request(new URL(revalidateUrl), {
    method: "POST",
    body: JSON.stringify({ id: review.reviewId }),
  });

  const revalidateResponse = await makeRequest(revalidateRequest);
  console.log("revalidate request result:", revalidateResponse);
}

export async function getAllReviews() {
  const newRequest = new Request(new URL(`${baseUrl}/api/reviews`), {
    method: "GET",
  });

  const response = await makeRequest(newRequest);

  const jsonReviews: Review[] = [];

  response.reviews.forEach((review: Review) => {
    jsonReviews.push({
      ...review,
    });
  });

  return jsonReviews;
}
