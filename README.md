# Math Prep Course Landing Page

Static Next.js landing page for a Maths prep course aimed at students starting MYP5, DP, or CP1.

## Local development

```bash
npm install
npm run dev
```

## GitHub Pages

The project is configured to export a static site with:

- `output: "export"`
- automatic `basePath` handling for project pages
- a GitHub Actions deployment workflow in `.github/workflows/deploy.yml`

Push to `main` and enable GitHub Pages with **GitHub Actions** as the source.

## Signup handling

This site is static-host friendly. You can choose either:

- `NEXT_PUBLIC_SIGNUP_ENDPOINT` for a form service or serverless endpoint
- `NEXT_PUBLIC_CONTACT_EMAIL` for the email fallback used by the sign-up form

If no endpoint is configured, submitting the form opens a pre-filled email draft.

For GitHub Pages deployments through GitHub Actions, set those as repository
variables or update the workflow env block directly.
