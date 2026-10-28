# SmartTech

SmartTech is a responsive technology solutions company website for electronic manufacturing, smart home systems, industrial automation, and PCB manufacturing.

## What is included

- Responsive marketing site with hero, services, process, company story, contact, and footer sections.
- Hero section with muted, looping engineering video and an “Engineering excellence in motion” caption.
- Contact enquiry modal with client-side validation.
- Built-in **Admin** content manager (lock icon in the header) for company name, hero copy, hero video URL, contact details, and address.
- Content is persisted in browser `localStorage`, so the static site remains free to host on GitHub Pages.
- Existing GitHub Actions workflow builds and deploys the Vite output to GitHub Pages on pushes to `main`.

## Run locally

```bash
npm install
npm start
```

Open `http://localhost:3000`.

## Production checks

```bash
npm run build
npm test
```

## GitHub Pages hosting

1. Push the repository to the GitHub account that should own the site.
2. In **Settings → Pages**, choose **GitHub Actions** as the source.
3. Push to `main`; `.github/workflows/attest-and-deploy.yml` will build and deploy the site.

GitHub Pages is a free static host. To move maintenance to another GitHub account, transfer the repository from **Settings → General → Transfer ownership**, or fork it into the new account and enable Pages there. The new account must also have permission to change the repository’s Actions and Pages settings.

## Admin and database note

The included editor is intentionally browser-local so it works without paid infrastructure or exposed credentials. It is not a shared multi-user CMS: each browser has its own saved values. For shared editing, authentication, enquiries, and a real database, connect the admin form to a hosted backend such as Supabase or Firebase and protect it with GitHub/OAuth authentication.
