# Shiksha Setu 🎓

**Bridging Educational Gaps with Personalized Learning**

Shiksha Setu is a modern educational platform that empowers tutors to create personalized learning experiences, helping students bridge the gap between where they are and where they need to be.

## 🌐 Live Demo

**[Visit Shiksha Setu](https://shiksha-setu-tool.github.io/Shiksha-Setu/)**

## ✨ Features

- **Personalized Learning**: AI-powered insights that adapt to each student's unique needs
- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **User Authentication**: Secure login/signup with Firebase Authentication
- **Real-time Database**: Cloud Firestore for data persistence
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Component-based Architecture**: Built with React and TypeScript for maintainability

## 🚀 Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: CSS3 with modern design patterns
- **Authentication**: Firebase Authentication
- **Database**: Cloud Firestore
- **Deployment**: GitHub Pages
- **Build Tool**: Vite

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shiksha-Setu-Tool/Shiksha-Setu.git
   cd Shiksha-Setu
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication and Firestore
   - Copy your Firebase config to `src/firebase/config.ts`

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── About.tsx       # About section
│   ├── Dashboard.tsx   # User dashboard
│   ├── Features.tsx    # Features showcase
│   ├── Footer.tsx      # Footer component
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Login.tsx       # Authentication
│   └── Pricing.tsx     # Pricing plans
├── contexts/           # React contexts
│   └── AuthContext.tsx # Authentication context
├── firebase/           # Firebase configuration
│   ├── config.ts       # Firebase config
│   └── config.example.ts
├── App.tsx             # Main app component
├── main.tsx            # App entry point
└── index.css           # Global styles
```

## 🎯 Key Features

### For Students
- Personalized learning paths
- Progress tracking
- Interactive learning experiences
- Real-time feedback

### For Tutors
- Student management dashboard
- Performance analytics
- Customizable learning materials
- Communication tools

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages

## 🌟 Contributing

We welcome contributions! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Support

If you have any questions or need support, please open an issue on GitHub or contact us.

---

**Made with ❤️ for better education** 