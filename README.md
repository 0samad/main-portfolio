# Portfolio Website - Abdsamad

A modern, production-ready portfolio website showcasing data science and web development projects. Built with React, TypeScript, TailwindCSS, and Node.js/Express as a full-stack monorepo application.

## 🚀 Features

### Core Functionality
- **Modern Responsive Design** - Mobile-first approach with TailwindCSS
- **Dark Mode Support** - Toggle between light and dark themes with system preference detection
- **Smooth Animations** - Framer Motion powered transitions and micro-interactions
- **CV Download** - Server-side PDF download functionality
- **Professional Sections** - Hero, Skills, Projects, Education, and Contact sections

### Technical Features
- **TypeScript** - Full type safety across frontend and backend
- **Component Architecture** - Reusable, maintainable React components
- **API Integration** - Express backend with proper error handling and CORS
- **SEO Optimized** - Semantic HTML and proper meta tags
- **Performance Optimized** - Code splitting and optimized assets
- **Accessibility** - WCAG 2.1 compliant with keyboard navigation

## 🛠 Technology Stack

### Frontend
- **React 18** - UI framework with hooks and modern patterns
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server
- **TailwindCSS** - Utility-first CSS framework with custom design system
- **Framer Motion** - Production-ready motion library for React
- **Lucide React** - Beautiful & consistent icon toolkit
- **React Router** - Declarative routing for React applications

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Fast, unopinionated web framework
- **TypeScript** - Type-safe backend development
- **CORS** - Cross-Origin Resource Sharing middleware
- **Helmet** - Security headers for Express
- **Compression** - Response compression middleware

### Development Tools
- **ESLint** - Pluggable JavaScript linter
- **Prettier** - Opinionated code formatter
- **Concurrently** - Run multiple npm scripts simultaneously
- **Nodemon** - Monitor for changes and restart server

## 📁 Project Structure

```
main-portfolio/
├── frontend/                 # Vite + React + TypeScript frontend
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   │   ├── common/       # Header, Footer, Button, etc.
│   │   │   └── sections/     # Hero, Skills, Projects, etc.
│   │   ├── hooks/            # Custom React hooks
│   │   ├── utils/            # Constants and helpers
│   │   └── styles/           # Global styles and Tailwind config
│   ├── public/               # Static assets (CV, favicon, etc.)
│   └── package.json
├── backend/                  # Express API server
│   ├── src/
│   │   ├── routes/           # API route handlers
│   │   ├── middleware/       # Express middleware
│   │   └── utils/           # Server utilities
│   └── package.json
├── package.json             # Root package.json with workspace scripts
├── README.md               # This file
└── .gitignore             # Enhanced ignore rules for monorepo
```

## 🎨 Design System

### Color Palette
- **Primary Dark**: `#1a1a1a` (main text, dark mode background)
- **Primary Light**: `#ffffff` (main background, light mode text)
- **Accent Blue**: `#3b82f6` (links, buttons, highlights)
- **Neutral Gray**: `#64748b` (secondary text, borders)
- **Background Light**: `#f8fafc` (light mode backgrounds)
- **Background Dark**: `#0f172a` (dark mode backgrounds)

### Typography
- **Headings**: Inter font, weights 400-700
- **Body**: Inter font, weight 400
- **Code**: JetBrains Mono (for code snippets)

## 📋 Sections Overview

### 1. Hero Section
- Professional introduction with exact text provided
- Call-to-action buttons (Download CV, View Projects)
- Animated background elements
- Smooth scroll indicator

### 2. Skills Section
- **Programming**: Python, C, JavaScript, SQL
- **Data & Tools**: Excel, Power BI, Pandas, NumPy
- **Web Technologies**: HTML, CSS, React
- **Design / Tools**: Canva, Figma
- **Languages**: English (Advanced), French (Professional)

### 3. Projects Section
- **Data Science Projects** (7):
  - Sales Performance Dashboard
  - Customer Segmentation (Clustering)
  - Predicting House Prices
  - HR Analytics Dashboard
  - E-commerce Data Analysis
  - COVID-19 Data Analysis
  - Stock Market Prediction

- **Coding Projects** (7):
  - Student Management System
  - Library Management System
  - Bank Account Simulation
  - Simple Calculator App (Java + GUI)
  - To-Do List Console App
  - ATM Simulation
  - Mini Game (Guess the Number / Tic Tac Toe)

### 4. Education Section
- The Data Science Course: Complete Bootcamp (365 Careers – Coursera)
- The Data Analysts Course: Complete Bootcamp (365 Careers – Coursera)
- Python Full Course (FreeCodeCamp)
- SQL and Python and Java Full Courses (FreeCodeCamp and Udemy)

### 5. Contact Section
- Email: agdidabdsamad@gmail.com (clickable mailto link)
- GitHub: https://github.com/0samad (clickable link)
- Download CV functionality

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm 8+
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd main-portfolio
   ```

2. **Install all dependencies**
   ```bash
   npm run install:all
   ```

3. **Set up environment variables**
   ```bash
   # Create frontend environment file
   echo "VITE_BACKEND_URL=http://localhost:5000" > frontend/.env.local

   # Create backend environment file
   echo "NODE_ENV=development" > backend/.env
   ```

4. **Start the development servers**
   ```bash
   npm run dev
   ```

   This will start both frontend (http://localhost:5173) and backend (http://localhost:5000) servers concurrently.

### Available Scripts

#### Root Commands
- `npm run dev` - Start both frontend and backend in development mode
- `npm run dev:frontend` - Start only frontend development server
- `npm run dev:backend` - Start only backend development server
- `npm run build` - Build both frontend and backend for production
- `npm run start` - Start production server
- `npm run install:all` - Install dependencies for all packages

#### Frontend Commands (from `/frontend`)
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

#### Backend Commands (from `/backend`)
- `npm run dev` - Start development server with hot reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Start production server
- `npm run lint` - Run linting

## 📡 API Endpoints

### CV Download
- **GET** `/api/download-cv` - Download CV_Abdsamad.pdf file
- **GET** `/api/cv-info` - Get CV file metadata

### Health Check
- **GET** `/api/health` - Server health check

## 🔧 Configuration

### Frontend Configuration
- **Vite Config**: `frontend/vite.config.ts`
- **Tailwind Config**: `frontend/tailwind.config.js`
- **TypeScript Config**: `frontend/tsconfig.json`

### Backend Configuration
- **Express Server**: `backend/src/server.ts`
- **TypeScript Config**: `backend/tsconfig.json`
- **CORS Settings**: `backend/src/middleware/cors.ts`

## 🎯 Development Guidelines

### Code Style
- TypeScript for type safety
- ESLint for code quality
- Prettier for consistent formatting
- Component-based architecture
- Custom hooks for reusable logic

### Performance
- Lazy loading for route components
- Optimized images and assets
- Efficient re-renders with React hooks
- Code splitting for better bundle sizes

### Security
- Helmet.js for security headers
- CORS configuration for API access
- Input validation and sanitization
- Environment variable management

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)
1. Build the frontend: `npm run build:frontend`
2. Deploy `frontend/dist` to your hosting provider
3. Configure environment variables

### Backend Deployment (Render/Railway)
1. Build the backend: `npm run build:backend`
2. Deploy to your Node.js hosting provider
3. Configure production environment variables
4. Update CORS configuration with your domain

### Environment Variables
- `VITE_BACKEND_URL` - Frontend: Backend API URL
- `NODE_ENV` - Backend: Environment (development/production)
- `PORT` - Backend: Server port (default: 5000)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: agdidabdsamad@gmail.com
- **GitHub**: https://github.com/0samad
- **Portfolio**: [Live Demo Link]

## 🙏 Acknowledgments

- Built with modern web technologies and best practices
- Icons by [Lucide](https://lucide.dev/)
- Design inspiration from modern portfolio trends
- Powered by [Vite](https://vitejs.dev/) and [React](https://reactjs.org/)

---

**Made with ❤️ using React, TypeScript, and TailwindCSS**