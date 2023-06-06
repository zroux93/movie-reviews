import Link from 'next/link';
import UserAccountLink from './UserAccountLink';
// import { currentUser } from "@clerk/nextjs/app-beta";
import { Suspense } from 'react';
import Loading from '../loading';

type NavBarLink = {
  href: string;
  label: string;
};

type NavBarProps = {
  additionalLinks?: NavBarLink[];
  currentPath?: string;
  hideLinks?: boolean;
  hideUserLink?: boolean;
};

export default async function NavBar({
  additionalLinks = [],
  currentPath,
  hideLinks,
  hideUserLink,
}: NavBarProps) {
  const linksToDisplay: NavBarLink[] = [
    {
      href: '/',
      label: 'Home',
    },
    ...additionalLinks,
  ];

  // const user = await currentUser();

  return (
    <nav className="navbar navbar-expand-sm bg-body-tertiary border-bottom">
      <div className="container-fluid">
        <Link href={'/'} className="navbar-brand">
          Zachary&apos;s Website
        </Link>
        {!hideLinks && (
          <ul className="navbar-nav me-auto">
            {linksToDisplay.map((l, index) => (
              <li className="nav-item" key={index}>
                <Link key={index} href={l.href} className="nav-link">
                  <span>{l.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
        {!hideUserLink && (
          <Suspense fallback={<Loading />}>
            <UserAccountLink />
          </Suspense>
        )}
      </div>
    </nav>
  );
}
