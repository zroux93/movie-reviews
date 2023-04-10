import { SignIn } from "@clerk/nextjs/app-beta";

export default function LoginPage() {
  return (
    <div className="row justify-content-center">
      <SignIn signUpUrl="/sign-up" />
    </div>
  );
}
