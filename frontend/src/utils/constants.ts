// App constants and configuration

export const APP_CONFIG = {
  name: 'Abdsamad',
  title: 'Computer Science Student & Data Enthusiast',
  email: 'agdidabdsamad@gmail.com',
  github: 'https://github.com/0samad',
  backendUrl: import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000',
} as const;

// Hero section content
export const HERO_CONTENT = {
  greeting: "Hello, I'm",
  name: APP_CONFIG.name,
  title: APP_CONFIG.title,
  introduction: `I'm a motivated and detail-oriented computer science student with a strong interest in data science, web development, and AI. I enjoy turning ideas into functional, user-friendly digital solutions — from analyzing data to building applications that solve real-world problems.

I'm currently developing my skills in Python, C, JavaScript, and web technologies, while exploring data analytics and machine learning. I value clean code, creative design, and continuous learning.

My goal is to grow as a developer and data enthusiast by working on impactful projects, collaborating with innovative teams, and using technology to make a difference.`,
  ctaButtons: [
    { label: 'Download CV', href: '/api/download-cv', primary: true },
    { label: 'View Projects', href: '#projects', primary: false },
  ],
} as const;

// Skills categories
export const SKILLS_CATEGORIES = [
  {
    title: 'Programming',
    skills: ['Python', 'C', 'JavaScript', 'SQL'],
  },
  {
    title: 'Data & Tools',
    skills: ['Excel', 'Power BI', 'Pandas', 'NumPy'],
  },
  {
    title: 'Web Technologies',
    skills: ['HTML', 'CSS', 'React'],
  },
  {
    title: 'Design / Tools',
    skills: ['Canva', 'Figma'],
  },
  {
    title: 'Languages',
    skills: ['English (Advanced)', 'French (Professional)'],
  },
] as const;

// Projects data
export const PROJECTS = {
  dataScience: [
    {
      title: 'Sales Performance Dashboard',
      goal: 'Create comprehensive sales analytics dashboard with real-time insights',
      tools: ['Power BI', 'Excel', 'SQL'],
      focus: 'Data Visualization & Analytics',
    },
    {
      title: 'Customer Segmentation',
      goal: 'Apply clustering algorithms to segment customers for targeted marketing',
      tools: ['Python', 'Pandas', 'Scikit-learn'],
      focus: 'Machine Learning & Clustering',
    },
    {
      title: 'Predicting House Prices',
      goal: 'Build regression model to predict house prices based on features',
      tools: ['Python', 'NumPy', 'Matplotlib'],
      focus: 'Predictive Analytics',
    },
    {
      title: 'HR Analytics Dashboard',
      goal: 'Develop HR metrics dashboard for employee performance and retention',
      tools: ['Power BI', 'Excel', 'SQL'],
      focus: 'HR Data Analysis',
    },
    {
      title: 'E-commerce Data Analysis',
      goal: 'Analyze customer behavior and sales patterns for e-commerce platform',
      tools: ['Python', 'Pandas', 'Seaborn'],
      focus: 'Business Intelligence',
    },
    {
      title: 'COVID-19 Data Analysis',
      goal: 'Track and analyze COVID-19 trends and patterns across regions',
      tools: ['Python', 'NumPy', 'Matplotlib'],
      focus: 'Public Health Analytics',
    },
    {
      title: 'Stock Market Prediction',
      goal: 'Develop model to predict stock prices using historical data',
      tools: ['Python', 'Pandas', 'TensorFlow'],
      focus: 'Financial Analytics & ML',
    },
  ],
  coding: [
    {
      title: 'Student Management System',
      goal: 'Complete system for managing student records and academic information',
      tools: ['Java', 'MySQL', 'GUI'],
      focus: 'Database Management System',
    },
    {
      title: 'Library Management System',
      goal: 'Digital library system for book management and member tracking',
      tools: ['Python', 'SQLite', 'Tkinter'],
      focus: 'Information Management',
    },
    {
      title: 'Bank Account Simulation',
      goal: 'Banking system simulation with account management and transactions',
      tools: ['Java', 'OOP', 'GUI'],
      focus: 'Financial Software',
    },
    {
      title: 'Simple Calculator App',
      goal: 'Graphical calculator application with basic and advanced functions',
      tools: ['Java', 'Swing', 'Event Handling'],
      focus: 'Desktop Application',
    },
    {
      title: 'To-Do List Console App',
      goal: 'Command-line task management application with data persistence',
      tools: ['Python', 'File I/O', 'CLI'],
      focus: 'Productivity Tools',
    },
    {
      title: 'ATM Simulation',
      goal: 'Automated teller machine simulation with banking operations',
      tools: ['Java', 'OOP', 'Menu System'],
      focus: 'Financial Software',
    },
    {
      title: 'Mini Game',
      goal: 'Collection of classic games like Guess the Number and Tic Tac Toe',
      tools: ['Python', 'Game Logic', 'User Interface'],
      focus: 'Game Development',
    },
  ],
} as const;

// Education data
export const EDUCATION = [
  {
    title: 'The Data Science Course: Complete Bootcamp',
    provider: '365 Careers – Coursera',
    type: 'Professional Certificate',
  },
  {
    title: 'The Data Analysts Course: Complete Bootcamp',
    provider: '365 Careers – Coursera',
    type: 'Professional Certificate',
  },
  {
    title: 'Python Full Course',
    provider: 'FreeCodeCamp',
    type: 'Online Course',
  },
  {
    title: 'SQL and Python and Java Full Courses',
    provider: 'FreeCodeCamp and Udemy',
    type: 'Online Courses',
  },
] as const;

// Navigation items
export const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
] as const;

// Animation variants
export const ANIMATION_VARIANTS = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  },
  slideUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  },
  staggerChildren: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  },
} as const;