// "use client";

// import { useSearchParams } from "next/navigation";
import { SignIn } from "@clerk/nextjs/app-beta/client";

export default function LoginPage() {
  // const searchParams = useSearchParams();

  // const redirectUrl = searchParams?.get("redirect_url");

  return (
    <div className="row justify-content-center">
      <SignIn />
    </div>
  );
}
