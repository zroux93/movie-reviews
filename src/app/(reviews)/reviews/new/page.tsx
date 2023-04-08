"use client";

import { useState } from "react";
import { PageSwitcher } from "@/app/common/PageSwitcher";

export default function NewReviewPage({}) {
  const [currentPageId, setCurrentPageId] = useState("create-review");

  return <PageSwitcher pages={[]} currentPageId={currentPageId} />;
}
