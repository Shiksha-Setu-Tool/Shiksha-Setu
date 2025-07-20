#!/bin/bash

echo "🚀 Shiksha Setu Quick Deploy"
echo "============================="
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git repository not initialized. Please run:"
    echo "   git init"
    echo "   git add ."
    echo "   git commit -m 'Initial commit'"
    echo "   git remote add origin https://github.com/YOUR_USERNAME/shiksha-setu.git"
    echo "   git push -u origin main"
    echo ""
    exit 1
fi

# Check if Firebase config is set up
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

# Check if homepage is set in package.json
if grep -q "yourusername" package.json; then
    echo "⚠️  Homepage not set in package.json"
    echo "   Please update the homepage field with your GitHub Pages URL"
    echo "   Example: https://YOUR_USERNAME.github.io/shiksha-setu"
    echo ""
    read -p "Continue anyway? (y/n): " -n 1 -r
    echo ""
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

echo "📦 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix the errors and try again."
    exit 1
fi

echo "✅ Build successful!"

echo "🚀 Deploying to GitHub Pages..."
npm run deploy

if [ $? -ne 0 ]; then
    echo "❌ Deployment failed. Please check the error messages above."
    exit 1
fi

echo ""
echo "🎉 Deployment successful!"
echo ""
echo "📋 Next steps:"
echo "1. Go to your GitHub repository"
echo "2. Click Settings → Pages"
echo "3. Set source to 'Deploy from a branch'"
echo "4. Select 'gh-pages' branch and '/ (root)' folder"
echo "5. Click Save"
echo ""
echo "🌐 Your site will be available at:"
echo "   https://YOUR_USERNAME.github.io/shiksha-setu"
echo ""
echo "🔧 Don't forget to:"
echo "   • Add your domain to Firebase authorized domains"
echo "   • Test the authentication features"
echo "   • Verify curriculum creation works"
echo "" 