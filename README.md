
  # Portfolio creation

  This is a code bundle for Portfolio creation. The original project is available at https://www.figma.com/design/k0uecGaL2pLgIvwXMIRpvn/Portfolio-creation.

  ## Running the code

  Run `npm i` to install the dependencies.

  Create `.env` in the project root and add:

  `VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key`

  You can get the key for free at https://web3forms.com.

  Run `npm run dev` to start the development server.

  ## Contact form integration

  The contact form in `src/app/components/Contact.tsx` is integrated with Web3Forms.

  How it works:
  - On submit, the form sends a POST request to `https://api.web3forms.com/submit`.
  - Includes anti-spam protection with a hidden honeypot field and 15-second submit cooldown.
  - If `VITE_WEB3FORMS_ACCESS_KEY` is missing, it shows a configuration error message.
  - If the request succeeds, it shows success feedback and resets the form.
  - If it fails, it shows an error message and asks users to email directly.

  ## Build for deployment

  Run `npm run build` to generate production files in `dist/`.

  ## SEO and indexing setup

  This project includes SEO baseline metadata in `index.html` and crawler files in `public/robots.txt` and `public/sitemap.xml`.

  Production domain is configured as `https://ariafirmansyah.dev/` in:
  - `index.html` (`canonical`, `og:url`, `og:image`, `twitter:image`, JSON-LD `url`)
  - `public/robots.txt` (Sitemap URL)
  - `public/sitemap.xml` (`loc`)

  Next SEO step: add a real image file at `/og-image.jpg` so social preview cards show correctly.
  