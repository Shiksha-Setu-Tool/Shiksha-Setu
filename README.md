# Shiksha Setu - Bridging Educational Gaps

A modern, responsive web application for the Shiksha Setu platform - an educational technology solution designed to bridge learning gaps through personalized curriculum and AI-powered insights.

## 🎯 About

Shiksha Setu empowers tutors to create personalized learning experiences that help students bridge the gap between where they are and where they need to be. The platform combines human expertise with artificial intelligence to deliver adaptive, effective education.

## ✨ Features

### 🌐 Public Website
- **Landing Page**: Beautiful, informative homepage showcasing the platform
- **Features Section**: Detailed overview of platform capabilities
- **About Section**: Mission and approach information
- **Contact Information**: Easy access to support details
- **No Login Required**: Anyone can explore the platform features

### 🔐 Authentication System
- **Email/Password Registration & Login**: Secure user account creation and authentication
- **Google OAuth Integration**: One-click login with Google accounts
- **User Session Management**: Persistent login state across browser sessions
- **Secure Logout**: Proper session termination
- **Optional Login**: Users can explore the site without creating an account

### 📚 Curriculum Management (Login Required)
- **Create Curriculums**: Build personalized learning paths with title, subject, grade, and description
- **View Saved Curriculums**: Access all your created curriculums in one place
- **Delete Curriculums**: Remove unwanted or outdated curriculums
- **User-Specific Data**: Each user can only access their own curriculums

### 🛠 Platform Features

> Note: These describe the platform vision presented on the landing page. Currently only curriculum creation, viewing, and deletion are implemented; AI insights, progress tracking, content generation, and collaboration tools are not yet built.

- **Personalized Curriculum**: Create tailored learning paths that adapt to each student's unique needs
- **AI-Powered Insights**: Leverage artificial intelligence to identify learning gaps and suggest improvements
- **Progress Tracking**: Monitor student advancement with detailed analytics and reporting
- **Flexible Learning**: Support both in-person and remote tutoring
- **Content Generation**: AI-assisted creation of engaging educational materials
- **Collaborative Tools**: Seamless communication between tutors, students, and parents

## 🚀 Quick Start

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn
- GitHub account (for deployment)
- Firebase account (for backend services)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Shiksha-Setu-Tool/Shiksha-Setu.git
cd Shiksha-Setu
```

2. Install dependencies:
```bash
npm install
```

3. Set up Firebase (required for authentication and data storage):
```bash
node setup-firebase.mjs
```
Then follow the detailed guide in `FIREBASE_SETUP.md`

4. Update Firebase configuration:
   - Copy your Firebase config from Firebase Console
   - Update `src/firebase/config.ts` with your credentials

5. Start the development server:
```bash
npm run dev
```

6. Open your browser and navigate to `http://localhost:5173`

### Deployment

1. **Quick Deploy** (recommended):
```bash
./quick-deploy.sh
```

2. **Manual Deploy**:
   - Follow the detailed guide in `DEPLOYMENT.md`
   - Or run: `npm run deploy`

## 🛠 Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: CSS3 with modern design patterns
- **Authentication**: Firebase Authentication
- **Database**: Firebase Firestore
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
shiksha-setu/
├── src/
│   ├── components/     # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── About.tsx
│   │   ├── Footer.tsx
│   │   ├── Login.tsx
│   │   └── Dashboard.tsx
│   ├── contexts/       # React contexts
│   │   └── AuthContext.tsx
│   ├── firebase/       # Firebase configuration
│   │   ├── config.ts
│   │   └── config.example.ts
│   ├── App.tsx         # Main App component
│   ├── App.css         # App-specific styles
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles
├── public/             # Public assets
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
├── FIREBASE_SETUP.md   # Firebase setup guide
├── DEPLOYMENT.md       # Deployment guide
├── setup-firebase.mjs  # Firebase setup script
├── quick-deploy.sh     # Quick deployment script
└── README.md           # Project documentation
```

## 🎨 Design Features

- **Modern UI**: Clean, professional design with gradient backgrounds
- **Responsive**: Fully responsive design that works on all devices
- **Accessible**: Built with accessibility best practices
- **Performance**: Optimized for fast loading and smooth interactions
- **Glassmorphism**: Modern glass-like effects for visual appeal
- **Smooth Scrolling**: Enhanced navigation experience

## 🧭 Navigation Flow

1. **Home Page**: Public landing page with platform overview
2. **Features**: Detailed feature showcase (no login required)
3. **About**: Mission and company information (no login required)
4. **Login**: Optional authentication for accessing dashboard
5. **Dashboard**: Private area for curriculum management (login required)

## 🔐 Authentication Flow

1. **Public Access**: Users can explore the entire website without logging in
2. **Optional Login**: Users can choose to create accounts for curriculum management
3. **Registration**: Users can create accounts with email/password or Google
4. **Dashboard Access**: Authenticated users can access curriculum management
5. **Data Security**: Users can only access their own curriculums

## 📊 Data Management

- **Firebase Firestore**: NoSQL database for curriculum storage
- **User-Specific Data**: Each user's curriculums are isolated
- **On-Load Fetching**: Curriculums are loaded from Firestore when the dashboard opens (no real-time sync)
- **Secure Access**: Firebase security rules protect user data

## 🔧 Configuration

### Firebase Setup
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication (Email/Password + Google)
3. Create Firestore Database
4. Update `src/firebase/config.ts` with your credentials
5. Set up security rules in Firestore

### GitHub Pages Setup
1. Update `homepage` field in `package.json`
2. Add your domain to Firebase authorized domains
3. Deploy with `npm run deploy`

## 🚀 Deployment

### GitHub Pages
- Automatic deployment from `gh-pages` branch
- HTTPS enabled by default
- Custom domain support available

### Firebase Integration
- Authentication works seamlessly with GitHub Pages
- Firestore database accessible from deployed site

## 🔒 Security

- **Firebase Security Rules**: Protect user data at database level
- **Authentication Required**: Only dashboard operations require login
- **Domain Restrictions**: Firebase authorized domains prevent unauthorized access
- **HTTPS Only**: Secure connections for all data transmission

## 📈 Monitoring & Analytics

Not currently integrated: the app only uses Firebase Authentication and Firestore (no Firebase Analytics, Crashlytics, or Performance Monitoring).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 📞 Support

- **Documentation**: Check `FIREBASE_SETUP.md` and `DEPLOYMENT.md`
- **Issues**: Report bugs and feature requests via GitHub Issues
- **Firebase Support**: [Firebase Documentation](https://firebase.google.com/docs)
- **GitHub Pages**: [GitHub Pages Documentation](https://pages.github.com/)

## 🎯 Roadmap

- [ ] Curriculum sharing between users
- [ ] Advanced progress tracking
- [ ] Integration with external educational APIs
- [ ] File upload for curriculum materials
- [ ] Mobile app development
- [ ] Advanced analytics dashboard

---

Built with ❤️ for better education 