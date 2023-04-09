import Link from "next/link";
import UserAccountLink from "./UserAccountLink";
import { User } from "@clerk/nextjs/api";

type HeaderLink = {
  href: string;
  label: string;
};

type HeaderProps = {
  additionalLinks?: HeaderLink[];
  user: User | null;
  currentPath?: string;
};

export default function Header({
  additionalLinks = [],
  user,
  currentPath,
}: HeaderProps) {
  const linksToDisplay: HeaderLink[] = [
    {
      href: "/",
      label: "Home",
    },
    ...additionalLinks,
  ];

  return (
    <nav className="navbar navbar-expand-sm bg-body-tertiary border-bottom">
      <div className="container">
        <Link href={"/"} className="navbar-brand">
          Zachary's Website
        </Link>
        <ul className="navbar-nav me-auto">
          {linksToDisplay.map((l, index) => (
            <li className="nav-item">
              <Link key={index} href={l.href} className="nav-link">
                <span>{l.label}</span>
              </Link>
            </li>
          ))}
        </ul>
        <UserAccountLink user={user} />
      </div>
    </nav>
  );
}
