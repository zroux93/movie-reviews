'use client';

import { useRouter } from 'next/navigation';
import { deleteReview } from '../actions';

export const DeleteReviewButton = ({
  id,
  returnHref,
}: {
  id: number;
  returnHref: string;
}) => {
  const router = useRouter();
  const handleDelete = async () => {
    await deleteReview(id);
    router.push(returnHref);
  };

  return (
    <button className="btn btn-danger" onClick={handleDelete}>
      Delete
    </button>
  );
};
