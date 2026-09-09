"use client";

import { useState } from "react";
import Link from "next/link";
import { posthog } from "@/lib/posthog";

export default function WorkspaceHomePage() {
  const [created, setCreated] = useState(false);

  function createMeetingType() {
    posthog.capture("meeting_type_created", {
      meeting_type: "discovery",
    });
    setCreated(true);
  }

  return (
    <main className="card">
      <h1>Workspace</h1>
      <p>
        First value is not creating a meeting type. First value is the first
        booking on a link you own.
      </p>
      <div className="row">
        <button type="button" onClick={createMeetingType}>
          {created ? "Discovery link created" : "Create a discovery link"}
        </button>
        <Link className="btn secondary" href="/workspace/book">
          First booking
        </Link>
        <Link className="btn secondary" href="/workspace/invite">
          Invite a teammate
        </Link>
        <Link className="btn secondary" href="/workspace/trial">
          Start trial
        </Link>
        <Link className="btn secondary" href="/workspace/checkout">
          Checkout
        </Link>
        <Link className="btn secondary" href="/workspace/settings">
          Settings
        </Link>
      </div>
    </main>
  );
}
