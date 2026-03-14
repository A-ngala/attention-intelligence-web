# Attention Intelligence - Landing Page

Marketing website for Attention Intelligence Chrome extension.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Hosting:** Vercel
- **Language:** TypeScript

## Getting Started

### Install dependencies:
```bash
npm install
```

### Run development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for production:
```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel:

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow prompts

### Or deploy via Vercel dashboard:

1. Push to GitHub
2. Import repository in Vercel
3. Auto-deploy on push

## Environment Variables

None needed. Completely static site.

## Pages

- `/` - Landing page
- `/privacy` - Privacy policy (required for Chrome Web Store)

## Customization

### Update Chrome Web Store link:
Search for `href="#"` in `app/page.tsx` and replace with actual store URL after submission.

### Update launch date:
Search for "March 20, 2026" and update if needed.

### Colors:
- Primary: `#e63946` (red)
- Background: `#000000` (black)
- Edit in `tailwind.config.ts`

## Privacy Policy

Required for Chrome Web Store submission. URL will be:
- Development: `http://localhost:3000/privacy`
- Production: `https://your-domain.com/privacy`

Copy production URL for Chrome Web Store listing.

## Contact

- Email: alwaysngala@gmail.com
- Developer: AGN, Nairobi Kenya

## License

© 2026 AGN. All rights reserved.
