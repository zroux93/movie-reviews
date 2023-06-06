// import fsPromise from "fs/promises";
// import path from "path";
import { db } from '../database'

export type Reviewer = {
    id: string
    name: string
    username: string
}

initializeReviewers();
// const reviewers: Reviewer[] = [];

// function initializeReviewers() {
//   let reviewersFile = require("../data/reviewers.json");
//   reviewersFile.forEach((r: Reviewer) => {
//     reviewers.push({ id: r.id, name: r.name });
//   });
// }

// async function saveReviewers() {
//   // const result = await db
//   // .updateTable("reviewer")
//   // TODO: add better error handling
//   // const _path = path.resolve("src/app/api/data/reviewers.json");
//   // const result = await fsPromise.writeFile(
//   //   _path,
//   //   JSON.stringify(reviewers, null, 4)
//   // );
//   // return result;
// }

// // initializeReviewers();

export function getReviewerById(id: string) {
  return reviewers.find((r) => r.id === id);
export async function getReviewerById(id: string) {
    const result = await db
        .selectFrom('reviewer')
        // .select(['id', 'name', 'username'])
        .selectAll()
        .where('reviewer.id', '==', id)
        .executeTakeFirstOrThrow()

    const reviewer: Reviewer = { ...result }

    return reviewer
}

export async function addReviewer(id: string, name: string, username: string) {
    const result = await db
        .insertInto('reviewer')
        .values({ id: id, name: name, username: username })
        .execute()

    return result
}
