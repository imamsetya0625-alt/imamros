# Game Top Up Hub

Platform top up game terpercaya untuk berbagai game populer.

## Cara Deploy ke Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login ke Vercel:
```bash
vercel login
```

3. Deploy project:
```bash
vercel
```

## Struktur Project

- `apps/web/` - Aplikasi Next.js utama
- `lib/` - Library packages yang reusable
- `scripts/` - Build scripts dan utilities

## Dependencies

Project ini menggunakan pnpm sebagai package manager. Pastikan pnpm sudah terinstall:
```bash
npm install -g pnpm
```

## Development

Install dependencies:
```bash
pnpm install
```

Jalankan development server:
```bash
pnpm run dev
```

Build untuk production:
```bash
pnpm run build
```
