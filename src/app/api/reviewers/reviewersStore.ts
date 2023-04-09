import fsPromise from "fs/promises";
import path from "path";

type Reviewer = {
  id: string;
  name: string;
};

const reviewers: Reviewer[] = [];

function loadReviewers() {
  let reviewersFile = require("../data/reviewers.json");
  reviewersFile.forEach((r: Reviewer) => {
    addReviewer(r.id, r.name);
  });
}

async function saveReviewers() {
  // TODO: add better error handling
  const _path = path.resolve("src/app/api/data/reviewers.json");
  const result = await fsPromise.writeFile(
    _path,
    JSON.stringify(reviewers, null, 4)
  );
  return result;
}

loadReviewers();

export function getReviewerById(id: string) {
  return reviewers.find((r) => r.id === id);
}

export function addReviewer(id: string, name: string) {
  reviewers.push({ id, name });
  saveReviewers();
}
