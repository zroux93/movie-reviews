type Reviewer = {
  id: string;
  name: string;
};

class ReviewersStore {
  reviewers: Reviewer[] = [
    { id: "zroux93", name: "Zachary Roux" },
    { id: "kristinna112", name: "Krystyna Roux" },
  ];
}

const _reviewersStore = new ReviewersStore();

export function getReviewerById(id: string) {
  return _reviewersStore.reviewers.find((r) => r.id === id);
}

export function addReviewer(id: string, name: string) {
  return _reviewersStore.reviewers.push({ id, name });
}
