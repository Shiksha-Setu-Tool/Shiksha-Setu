# Firebase Setup Guide for Shiksha Setu

This guide will help you set up Firebase Authentication and Firestore Database for the Shiksha Setu platform.

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter a project name (e.g., "shiksha-setu")
4. Choose whether to enable Google Analytics (recommended)
5. Click "Create project"

## Step 2: Enable Authentication

1. In your Firebase project, go to "Authentication" in the left sidebar
2. Click "Get started"
3. Go to the "Sign-in method" tab
4. Enable the following providers:
   - **Email/Password**: Click "Enable" and save
   - **Google**: Click "Enable", add your authorized domain, and save

## Step 3: Set up Firestore Database

1. In your Firebase project, go to "Firestore Database" in the left sidebar
2. Click "Create database"
3. Choose "Start in test mode" (you can add security rules later)
4. Select a location for your database (choose the closest to your users)
5. Click "Done"

## Step 4: Get Firebase Configuration

1. In your Firebase project, click the gear icon next to "Project Overview"
2. Select "Project settings"
3. Scroll down to "Your apps" section
4. Click the web icon (</>) to add a web app
5. Enter an app nickname (e.g., "shiksha-setu-web")
6. Click "Register app"
7. Copy the Firebase configuration object

## Step 5: Update Firebase Config

1. Open `src/firebase/config.ts`
2. Replace the placeholder values with your actual Firebase configuration:

```typescript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};
```

## Step 6: Set up Security Rules (Optional but Recommended)

1. In Firestore Database, go to the "Rules" tab
2. Replace the default rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only read/write their own curriculums
    match /curriculums/{curriculumId} {
      allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
      allow create: if request.auth != null && request.auth.uid == request.resource.data.userId;
    }
  }
}
```

## Step 7: Deploy to GitHub Pages

1. Update the `homepage` field in `package.json` with your GitHub Pages URL
2. Add your Firebase project domain to authorized domains in Firebase Authentication
3. Deploy your app:
   ```bash
   npm run deploy
   ```

## Features Included

✅ **Authentication Methods:**
- Email/Password signup and login
- Google OAuth login
- Secure logout functionality

✅ **User Dashboard:**
- Create new curriculums
- View saved curriculums
- Delete curriculums
- User-specific data storage

✅ **Data Persistence:**
- Curriculums saved to Firestore
- User authentication state maintained
- Secure data access rules

## Security Features

- User authentication required for all operations
- Users can only access their own curriculums
- Secure Firebase configuration
- Protected routes and components

## Troubleshooting

**Common Issues:**
1. **"Firebase App not initialized"**: Check your Firebase config values
2. **"Permission denied"**: Ensure Firestore security rules are set correctly
3. **"Google sign-in not working"**: Verify Google OAuth is enabled and domain is authorized

**Testing:**
- Test authentication in development mode first
- Verify data is being saved to Firestore
- Check browser console for any errors

## Next Steps

After setup, you can:
1. Add more curriculum fields (topics, lessons, etc.)
2. Implement curriculum sharing between users
3. Add progress tracking features
4. Integrate with external educational APIs
5. Add file upload capabilities for curriculum materials

## Support

If you encounter issues:
1. Check Firebase Console for error logs
2. Verify all configuration values are correct
3. Ensure your domain is authorized in Firebase Authentication
4. Check browser console for JavaScript errors 