import NavBar from "../common/NavBar";

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const additionalLinks = [{ href: "/reviews", label: "Movie reviews" }];

  return (
    <>
      <NavBar additionalLinks={additionalLinks} />
      <div className="container">{children}</div>
    </>
  );
}
