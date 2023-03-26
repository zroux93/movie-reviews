"use client";

import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { useRouter } from "next/navigation";

import { getReviewById, updateReviewById } from "@/app/api/reviews/reviewStore";

import { PageSwitcher } from "@/app/common/PageSwitcher";
import { ReviewEditForm } from "../ReviewEditForm";
import ReviewEditConfirmationScreen from "../ReviewEditConfirmationScreen";

type ReviewEditorPageProps = {
  params: { id: string };
};

export default function ReviewEditorPage({
  params: { id },
}: ReviewEditorPageProps) {
  const [currentPageId, setCurrentPageId] = useState("edit-review");

  const router = useRouter();

  let reviewInitialData = getReviewById(id);

  const [reviewData, setReviewData] = useState<FieldValues>({
    shortDescription: reviewInitialData.shortDescription,
    reviewText: reviewInitialData.reviewText,
    imageUrl: reviewInitialData.imageUrl,
  });

  const handleContinueFromEdit = (data: FieldValues) => {
    console.log("data from form is", data);
    setReviewData(data);
    setCurrentPageId("confirm-review");
  };

  const handleCancelFromEdit = () => {
    router.push(`/reviews/${id}`);
  };

  const handleReturnToEdit = () => {
    setCurrentPageId("edit-review");
  };

  const handleSaveUpdatedReview = () => {
    const newReviewData = {
      ...reviewInitialData,
      shortDescription: reviewData.shortDescription,
      reviewText: reviewData.reviewText,
      imageUrl: reviewData.imageUrl,
    };
    updateReviewById(newReviewData);
    router.push(`/reviews/${id}`);
    router.refresh();
  };

  const pages = [
    {
      id: "edit-review",
      content: (
        <ReviewEditForm
          onContinue={handleContinueFromEdit}
          onCancel={handleCancelFromEdit}
          initialData={reviewData}
        />
      ),
    },
    {
      id: "confirm-review",
      content: (
        <ReviewEditConfirmationScreen
          reviewInitialData={reviewInitialData}
          reviewEditedData={reviewData}
          onReturnToEdit={handleReturnToEdit}
          onSave={handleSaveUpdatedReview}
        />
      ),
    },
  ];

  return <PageSwitcher pages={pages} currentPageId={currentPageId} />;
}
