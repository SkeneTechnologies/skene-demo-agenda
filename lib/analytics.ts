import { posthog } from "./posthog";

/** First-party wrapper. The scanner should still resolve this to PostHog. */
export function trackSignup(properties: {
  source?: string;
  medium?: string;
  campaign?: string;
}) {
  posthog.capture("signup_completed", properties);
}
