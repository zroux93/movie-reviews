"use client";

import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { getReviewById } from "@/app/api/reviews/reviewStore";

import { PageSwitcher } from "@/app/common/PageSwitcher";
import ReviewEditForm from "./ReviewEditForm";

type ReviewManagerProps = {
  mode: "edit" | "new";
  id?: string;
};

export default function ReviewManager({ mode, id }: ReviewManagerProps) {
  const [currentPageId, setCurrentPageId] = useState("edit-review");

  let reviewInitialData;
  if (mode === "edit" && id) {
    reviewInitialData = getReviewById(id);
  }

  const [reviewData, setReviewData] = useState<FieldValues>();

  const handleContinueFromEdit = (data: FieldValues) => {
    console.log("data from form is", data);
    setReviewData(data);
    setCurrentPageId("confirm-review");
  };

  const pages = [
    {
      id: "edit-review",
      content: (
        <ReviewEditForm
          onContinue={handleContinueFromEdit}
          initialData={reviewInitialData}
        />
      ),
    },
    {
      id: "confirm-review",
      content: "Confirm your review",
    },
  ];

  return <PageSwitcher pages={pages} currentPageId={currentPageId} />;
}
