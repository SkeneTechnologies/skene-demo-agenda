"use client";

import { useState } from "react";
import { posthog } from "@/lib/posthog";

export default function SettingsPage() {
  const [cancelled, setCancelled] = useState(false);

  function cancel() {
    posthog.capture("subscription_cancelled", {
      plan: "team",
    });
    setCancelled(true);
  }

  return (
    <main className="card">
      <h1>Workspace settings</h1>
      <p>Churn is recorded with the plan so CS can count cancellations.</p>
      <button type="button" onClick={cancel} disabled={cancelled}>
        {cancelled ? "Subscription cancelled" : "Cancel subscription"}
      </button>
    </main>
  );
}
