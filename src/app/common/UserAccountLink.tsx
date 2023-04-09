"use client";

import { User } from "@clerk/nextjs/api";
import { useAuth } from "@clerk/nextjs/";
import { useRouter } from "next/navigation";

import Link from "next/link";

type UserAccountLinkProps = {
  user: User | null;
};

export default function UserAccountLink({ user }: UserAccountLinkProps) {
  const username = user?.username;
  const realName =
    user?.firstName && user.lastName
      ? `${user?.firstName} ${user?.lastName}`
      : "";

  const userDisplayName = realName || username;

  const auth = useAuth();
  const router = useRouter();

  const handleSignOut = () => {
    auth.signOut();
    router.push("/");
  };

  return (
    <div className="d-flex">
      {user && (
        <>
          <span className="align-self-center">{userDisplayName}</span>
          <button className="btn btn-link" onClick={handleSignOut}>
            Sign Out
          </button>
        </>
      )}
      {!user && (
        <Link href="/login" className="btn btn-link">
          Sign In
        </Link>
      )}
    </div>
  );
}
