@echo off
echo 🚀 Deploying Game Top Up Hub to Vercel...

REM Install dependencies jika belum ada
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    pnpm install
)

REM Build project
echo 🔨 Building project...
pnpm run build

REM Deploy ke Vercel
echo 🌐 Deploying to Vercel...
vercel --prod

echo ✅ Deployment complete!
pause
