import Link from "next/link";

type HeaderLink = {
  href: string;
  label: string;
};

type HeaderProps = {
  additionalLinks?: HeaderLink[];
};

export default function Header({ additionalLinks }: HeaderProps) {
  return (
    <header>
      <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <Link
          href={"/"}
          className="d-flex align-items-center link-body-emphasis text-decoration-none"
        >
          <span className="fs-4">Zachary's Website</span>
        </Link>
        {additionalLinks && (
          <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
            {additionalLinks.map((l, index) => (
              <Link
                key={index}
                href={l.href}
                className="me-3 py-2 link-body-emphasis text-decoration-none"
              >
                <span>{l.label}</span>
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
