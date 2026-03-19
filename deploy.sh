#!/bin/bash

echo "🚀 Deploying Game Top Up Hub to Vercel..."

# Install dependencies jika belum ada
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    pnpm install
fi

# Build project
echo "🔨 Building project..."
pnpm run build

# Deploy ke Vercel
echo "🌐 Deploying to Vercel..."
vercel --prod

echo "✅ Deployment complete!"
