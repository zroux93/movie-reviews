import { SignUp } from "@clerk/nextjs/app-beta";

export default function SignUpPage() {
  return (
    <div className="row justify-content-center">
      <SignUp redirectUrl={"/reviews"} />
    </div>
  );
}
