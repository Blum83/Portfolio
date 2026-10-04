# Portfolio

Personal site of Valentyn Korobeinikov, AI-Augmented QA Engineer.
Next.js 14 (static export), Tailwind CSS, framer-motion.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in out/
npm start          # serves out/ on $PORT (default 3000)
```

## Deploy

### Vercel
Import the repository. Vercel detects Next.js and uses `next build`; the
static export is served from its CDN. No extra settings needed.

### Railway
Create a service from the repository. Railway runs `npm run build`, then
`npm start`, which serves `out/` with `serve` on the `PORT` Railway provides.
Generate a domain under Settings → Networking.

## CV
The "Download CV" button links to `public/cv/Valentyn_Korobeinikov_CV.pdf`.
