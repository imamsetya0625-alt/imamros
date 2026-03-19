# 🚀 Deploy ke Vercel - Cara Cepat

Karena Node.js installation bermasalah, gunakan cara ini:

## Opsi 1: GitHub + Vercel (Recommended)

1. **Push ke GitHub:**
```bash
git init
git add .
git commit -m "Initial commit - Game Top Up Hub"
git branch -M main
git remote add origin https://github.com/username/game-top-up-hub.git
git push -u origin main
```

2. **Deploy ke Vercel:**
- Buka [vercel.com](https://vercel.com)
- Login dengan GitHub
- Click "Add New Project"
- Pilih repository Anda
- Vercel akan auto-detect Next.js
- Click "Deploy"

## Opsi 2: Manual Install Node.js

1. Download Node.js dari [nodejs.org](https://nodejs.org)
2. Install manual (bukan silent install)
3. Restart PC
4. Jalankan: `deploy.bat`

## Project Structure
- `apps/web/` - Next.js app
- `vercel.json` - Vercel config
- `deploy.bat` - Windows deployment script

## Status: 🟡 Ready for Deploy

Project sudah siap! Tinggal push ke GitHub dan connect ke Vercel.
