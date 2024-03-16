import CreateReviewForm from './CreateReviewForm';

export default function NewReviewPage({}) {
  // const [currentPageId, setCurrentPageId] = useState("create-review");

  // return <PageSwitcher pages={[]} currentPageId={currentPageId} />;

  // const onSave = async (data: FieldValues) => {
  //   'use server';
  //   const newReview: NewReview = {
  //     reviewerId: 1,
  //     shortDescription: data.shortDescription,
  //     reviewText: data.reviewText,
  //     title: data.title,
  //     starRating: data.starRating,
  //     movieId: data.movieId || 1,
  //     releaseDate: data.releaseDate,
  //     imageUrl: data.imageUrl,
  //   };

  //   console.log('data to add is', data);

  //   const result = await addReview(newReview);
  //   console.log('Added new review with result:', result);
  // };

  return <CreateReviewForm onCancelHref={'/reviews'} />;
}
