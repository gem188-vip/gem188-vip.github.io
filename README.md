# GEM188 Catalog UI

Modern dark-luxury game catalog interface built with React + Vite.

## Features

- Responsive yellow category navigation
- Header actions containing only Login and Daftar buttons
- Auto-rotating promotional slider
- Searchable/filterable game catalog
- Featured cards for Gates Of Olympus 1000 and Maxwin 3000.000
- Jawa Togel cultural section with CSS-based wayang and lantern ornaments
- Trust bar for banks, e-wallets, and USDT
- Floating Live Chat 24/7 and APK actions
- Mobile navigation and reduced-motion accessibility support

## External Login and Registration Links

Edit these constants in `src/main.jsx`:

```javascript
const LOGIN_URL = 'https://your-domain.com/login';
const REGISTER_URL = 'https://your-domain.com/register';
```

Both buttons open the external destination in a new browser tab.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

The output will be generated in `dist/`.

## Deploy to GitHub Pages

Workflow deployment sudah tersedia di `.github/workflows/deploy-pages.yml`.

1. Push project ke branch `main`.
2. Buka **Settings → Pages** pada repository GitHub.
3. Pilih **Source: GitHub Actions**.
4. Workflow akan menjalankan build dan deployment secara otomatis.

## Notes

- Replace placeholder action links such as `#apk` and `#live-chat` with production URLs.
- Replace text-based payment marks with approved official brand assets before production.
- Ensure the implementation complies with local licensing, age-gating, advertising, and responsible-play requirements.
