"use client";

import { useState } from "react";
import { posthog } from "@/lib/posthog";

export default function TrialPage() {
  const [started, setStarted] = useState(false);

  function startTrial() {
    posthog.capture("trial_started", {
      plan: "team",
    });
    setStarted(true);
  }

  return (
    <main className="card">
      <h1>Start a trial</h1>
      <p>
        The dedicated trial screen records trial_started with a plan. Checkout
        does not, so sales ops cannot see every paid intent as a trial.
      </p>
      <button type="button" onClick={startTrial} disabled={started}>
        {started ? "Trial started" : "Start 14-day trial"}
      </button>
    </main>
  );
}
