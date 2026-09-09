"use client";

import { useState } from "react";
import Link from "next/link";
import { trackSignup } from "@/lib/analytics";

export default function SignupPage() {
  const [done, setDone] = useState(false);

  function handleSignup() {
    // Complete attribution. Marketing can answer "which source drove signups?"
    trackSignup({
      source: "google",
      medium: "cpc",
      campaign: "q3-outbound",
    });
    setDone(true);
  }

  return (
    <main className="card">
      <h1>Create a Harbor workspace</h1>
      <p>
        Organic and paid signups should carry source, medium, and campaign so
        GTM can attribute acquisition.
      </p>
      {done ? (
        <p>Workspace created. Continue into the product.</p>
      ) : (
        <button type="button" onClick={handleSignup}>
          Create workspace
        </button>
      )}
      <p className="note">
        <Link href="/signup/paid">Paid landing variant</Link> signs up without
        a campaign property.
      </p>
      {done ? (
        <p>
          <Link href="/workspace">Open workspace</Link>
        </p>
      ) : null}
    </main>
  );
}
