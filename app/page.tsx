"use client";

import Link from "next/link";
import { posthog } from "@/lib/posthog";

export default function LandingPage() {
  function requestDemo() {
    // Sales-assist path. No purchase is recorded after this booking.
    posthog.capture("demo_booked", {
      source: "organic",
      medium: "search",
    });
  }

  return (
    <main className="card">
      <h1>Booking links for B2B teams</h1>
      <p>
        Harbor lets sales and customer success share a link, take the meeting,
        and grow the workspace with seats. This sample exists so Skene can
        show a familiar SaaS funnel: signup, first booking, trial, and paid.
      </p>
      <div className="row">
        <Link className="btn" href="/signup">
          Start free
        </Link>
        <button type="button" className="btn secondary" onClick={requestDemo}>
          Book a demo
        </button>
      </div>
      <p className="note">
        There is no landing_page_viewed event on this page. Campaign-to-signup
        conversion from page views cannot be answered.
      </p>
    </main>
  );
}
