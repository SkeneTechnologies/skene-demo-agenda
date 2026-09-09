"use client";

import { useState } from "react";
import { posthog } from "@/lib/posthog";

export default function CheckoutPage() {
  const [paid, setPaid] = useState(false);

  function completePurchase() {
    // Gaps: trial_started is not fired here. plan and amount are missing.
    posthog.capture("purchase_completed");
    setPaid(true);
  }

  return (
    <main className="card">
      <h1>Checkout</h1>
      <p>
        Subscribe the workspace. This path skips trial_started and does not
        attach plan or amount, so monetization questions come back incomplete.
      </p>
      <button type="button" onClick={completePurchase} disabled={paid}>
        {paid ? "Subscribed" : "Pay $24/mo"}
      </button>
    </main>
  );
}
