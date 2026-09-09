"use client";

import { useState } from "react";
import { posthog } from "@/lib/posthog";

export default function FirstBookingPage() {
  const [booked, setBooked] = useState(false);

  function bookMeeting() {
    posthog.capture("first_meeting_booked", {
      plan: "trial",
      source: "google",
    });
    setBooked(true);
  }

  return (
    <main className="card">
      <h1>First meeting booked</h1>
      <p>
        This is Agenda&apos;s activation event. A GTM team should be able to
        ask what share of signups reach first value.
      </p>
      <button type="button" onClick={bookMeeting} disabled={booked}>
        {booked ? "Booking recorded" : "Prospect books a time"}
      </button>
    </main>
  );
}
