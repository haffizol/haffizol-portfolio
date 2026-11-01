# Muhammad Haffizol Portfolio

Engineering portfolio covering manufacturing software, industrial IoT, applied AI, robotics and simulation.

## Deploy with GitHub Pages

1. Open this repository on GitHub and select **Settings → Pages**.
2. Under **Build and deployment → Source**, select **Deploy from a branch**.
3. Select branch **main** and folder **/docs**, then **Save**.
4. Wait for the Pages deployment to finish in the **Actions** tab. GitHub will show the published URL in Pages settings.

Expected URL after deployment: https://haffizol.github.io/haffizol-portfolio/

The expected URL is not proof that deployment is active. Use the URL shown by GitHub after its deployment completes.

## Edit the website

The website is in `docs/`. It uses plain HTML, CSS and JavaScript; no React conversion, package installation or build command is required.

- `docs/index.html`: homepage, project groups, experience, education and contact.
- `docs/projects.js`: project descriptions, contributions, status, metrics and sources.
- `docs/script.js`: cards, search, filters and project dialogs.
- `docs/styles.css` and `docs/aesthetic-adjustments.css`: visual design.
- `docs/assets/`: photographs, supplied logos, posters and downloadable resume.

Push changes to `main` to update the site after Pages is configured.

## Visitor email notifications

The browser integration is **enabled** in `docs/visitor-config.js` and connected to the deployed Google Apps Script web app.

The selected service is now Google Apps Script. Server code and setup instructions are in [`notifications/apps-script/`](notifications/apps-script/README.md). The previous Cloudflare/Resend implementation is retained as an unused alternative.

The Apps Script recipient is fixed to the portfolio owner's email. It limits notifications to 50 per Malaysia calendar day and 5 per minute. No email passwords or API keys are stored in the website. The browser sends one event attempt per tab/session; email delivery is verified in Apps Script and the owner's inbox rather than through the opaque cross-origin browser response.

## Local preview

From the repository folder, with Python installed:

```sh
python -m http.server 8766 --bind 127.0.0.1 --directory docs
```

Then open http://127.0.0.1:8766/ . Local preview does not send visitor notifications.
