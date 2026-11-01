# Google Apps Script visitor emails

This replaces the optional Cloudflare/Resend service. Do not deploy both services.

Configured on 1 November 2026 under `haffizol.suf@gmail.com`, running as the owner with Anyone access. Project: https://script.google.com/home/projects/1grnf9bk08Vv9mo1vj_-nY1SojxQn0jQlX9N2zo2rvmXZQ81VIWh6n8FU/edit . The public deployment URL is in `docs/visitor-config.js`.

## Setup

1. Sign into Google using the account that should send the emails. Create a standalone project at https://script.google.com/ and name it **Haffizol Portfolio Visit Notifications**.
2. Replace the default `Code.gs` contents with this folder's `Code.gs`. Save.
3. Select `sendTestEmail` and click Run. Review Google's authorization screen yourself: the script needs permission to send email. It does not need to read your inbox. Confirm that the test notification reaches `haffizol.suf@gmail.com`.
4. Select **Deploy → New deployment → Web app**. Execute as **Me** and set access to **Anyone**, so portfolio visitors do not have to sign into Google. Confirm this deployment after reviewing the fixed recipient and limits. Copy the `/exec` Web app URL, not a `/dev` testing URL.
5. Put that URL into `docs/visitor-config.js` as `endpoint`, set `provider: 'apps-script'` and `enabled: true`, then push to GitHub. In the earlier local project the same configuration file is `dist/visitor-config.js`.
6. Open the deployed portfolio in a new browser session and confirm an actual notification arrives. A refresh should not email again. The web client cannot read Apps Script's cross-origin response, so a successful browser dispatch alone does not verify email delivery.

## Behaviour and limits

- One email attempt per browser tab/session; this is not a unique-person counter.
- The footer's **Ignore this browser** button saves an exclusion in local storage and syncs it across open tabs. It persists until reversed or site data is cleared. Use `https://haffizol.github.io/haffizol-portfolio/?ignore-visits=1` on each personal browser/device to enable the exclusion before a visit event is sent. This link should not be shared as the normal portfolio link.
- Fixed recipient: `haffizol.suf@gmail.com`. Requests cannot choose a recipient, subject or email body.
- Maximum 50 notifications per Malaysia calendar day and 5 per minute across the script. These application limits prevent unlimited mail and may suppress visits. Google's own quotas also apply.
- A script lock serializes checks and sending. Duplicate event IDs within a Malaysia calendar day are ignored; the state is reset on the next day.
- GET requests only return service health; they never send email.
- Only a random event ID and fixed website URL are sent. No visitor name, email, IP, geolocation or referrer is collected by this code. Google processes the requests as the service provider.
- The endpoint must be public and is visible in website source. The submitted site field is a validation value, not origin authentication. Anyone can imitate a browser event; fixed destinations and application limits constrain abuse. A footer notice describes the notification.
- To disable, set `enabled: false` and push. To stop the endpoint too, archive the web app deployment in Apps Script.
- When changing the server script, update the deployment to a new version; saving code alone does not update the deployed version.

Official references:
- https://developers.google.com/apps-script/guides/web
- https://developers.google.com/apps-script/reference/mail/mail-app
- https://developers.google.com/apps-script/guides/services/quotas

No passwords or API keys are required in the portfolio repository.
