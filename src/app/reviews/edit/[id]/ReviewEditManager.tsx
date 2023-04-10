"use client";

import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { useRouter } from "next/navigation";

import { Review } from "@/app/api/reviews/reviewStore";
import { updateReview } from "@/app/api/reviews/reviewApi";

import { PageSwitcher } from "@/app/common/PageSwitcher";
import { ReviewEditForm } from "../ReviewEditForm";
import ReviewEditConfirmationScreen from "../ReviewEditConfirmationScreen";

type ReviewEditManagerProps = {
  review: Review;
};

export default function ReviewEditManager({ review }: ReviewEditManagerProps) {
  const [currentPageId, setCurrentPageId] = useState("edit-review");

  const router = useRouter();

  const [reviewEditedData, setReviewEditedData] = useState<FieldValues>({
    shortDescription: review?.shortDescription,
    reviewText: review?.reviewText,
    imageUrl: review?.imageUrl,
  });

  const handleContinueFromEdit = (data: FieldValues) => {
    console.log("data from form is", data);
    setReviewEditedData(data);
    setCurrentPageId("confirm-review");
  };

  const handleCancelFromEdit = () => {
    router.push(`/reviews/${review.reviewId}`);
  };

  const handleReturnToEdit = () => {
    setCurrentPageId("edit-review");
  };

  const handleSaveUpdatedReview = () => {
    const newReviewEditedData: Review = {
      ...review,
      shortDescription: reviewEditedData.shortDescription,
      reviewText: reviewEditedData.reviewText,
      imageUrl: reviewEditedData.imageUrl,
    };
    updateReview(newReviewEditedData);
    router.push(`/reviews/${review.reviewId}`);
    router.refresh();
  };

  const pages = [
    {
      id: "edit-review",
      content: (
        <ReviewEditForm
          onContinue={handleContinueFromEdit}
          onCancel={handleCancelFromEdit}
          initialData={reviewEditedData}
        />
      ),
    },
    {
      id: "confirm-review",
      content: (
        <ReviewEditConfirmationScreen
          reviewInitialData={review}
          reviewEditedData={reviewEditedData}
          onReturnToEdit={handleReturnToEdit}
          onSave={handleSaveUpdatedReview}
        />
      ),
    },
  ];

  return <PageSwitcher pages={pages} currentPageId={currentPageId} />;
}

export { ReviewEditManager };
