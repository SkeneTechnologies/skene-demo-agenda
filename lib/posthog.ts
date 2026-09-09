/**
 * Local PostHog stand-in so capture() calls are real code Skene can scan.
 * Agenda does not send events anywhere.
 */
export const posthog = {
  capture(event: string, properties?: Record<string, unknown>) {
    if (typeof window !== "undefined") {
      console.info("[agenda]", event, properties ?? {});
    }
  },
};
