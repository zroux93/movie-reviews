import Link from "next/link";
import UserAccountLink from "./UserAccountLink";
import { User } from "@clerk/nextjs/api";

type NavBarLink = {
  href: string;
  label: string;
};

type NavBarProps = {
  additionalLinks?: NavBarLink[];
  user: User | null;
  currentPath?: string;
  hideLinks?: boolean;
  hideUserLink?: boolean;
};

export default function NavBar({
  additionalLinks = [],
  user,
  currentPath,
  hideLinks,
  hideUserLink,
}: NavBarProps) {
  const linksToDisplay: NavBarLink[] = [
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
        {!hideLinks && (
          <ul className="navbar-nav me-auto">
            {linksToDisplay.map((l, index) => (
              <li className="nav-item">
                <Link key={index} href={l.href} className="nav-link">
                  <span>{l.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
        {!hideUserLink && <UserAccountLink user={user} />}
      </div>
    </nav>
  );
}
