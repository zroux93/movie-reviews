import { ReactNode } from "react";

type Page = {
  id: string | number;
  content: ReactNode;
};

type PageSwitcherProps = {
  pages: Page[];
  currentPageId: string;
};

export function PageSwitcher({ pages, currentPageId }: PageSwitcherProps) {
  const currentPage = pages.find((p) => p.id === currentPageId);

  if (!currentPage) {
    return null;
  }

  return <>{currentPage.content}</>;
}
