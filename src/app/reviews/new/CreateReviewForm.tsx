import { FieldValues, useForm } from "react-hook-form";

type CreateReviewFormProps = {
  onContinue: (data: FieldValues) => void;
};

export default function CreateReviewForm({
  onContinue,
}: CreateReviewFormProps) {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onContinue)}>
      <input
        {...register("shortDescription")}
        placeholder="add a short tagline here"
      />
      <textarea
        {...register("reviewText")}
        placeholder="add your review here"
      />
      <input {...register("reviewerId")} placeholder="add your user ID here" />
      <button type="submit">Continue</button>
    </form>
  );
}
