import { FieldValues, useForm } from "react-hook-form";

import { Review } from "@/app/api/reviews/reviewStore";

type ReviewEditFormProps = {
  onContinue: (data: FieldValues) => void;
  onCancel: () => void;
  initialData: FieldValues;
};

export default function ReviewEditForm({
  onContinue,
  onCancel,
  initialData,
}: ReviewEditFormProps) {
  const defaultValues = {
    shortDescription: initialData.shortDescription,
    reviewText: initialData.reviewText,
    imageUrl: initialData.imageUrl,
  };

  const { register, handleSubmit } = useForm({ defaultValues });

  return (
    <form onSubmit={handleSubmit(onContinue)}>
      <div className="row g-3">
        <div className="col-12">
          <label htmlFor="review-edit-short-description" className="form-label">
            Review summary
          </label>
          <input
            id="review-edit-short-description"
            {...register("shortDescription")}
            placeholder="add a short tagline here"
            className="form-control"
          />
        </div>
        <div className="col-12">
          <label htmlFor="review-edit-review-text" className="form-label">
            Review text
          </label>
          <textarea
            id="review-edit-review-text"
            {...register("reviewText")}
            placeholder="add your review here"
            className="form-control"
          />
        </div>
        <div className="col-12">
          <label htmlFor="review-edit-image-url" className="form-label">
            Image URL
          </label>
          <textarea
            id="review-edit-image-url"
            {...register("imageUrl")}
            placeholder="add an image URL here"
            className="form-control"
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Continue
          </button>
          <button type="button" className="btn btn-link" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}

export { ReviewEditForm };
