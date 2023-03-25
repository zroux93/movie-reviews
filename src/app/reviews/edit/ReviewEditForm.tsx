import { FieldValues, useForm } from "react-hook-form";

import { Review } from "../../api/reviews/reviewStore";

type ReviewEditFormProps = {
  onContinue: (data: FieldValues) => void;
  initialData: Review;
};

export default function ReviewEditForm({
  onContinue,
  initialData,
}: ReviewEditFormProps) {
  const defaultValues = {
    shortDescription: initialData.shortDescription,
    reviewText: initialData.reviewText,
  };

  const { register, handleSubmit } = useForm({ defaultValues });

  return (
    <div className="col-md-7 col-lg-8">
      <h4 className="mb-3">Edit your review for {initialData.title}</h4>
      <form onSubmit={handleSubmit(onContinue)}>
        <div className="row g-3">
          <div className="col-12">
            <label
              htmlFor="review-edit-short-description"
              className="form-label"
            >
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
          <div>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
            <button type="button" className="btn btn-link">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
