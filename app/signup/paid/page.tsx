"use client";

import { useState } from "react";
import Link from "next/link";
import { trackSignup } from "@/lib/analytics";

export default function PaidSignupPage() {
  const [done, setDone] = useState(false);

  function handleSignup() {
    // Intentional gap: campaign is missing on the paid path.
    trackSignup({
      source: "linkedin",
      medium: "paid",
    });
    setDone(true);
  }

  return (
    <main className="card">
      <h1>Paid signup</h1>
      <p>
        This path records source and medium only. Campaign is omitted so
        attribution questions fail for paid traffic.
      </p>
      {done ? (
        <Link href="/workspace">Open workspace</Link>
      ) : (
        <button type="button" onClick={handleSignup}>
          Create workspace from ad
        </button>
      )}
    </main>
  );
}
