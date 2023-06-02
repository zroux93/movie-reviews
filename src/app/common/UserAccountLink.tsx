// import { User } from "@clerk/nextjs/api";
// import { useAuth } from "@clerk/nextjs/";
// import { useRouter } from "next/navigation";

import { UserButton } from "@clerk/nextjs/app-beta";

// import Link from "next/link";
// import Loading from "../loading";

// type UserAccountLinkProps = {
//   user: User;
// };

export default function UserAccountLink() {
  // const auth = useAuth();
  // const { user, isSignedIn, isLoaded } = useUser();
  // const router = useRouter();

  // const username = user?.username;
  // const realName =
  //   user?.firstName && user.lastName
  //     ? `${user?.firstName} ${user?.lastName}`
  //     : "";

  // const userDisplayName = realName || username;

  // const handleSignOut = () => {
  //   auth.signOut();
  //   router.push("/");
  // };

  return (
    <div className="d-flex">
      {/* {isLoaded && isSignedIn && (
        <>
          <span className="align-self-center">{userDisplayName}</span>
          <button className="btn btn-link" onClick={handleSignOut}>
            Sign Out
          </button>
        </>
      )}
      {!isSignedIn && <Loading spinnerClassName="spinner-border-sm" />} */}
      {/* {user ? (
        <>
          <span className="align-self-center">{userDisplayName}</span>
          <button className="btn btn-link" onClick={handleSignOut}>
            Sign Out
          </button>
        </>
      ) : (
        <Link href="/login" className="btn btn-link">
          Sign In
        </Link>
      )} */}
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
