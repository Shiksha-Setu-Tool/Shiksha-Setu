#!/bin/bash
# Builds locally to catch errors, then pushes main. The GitHub Actions workflow
# (.github/workflows/deploy.yml) builds and deploys every push to main to GitHub Pages.

echo "🚀 Shiksha Setu Quick Deploy"
echo "============================="
echo ""

if [ ! -d ".git" ]; then
    echo "❌ Not a git repository. Clone it with:"
    echo "   git clone https://github.com/Shiksha-Setu-Tool/Shiksha-Setu.git"
    exit 1
fi

if grep -q "your-api-key" src/firebase/config.ts; then
    echo "⚠️  Firebase configuration not set up yet."
    echo "   Please update src/firebase/config.ts with your Firebase credentials"
    echo "   Follow the steps in FIREBASE_SETUP.md"
    echo ""
    read -p "Continue anyway? (y/n): " -n 1 -r
    echo ""
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

echo "📦 Building project..."
if ! npm run build; then
    echo "❌ Build failed. Please fix the errors and try again."
    exit 1
fi
echo "✅ Build successful!"

echo "🚀 Pushing main (GitHub Actions deploys it to GitHub Pages)..."
if ! git push origin main; then
    echo "❌ Push failed. Please check the error messages above."
    exit 1
fi

echo ""
echo "🎉 Pushed! Track the deploy at:"
echo "   https://github.com/Shiksha-Setu-Tool/Shiksha-Setu/actions"
echo ""
echo "🌐 Your site will be available at:"
echo "   https://shiksha-setu-tool.github.io/Shiksha-Setu/"
echo ""
