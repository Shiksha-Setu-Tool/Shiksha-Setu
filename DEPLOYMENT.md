# Deployment Guide for Shiksha Setu

This guide will help you deploy your Shiksha Setu application to GitHub Pages with Firebase integration.

## Prerequisites

- GitHub account
- Firebase project set up (follow FIREBASE_SETUP.md)
- Node.js and npm installed

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `Shiksha-Setu` (the Vite `base` in `vite.config.ts` is hardcoded to `/Shiksha-Setu/`)
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
git remote add origin https://github.com/Shiksha-Setu-Tool/Shiksha-Setu.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Configure Firebase

1. Follow the steps in `FIREBASE_SETUP.md` to set up Firebase
2. Update `src/firebase/config.ts` with your actual Firebase configuration
3. Add your GitHub Pages domain to Firebase authorized domains:
   - Go to Firebase Console → Authentication → Settings → Authorized domains
   - Add: `shiksha-setu-tool.github.io`

## Step 4: Update Package.json

The `homepage` field in `package.json` is already set:

```json
{
  "homepage": "https://shiksha-setu-tool.github.io/Shiksha-Setu"
}
```

## Step 5: Enable GitHub Pages

1. Go to your GitHub repository
2. Click "Settings" tab
3. Open the "Pages" section
4. Under "Source", select "GitHub Actions"

## Step 6: Deploy

Deployment is automatic: the workflow in `.github/workflows/deploy.yml` runs `npm ci && npm run build` and publishes `dist/` to GitHub Pages on every push to `main`. You can also trigger it manually from the Actions tab ("Deploy to GitHub Pages" → "Run workflow"), or run `./quick-deploy.sh`, which builds locally and then pushes `main`.

## Step 7: Test Your Application

1. Wait a few minutes for deployment to complete
2. Visit your site: `https://shiksha-setu-tool.github.io/Shiksha-Setu/`
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
3. **GitHub Pages**: Monitor deployment status in the repository's Actions tab

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