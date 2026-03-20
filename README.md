
# Aria Firmansyah Portfolio

Personal portfolio website by Aria Firmansyah, built with React, TypeScript, Vite, and Tailwind CSS.

Live site: https://ariafirmansyah.dev/

## Tech stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Web3Forms (contact form backend)

## Local development

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
```

Get a free access key from https://web3forms.com.

Start development server:

```bash
npm run dev
```

## Build

Create a production build:

```bash
npm run build
```

Output directory: `dist/`

## Contact form

The contact form is implemented in `src/app/components/Contact.tsx` and submits data to:

- `https://api.web3forms.com/submit`

Included protections:

- Honeypot field (bot trap)
- 15-second submit cooldown
- User feedback states for loading, success, and error

## SEO and indexing

The project includes baseline SEO setup:

- Metadata in `index.html` (canonical, Open Graph, Twitter card, JSON-LD)
- `public/robots.txt`
- `public/sitemap.xml`
- Social preview image at `public/og-image.png`

Production domain references use:

- `https://ariafirmansyah.dev/`

## Ownership and copyright

This project, including source code, design customizations, written content, and assets created for this portfolio, is the original work of Aria Firmansyah.

Copyright (c) 2026 Aria Firmansyah. All rights reserved.

No part of this project may be copied, reproduced, redistributed, republished, or used for commercial purposes without prior written permission from the owner.

Third-party libraries and tools used in this project remain subject to their respective licenses.
  