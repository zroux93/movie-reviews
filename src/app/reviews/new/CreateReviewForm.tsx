'use client';

import { useForm } from 'react-hook-form';
import Link from 'next/link';

import { type NewReview } from '../review';
import { handleCreateReview } from '../actions';
import { TextInput } from '@/app/common/Forms/TextInput';
import { TextAreaInput } from '@/app/common/Forms/TextAreaInput';

type CreateReviewFormProps = {
  defaultValues: NewReview;
  onCancelHref: string;
};

export default function CreateReviewForm({
  onCancelHref,
  defaultValues,
}: CreateReviewFormProps) {
  const { register, handleSubmit: handleFormSubmit } = useForm<NewReview>({
    defaultValues,
  });

  const handleSubmit = async (formData: NewReview) => {
    await handleCreateReview(formData);
  };

  return (
    <form onSubmit={handleFormSubmit(handleSubmit)} method="post">
      <div className="row g-3">
        <TextInput
          placeholder="add a short tagline..."
          label="Tagline"
          {...register('shortDescription')}
        />
        <TextInput
          label="Review Title"
          placeholder="review title..."
          {...register('title')}
        />
        <TextAreaInput
          label="Review Text"
          placeholder="I liked/disliked this movie because..."
          {...register('reviewText')}
        />
        <TextInput
          label="Star Rating"
          type="number"
          max={5}
          min={1}
          {...register('starRating')}
        />
        <TextInput
          label="Release date (month and year)"
          {...register('releaseDate')}
        />
        <TextInput label="Image url (optional)" {...register('imageUrl')} />
        <div>
          <button className="btn btn-primary" type="submit">
            Continue
          </button>
          <Link href={onCancelHref} className="btn btn-link">
            Cancel
          </Link>
        </div>
      </div>
    </form>
  );
}
