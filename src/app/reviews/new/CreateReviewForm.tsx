import FormInputWithLabel from '@/app/common/Forms/FormInputWithLabel';
import Link from 'next/link';
import { FieldValues } from 'react-hook-form';

type CreateReviewFormProps = {
  // onContinue: (data: FieldValues) => void;
  onCancelHref: string;
};

export default function CreateReviewForm({
  // onContinue,
  onCancelHref,
}: CreateReviewFormProps) {
  // const { register, handleSubmit } = useForm();

  return (
    <form action="/api/reviews" method="post">
      <div className="row g-3">
        <FormInputWithLabel
          id="shortDescription"
          placeholder="add a short tagline..."
          label="Tagline"
        >
          <input />
        </FormInputWithLabel>
        <FormInputWithLabel
          id="title"
          label="Review Title"
          placeholder="review title..."
        >
          <input />
        </FormInputWithLabel>
        <FormInputWithLabel
          id="reviewText"
          label="Review Text"
          placeholder="I liked/disliked this movie because..."
        >
          <textarea />
        </FormInputWithLabel>
        <FormInputWithLabel id="starRating" label="Star Rating">
          <input type="number" max={5} min={1} />
        </FormInputWithLabel>
        <FormInputWithLabel
          id="releaseDate"
          label="Release date (month and year)"
        >
          <input />
        </FormInputWithLabel>
        <FormInputWithLabel id="imageUrl" label="Image url (optional)">
          <input />
        </FormInputWithLabel>
        <div>
          <button className="btn btn-primary" type="submit">
            Continue
          </button>
          <Link href={onCancelHref} className="btn btn-link">
            Cancel
          </Link>
          {/* <button className="btn btn-link" onClick={onCancel}>
            Cancel
          </button> */}
        </div>
      </div>
    </form>
  );
}
