# Deployment Guide for Shiksha Setu

This guide will help you deploy your Shiksha Setu application to GitHub Pages with Firebase integration.

## Prerequisites

- GitHub account
- Firebase project set up (follow FIREBASE_SETUP.md)
- Node.js and npm installed

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `shiksha-setu` (or your preferred name)
3. Make it public (required for GitHub Pages)
4. Don't initialize with README (we already have one)

## Step 2: Initialize Git and Push Code

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Shiksha Setu platform"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/shiksha-setu.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Configure Firebase

1. Follow the steps in `FIREBASE_SETUP.md` to set up Firebase
2. Update `src/firebase/config.ts` with your actual Firebase configuration
3. Add your GitHub Pages domain to Firebase authorized domains:
   - Go to Firebase Console → Authentication → Settings → Authorized domains
   - Add: `YOUR_USERNAME.github.io`

## Step 4: Update Package.json

Update the `homepage` field in `package.json`:

```json
{
  "homepage": "https://YOUR_USERNAME.github.io/shiksha-setu"
}
```

## Step 5: Deploy to GitHub Pages

```bash
# Install gh-pages if not already installed
npm install gh-pages --save-dev

# Deploy to GitHub Pages
npm run deploy
```

## Step 6: Enable GitHub Pages

1. Go to your GitHub repository
2. Click "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose "gh-pages" branch and "/ (root)" folder
6. Click "Save"

## Step 7: Test Your Application

1. Wait a few minutes for deployment to complete
2. Visit your site: `https://YOUR_USERNAME.github.io/shiksha-setu`
3. Test the authentication features:
   - Try creating an account with email/password
   - Try logging in with Google
   - Create a test curriculum
   - Verify data is saved in Firebase

## Troubleshooting

### Common Issues:

1. **"Firebase App not initialized"**
   - Check your Firebase configuration in `src/firebase/config.ts`
   - Ensure all values are correct

2. **"Permission denied" errors**
   - Verify Firestore security rules are set correctly
   - Check that authentication is working

3. **Google sign-in not working**
   - Ensure your domain is added to Firebase authorized domains
   - Check that Google OAuth is enabled in Firebase

4. **Build errors**
   - Run `npm run build` locally to check for errors
   - Ensure all dependencies are installed

### Debugging:

1. **Check browser console** for JavaScript errors
2. **Check Firebase Console** for authentication and database logs
3. **Verify network requests** in browser dev tools
4. **Test locally first** with `npm run dev`

## Security Considerations

1. **Firebase Security Rules**: Ensure your Firestore rules are properly configured
2. **API Keys**: Firebase config is safe to include in client-side code
3. **Domain Restrictions**: Use Firebase's authorized domains feature
4. **HTTPS**: GitHub Pages provides HTTPS by default

## Monitoring

1. **Firebase Analytics**: Monitor user engagement and errors
2. **Firebase Performance**: Track app performance
3. **GitHub Pages**: Monitor deployment status and site health

## Next Steps

After successful deployment:

1. **Custom Domain**: Set up a custom domain if desired
2. **Analytics**: Enable Google Analytics for better insights
3. **Backup**: Set up automated backups for your Firestore data
4. **Scaling**: Consider Firebase's scaling options as your user base grows

## Support

If you encounter issues:

1. Check the Firebase Console for error logs
2. Review the browser console for JavaScript errors
3. Verify all configuration values are correct
4. Test authentication and database operations locally first

Your Shiksha Setu platform should now be live and fully functional with user authentication and curriculum management! 