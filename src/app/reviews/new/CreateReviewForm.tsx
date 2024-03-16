'use client';

import { FormProvider, useForm } from 'react-hook-form';
import Link from 'next/link';

import { type NewReview } from '../review';
import { handleCreateReview } from '../actions';
import { TextInput } from '@/app/common/Forms/TextInput';
import { TextAreaInput } from '@/app/common/Forms/TextAreaInput';

type CreateReviewFormProps = {
  defaultValues?: NewReview;
  onCancelHref: string;
};

export default function CreateReviewForm({
  onCancelHref,
  defaultValues,
}: CreateReviewFormProps) {
  const formMethods = useForm<NewReview>({
    defaultValues,
  });

  const handleSubmit = async (formData: NewReview) => {
    await handleCreateReview(formData);
  };

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={formMethods.handleSubmit(handleSubmit)}
        method="post"
        noValidate
      >
        <div className="row g-3">
          <TextInput
            placeholder="add a short tagline..."
            label="Tagline"
            name="shortDescription"
            isRequired
          />
          <TextInput
            label="Review Title"
            placeholder="review title..."
            name="title"
            isRequired
          />
          <TextAreaInput
            label="Review Text"
            placeholder="I liked/disliked this movie because..."
            name="reviewText"
            isRequired
          />
          <TextInput
            label="Star Rating"
            type="number"
            max={5}
            min={1}
            name="starRating"
            isRequired
          />
          <TextInput
            label="Release date (month and year)"
            name="releaseDate"
            isRequired
          />
          <TextInput label="Image url (optional)" name="imageUrl" />
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
    </FormProvider>
  );
}
