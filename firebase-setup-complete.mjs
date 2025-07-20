#!/usr/bin/env node

import fs from 'fs';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

console.log('🚀 Complete Firebase Setup for Shiksha Setu');
console.log('===========================================\n');

console.log('📋 This script will guide you through the complete Firebase setup process.\n');

async function setupFirebase() {
  console.log('1️⃣  FIREBASE PROJECT CREATION');
  console.log('   • Go to: https://console.firebase.google.com/');
  console.log('   • Click "Create a project"');
  console.log('   • Name: "shiksha-setu" (or your preferred name)');
  console.log('   • Enable Google Analytics: Yes (recommended)');
  console.log('   • Click "Create project"\n');
  
  await question('Press Enter when you have created the Firebase project...');

  console.log('2️⃣  ENABLE AUTHENTICATION');
  console.log('   • In Firebase Console, click "Authentication" in left sidebar');
  console.log('   • Click "Get started"');
  console.log('   • Go to "Sign-in method" tab');
  console.log('   • Enable "Email/Password": Click "Enable" → Save');
  console.log('   • Enable "Google": Click "Enable" → Add authorized domain → Save\n');
  
  await question('Press Enter when you have enabled authentication...');

  console.log('3️⃣  CREATE FIRESTORE DATABASE');
  console.log('   • Click "Firestore Database" in left sidebar');
  console.log('   • Click "Create database"');
  console.log('   • Choose "Start in test mode"');
  console.log('   • Select location: Choose closest to your users');
  console.log('   • Click "Done"\n');
  
  await question('Press Enter when you have created the Firestore database...');

  console.log('4️⃣  GET FIREBASE CONFIGURATION');
  console.log('   • Click gear icon → "Project settings"');
  console.log('   • Scroll to "Your apps" section');
  console.log('   • Click web icon (</>)');
  console.log('   • App nickname: "shiksha-setu-web"');
  console.log('   • Click "Register app"');
  console.log('   • Copy the entire config object\n');

  const apiKey = await question('Enter your API Key: ');
  const authDomain = await question('Enter your Auth Domain: ');
  const projectId = await question('Enter your Project ID: ');
  const storageBucket = await question('Enter your Storage Bucket: ');
  const messagingSenderId = await question('Enter your Messaging Sender ID: ');
  const appId = await question('Enter your App ID: ');

  console.log('\n5️⃣  UPDATING FIREBASE CONFIG...');

  const configContent = `import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "${apiKey}",
  authDomain: "${authDomain}",
  projectId: "${projectId}",
  storageBucket: "${storageBucket}",
  messagingSenderId: "${messagingSenderId}",
  appId: "${appId}"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;
`;

  try {
    fs.writeFileSync('src/firebase/config.ts', configContent);
    console.log('✅ Firebase config updated successfully!\n');
  } catch (error) {
    console.error('❌ Error updating config:', error.message);
    return;
  }

  console.log('6️⃣  SET UP SECURITY RULES');
  console.log('   • Go to Firestore Database → Rules');
  console.log('   • Replace the rules with:\n');
  
  const securityRules = `rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only read/write their own curriculums
    match /curriculums/{curriculumId} {
      allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
      allow create: if request.auth != null && request.auth.uid == request.resource.data.userId;
    }
  }
}`;
  
  console.log(securityRules);
  console.log('\n   • Click "Publish"\n');
  
  await question('Press Enter when you have updated the security rules...');

  console.log('7️⃣  ADD AUTHORIZED DOMAINS');
  console.log('   • Go to Authentication → Settings');
  console.log('   • Scroll to "Authorized domains"');
  console.log('   • Add: localhost');
  console.log('   • Add: yourusername.github.io (replace with your actual GitHub username)\n');
  
  await question('Press Enter when you have added the authorized domains...');

  console.log('8️⃣  TESTING THE SETUP');
  console.log('   • Your development server should be running at: http://localhost:5173/shiksha-setu/');
  console.log('   • Try clicking "Login" in the header');
  console.log('   • Test both email/password and Google sign-in');
  console.log('   • Create a test curriculum in the dashboard\n');

  console.log('🎉 FIREBASE SETUP COMPLETE!');
  console.log('===========================\n');
  
  console.log('✅ What you now have:');
  console.log('   • User authentication (email/password + Google)');
  console.log('   • Secure database for curriculum storage');
  console.log('   • User-specific data access');
  console.log('   • Production-ready configuration\n');
  
  console.log('🚀 Next steps:');
  console.log('   • Test all features locally');
  console.log('   • Deploy to GitHub Pages when ready');
  console.log('   • Monitor usage in Firebase Console\n');
  
  console.log('📞 Need help?');
  console.log('   • Check browser console for errors');
  console.log('   • Verify all config values are correct');
  console.log('   • Ensure authorized domains are set properly');

  rl.close();
}

setupFirebase().catch(console.error); 