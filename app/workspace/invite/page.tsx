"use client";

import { useState } from "react";
import { posthog } from "@/lib/posthog";

export default function InvitePage() {
  const [sent, setSent] = useState(false);

  function invite() {
    posthog.capture("invite_sent", {
      role: "seller",
    });
    setSent(true);
  }

  return (
    <main className="card">
      <h1>Invite a teammate</h1>
      <p>Seat expansion inside a company account. The event carries a role.</p>
      <button type="button" onClick={invite} disabled={sent}>
        {sent ? "Invite sent" : "Send invite"}
      </button>
    </main>
  );
}
