# Portfolio visit email setup

Status: prepared locally, NOT deployed, email delivery NOT connected.

The portfolio stays a static HTML/CSS/JavaScript site. A separate Cloudflare Worker receives a small visit event and sends an email through Resend. React is not required.

## Accounts and activation

1. Create or sign into Cloudflare and Resend. Complete their account verification yourself. Start with the same Resend account email as the intended recipient, `haffizol.suf@gmail.com`, if testing with `onboarding@resend.dev`. Resend restricts that test sender to your own verified account address. A verified sending domain is needed for general production sending.
2. Create a Resend API key restricted to sending email. Store it only as the Worker secret `RESEND_API_KEY`; never in `dist`, a repository, chat, or a screenshot.
3. Set `NOTIFY_TO` as another Worker secret, with your notification address. `EMAIL_FROM` can initially use the test sender in `wrangler.jsonc`, subject to Resend's test restrictions; use a verified sender for production.
4. In `wrangler.jsonc`, replace `ALLOWED_ORIGINS` with the exact published website origin, such as `https://yourusername.github.io`. Include no path. For multiple origins, separate them with commas. The local preview intentionally sends no visit notifications.
5. Deploy `worker.mjs` with the `VISIT_LIMITER` binding specified in `wrangler.jsonc`. Use Cloudflare's official Wrangler CLI or dashboard; this project does not contain credentials. With Wrangler configured, run `wrangler secret put RESEND_API_KEY`, `wrangler secret put NOTIFY_TO`, then `wrangler deploy` from this directory. Enter secrets only into the CLI's protected prompt or Cloudflare dashboard.
6. In `dist/visitor-config.js`, set `endpoint` to the deployed Worker's HTTPS `/visit` URL and `enabled` to `true`. Publish the static portfolio only when ready.
7. Test from the allowed, published origin in a fresh browser tab/session. Confirm the email arrives. A reload in the same session should not email again. Test a second fresh session. Check Resend delivery logs if mail is delayed. Until this end-to-end test passes, notifications are not considered active.

## What is sent

The browser sends `event: portfolio_visit` and a random session event ID. The Worker emails the portfolio origin to your configured recipient; the email delivery time provides the notification time. It does not request visitor names, email addresses, precise location, referrer URLs, or account information. Cloudflare and Resend process requests as service providers. A footer disclosure appears when the client integration is enabled.

One event is sent per sessionStorage session (normally per browser tab). This is not an exact count of people: blocked scripts, closed tabs, disabled storage, bots, network failures and email limits affect delivery. The client suppresses local preview events. Resend's idempotency key prevents duplicate sends for the same event during its supported window. Worker throttling is best effort and per Cloudflare location, not a global daily spending cap. Origin checks and throttling reduce unwanted use but do not authenticate a public browser; set provider account limits appropriately.

No live email was sent during development. Worker tests use mocked fetch and rate limiting.

Official setup references:
- https://resend.com/docs/send-with-cloudflare-workers
- https://resend.com/docs/knowledge-base/403-error-resend-dev-domain
- https://developers.cloudflare.com/workers/configuration/secrets/
- https://developers.cloudflare.com/workers/runtime-apis/bindings/rate-limit/
