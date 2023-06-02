import React from "react";

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container d-flex justify-content-around">
      <div className="col-md-6">{children}</div>
    </div>
  );
}
