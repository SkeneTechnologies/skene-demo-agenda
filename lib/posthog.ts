/**
 * Local PostHog stand-in so capture() calls are real code Skene can scan.
 * Harbor does not send events anywhere.
 */
export const posthog = {
  capture(event: string, properties?: Record<string, unknown>) {
    if (typeof window !== "undefined") {
      console.info("[harbor]", event, properties ?? {});
    }
  },
};
