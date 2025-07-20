#!/usr/bin/env node

console.log('🚀 Shiksha Setu Firebase Setup');
console.log('================================\n');

console.log('📋 Follow these steps to set up Firebase:\n');

console.log('1️⃣  Create Firebase Project:');
console.log('   • Go to https://console.firebase.google.com/');
console.log('   • Click "Create a project"');
console.log('   • Name it "shiksha-setu" or your preferred name');
console.log('   • Enable Google Analytics (recommended)');
console.log('   • Click "Create project"\n');

console.log('2️⃣  Enable Authentication:');
console.log('   • In Firebase Console, go to "Authentication"');
console.log('   • Click "Get started"');
console.log('   • Go to "Sign-in method" tab');
console.log('   • Enable "Email/Password"');
console.log('   • Enable "Google"');
console.log('   • Add your domain to authorized domains\n');

console.log('3️⃣  Set up Firestore Database:');
console.log('   • Go to "Firestore Database"');
console.log('   • Click "Create database"');
console.log('   • Choose "Start in test mode"');
console.log('   • Select a location close to your users');
console.log('   • Click "Done"\n');

console.log('4️⃣  Get Firebase Config:');
console.log('   • Click gear icon → "Project settings"');
console.log('   • Scroll to "Your apps" section');
console.log('   • Click web icon (</>)');
console.log('   • Register app with nickname "shiksha-setu-web"');
console.log('   • Copy the config object\n');

console.log('5️⃣  Update src/firebase/config.ts with your config\n');

console.log('6️⃣  Set up Security Rules in Firestore:');
console.log('   • Go to Firestore → Rules');
console.log('   • Replace with the rules from FIREBASE_SETUP.md\n');

console.log('7️⃣  Deploy to GitHub Pages:');
console.log('   • Update homepage in package.json');
console.log('   • Add domain to Firebase authorized domains');
console.log('   • Run: npm run deploy\n');

console.log('✅ Setup complete! Your app will have:');
console.log('   • User authentication (email/password + Google)');
console.log('   • Curriculum creation and management');
console.log('   • Secure data storage');
console.log('   • User-specific data access\n');

console.log('🔗 Useful Links:');
console.log('   • Firebase Console: https://console.firebase.google.com/');
console.log('   • Firebase Docs: https://firebase.google.com/docs');
console.log('   • GitHub Pages: https://pages.github.com/\n');

console.log('📞 Need help? Check the FIREBASE_SETUP.md file for detailed instructions.'); 