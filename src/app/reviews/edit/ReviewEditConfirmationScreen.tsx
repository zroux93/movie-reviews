import { Review } from "@/app/api/reviews/reviewStore";
import { FieldValues } from "react-hook-form";

import Image from "next/image";

type ReviewEditConfirmationScreenProps = {
  reviewEditedData: FieldValues;
  reviewInitialData: Review;
  onReturnToEdit: () => void;
  onSave: () => void;
};

export default function ReviewEditConfirmationScreen({
  reviewInitialData,
  reviewEditedData,
  onReturnToEdit,
  onSave,
}: ReviewEditConfirmationScreenProps) {
  const imagePreview = (
    <Image
      src={reviewEditedData.imageUrl}
      width={1200}
      height={400}
      style={{
        maxWidth: "200px",
        height: "auto",
      }}
      alt="poster artwork"
    />
  );

  const dataRows = [
    { left: "Movie Title:", right: reviewInitialData.title },
    { left: "Image URL:", right: reviewEditedData.imageUrl },
    { left: "Image Preview:", right: imagePreview },
    { left: "Review Text:", right: reviewEditedData.reviewText },
  ];

  return (
    <>
      <h5>Confirm your updated review</h5>
      <div className="list-group">
        {dataRows.map((row) => (
          <div className="list-group-item d-flex justify-content-between">
            <div>{row.left}</div>
            <div>{row.right}</div>
          </div>
        ))}
        <div>
          <button className="btn btn-primary" onClick={onSave}>
            Confirm and save
          </button>
          <button className="btn btn-link" onClick={onReturnToEdit}>
            Back to edit screen
          </button>
        </div>
      </div>
    </>
  );
}
