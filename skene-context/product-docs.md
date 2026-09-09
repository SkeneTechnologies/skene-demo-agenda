# Agenda

Agenda is a B2B meeting scheduler. Sales and customer success teams share a booking link. Prospects pick a time. The workspace grows by inviting seats and converting a trial to a paid plan.

This repository is the Skene Cloud sample product. It is not a customer app. The code and schema are written so Analyze finds a familiar GTM funnel and a few honest gaps.

## Funnel

1. A visitor signs up or books a demo.
2. The workspace creates a meeting type.
3. First value is the first meeting booked on that link.
4. The team starts a trial or goes straight to checkout.
5. Paid workspaces invite teammates. Some cancel.

## Intentional gaps

- No `landing_page_viewed` event, so landing-to-signup conversion cannot be answered.
- Paid signup (`/signup/paid`) omits `campaign`.
- Checkout records `purchase_completed` without `plan` or `amount`, and does not fire `trial_started`.
- `demo_booked` has no matching purchase path.

## Events that are complete

- `signup_completed` on `/signup` includes `source`, `medium`, and `campaign`.
- `first_meeting_booked` is activation and includes `plan` and `source`.
- `invite_sent` includes `role`.
- `trial_started` on `/workspace/trial` includes `plan`.
- `subscription_cancelled` includes `plan`.
