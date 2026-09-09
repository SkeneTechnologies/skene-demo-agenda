# Harbor

Private sample product for [Skene Cloud](https://github.com/SkeneTechnologies/skene-dashboard) onboarding.

Harbor is a tiny B2B meeting scheduler. GTM users should recognize the motion: workspace signup, first booking, trial, paid seats, and cancel.

The dashboard analyzes this repository. Edit the captures and migrations here when the sample tour needs a clearer gap or a cleaner path.

## What Analyze should find

| Event | Where | Notes |
| --- | --- | --- |
| `signup_completed` | `lib/analytics.ts`, `/signup` | Full UTM on the organic path |
| `signup_completed` | `/signup/paid` | Missing `campaign` |
| `demo_booked` | `/` | No purchase follows |
| `meeting_type_created` | `/workspace` | Setup, not first value |
| `first_meeting_booked` | `/workspace/book` | Activation |
| `invite_sent` | `/workspace/invite` | Expansion with `role` |
| `trial_started` | `/workspace/trial` | Missing on checkout |
| `purchase_completed` | `/workspace/checkout` | No `plan` or `amount` |
| `subscription_cancelled` | `/workspace/settings` | Churn with `plan` |

Schema lives in `supabase/migrations`. Journey copy lives in `skene-context/`.

## Run locally

```bash
npm install
npm run dev
```

Nothing is sent to PostHog. `lib/posthog.ts` logs to the browser console.
