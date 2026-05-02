import { tr } from "framer-motion/client";

export const personalInfo = {
  name: "Zeyad Ashraf",
  title: "Full Stack Developer",
  subtitle: "Crafting seamless digital experiences with code & creativity",
  bio: "Hello there! 👋 I'm a passionate Full Stack Developer based in Egypt. With a keen eye for design and a love for crafting seamless user experiences, I'm dedicated to bringing ideas to life through code.",
  location: "Cairo, Egypt",
  university: "Kafr El-Sheikh University",
  email: "zeyadaltantawy365@gmail.com",
  github: "https://github.com/Zeyad-Ashraf-77",
  linkedin: "https://www.linkedin.com/in/zeyad-ashraf-859a88249/",
  twitter: "https://twitter.com/zeyad_ashraf",
  instagram: "https://www.instagram.com/zeyad_ashraf292/",
  facebook: "https://www.facebook.com/zeyad.ashraf.3110567/",
  whatsApp: "https://wa.me/201065767412",
  available: true,
};

export const skills = [
  {
    category: "Frontend",
    icon: "🎨",
    color: "from-sky-400 to-blue-600",
    items: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "HTML5 / CSS3", level: 97 },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    color: "from-emerald-400 to-teal-600",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 82 },
      { name: "Nest.js", level: 80 },
      { name: "MongoDB", level: 80 },
      { name: "REST APIs", level: 88 },
      { name: "GraphQL", level: 75 },
      { name: "Firebase", level: 78 },
    ],
  },
  {
    category: "Tools & DevOps",
    icon: "🛠",
    color: "from-violet-400 to-purple-600",
    items: [
      { name: "Git / GitHub", level: 92 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 },
      { name: "Figma", level: 75 },
      { name: "Vercel", level: 88 },
      { name: "Vite", level: 85 },
      { name: "Redux", level: 80 },
    ],
  },
];

export const projects = [
 
  {
    id: 7,
    title: "Handova",
    description:
      "A full-stack e-commerce platform built with React, Next.js, Node.js, and MongoDB. The system includes a complete storefront, advanced product filtering, secure authentication, full order management, and an admin dashboard with multi-role access control.",
    tags: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/Zeyad-Ashraf-77/graduation-.git",
    live: "https://graduation-git-main-zeyad-ashraf77s-projects.vercel.app/",
    featured: false,
    color: "from-orange-400 to-red-600",
    icon: "🛍️",
  },
  {
    id: 8,
    title: "Intel Sage",
    description:
      "Intel Sage is a full cybersecurity intelligence system that allows companies to monitor the exposure of their email accounts and sensitive data on the dark web. Using a custom machine learning model, the platform identifies leaked credentials, detects breach patterns, and generates security alerts with detailed reports.",
    tags: ["React", "Vite", "TypeScript", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/mayargamall/graduation-project.git",
    live: "https://graduation-project-azure.vercel.app",
    featured: false,
    color: "from-red-400 to-pink-600",
    icon: "🔒",
  },
  {
    id: 9,
    title: "Saraha App",
    description:
      "Full-Stack anonymous messaging application built with TypeScript, React, Tailwind CSS, shadcn/ui, and Node.js. Features clean UI components, efficient front-end logic, and RESTful back-end APIs.",
    tags: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Zeyad-Ashraf-77/Saraha-Full-Stack.git",
    live: "http://saraha-full-stack.vercel.app/",
    featured: false,
    color: "from-purple-400 to-indigo-600",
    icon: "💬",
  },
  {
    id: 10,
    title: "Saraha App Backend",
    description:
      "Backend API for Saraha App - an anonymous messaging application. Built with Node.js and Express, providing secure RESTful APIs for user authentication, message management, and secure data handling.",
    tags: ["Node.js", "Express", "MongoDB", "JavaScript", "RESTful API"],
    github: "https://github.com/Zeyad-Ashraf-77/Saraha-App.git",
    live: "https://saraha-app-theta.vercel.app/",
    featured: false,
    color: "from-green-400 to-emerald-600",
    icon: "⚙️",
  },
  {
    id: 11,
    title: "Social Media App Backend",
    description:
      "Backend API for Social Media App built with TypeScript and OOP principles. Features clean architecture with RESTful APIs and GraphQL for user management, posts, comments, likes, and real-time interactions.",
    tags: ["Node.js", "Express", "TypeScript", "MongoDB", "RESTful API", "GraphQL"],
    github: "https://github.com/Zeyad-Ashraf-77/social-Media-App.git",
    live: "#",
    featured: false,
    color: "from-cyan-400 to-blue-600",
    icon: "🌐",
  },
  {
    id: 12,
    title: "Fresh Cart",
    description:
      "E-commerce web application for fresh products. Built with React and Vite, featuring product browsing, cart management, and a modern UI.",
    tags: ["React", "Vite", "Tailwind CSS"],
    github: "https://github.com/Zeyad-Ashraf-77/Fresh-Cart",
    live: "https://zeyad-ashraf-77.github.io/Fresh-Cart/",
    featured: false,
    color: "from-green-400 to-lime-600",
    icon: "🛒",
  },
  {
    id: 13,
    title: "Recipe Food",
    description:
      "Recipe Food is a responsive web page designed to showcase food recipes in a clean and appealing layout with recipe cards, dish details, ingredients list, and user ratings.",
    tags: ["React", "Vite", "Tailwind CSS"],
    github: "https://github.com/Zeyad-Ashraf-77/Recipe-Food",
    live: "https://zeyad-ashraf-77.github.io/Recipe-Food/",
    featured: false,
    color: "from-amber-400 to-orange-600",
    icon: "🍳",
  },
  {
    id: 14,
    title: "Social App",
    description:
      "A full-featured social media web application built with Next.js (App Router) and styled using ShadCN UI. Features user registration, login, create posts, like, comment, and real-time interactions.",
    tags: ["Next.js", "Shadcn UI", "Tailwind CSS", "Context API"],
    github: "https://github.com/Zeyad-Ashraf-77/Social-app.git",
    live: "https://social-app-v7h3-kghjaqbgd-zeyad-ashraf77s-projects.vercel.app/Login",
    featured: false,
    color: "from-blue-400 to-sky-600",
    icon: "👥",
  },
  {
    id: 15,
    title: "Movie App",
    description:
      "A responsive movie browsing web application that allows users to explore trending, popular, and upcoming movies with detailed information, search, and favorites functionality.",
    tags: ["React", "Shadcn UI", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/Zeyad-Ashraf-77/Movie-App.git",
    live: "https://movie-app-alpha-amber.vercel.app/",
    featured: false,
    color: "from-red-400 to-rose-600",
    icon: "🎬",
  },
  {
    id: 16,
    title: "Mealify",
    description:
      "A responsive landing page for a fictional restaurant with animated interface, smooth scrolling, and organized sections like About, Services, Menu, Testimonials, and Contact.",
    tags: ["React", "Vite", "Bootstrap"],
    github: "https://github.com/Zeyad-Ashraf-77/Mealify.git",
    live: "https://mealify-website.vercel.app/",
    featured: false,
    color: "from-orange-400 to-yellow-600",
    icon: "🍽️",
  },
  {
    id: 17,
    title: "DevFolio",
    description:
      "A modern and responsive personal portfolio website built to showcase professional skills, featured projects, services, and contact details.",
    tags: ["React", "Vite", "Bootstrap"],
    github: "https://github.com/Zeyad-Ashraf-77/Divfolio.git",
    live: "https://divfolio-website.vercel.app/",
    featured: false,
    color: "from-indigo-400 to-purple-600",
    icon: "💼",
  },
  {
    id: 18,
    title: "E-Commerce Backend API",
    description:
      "A comprehensive backend e-commerce API built with NestJS featuring complete authentication with Google OAuth, REST API and GraphQL endpoints, Socket.io for real-time features, and comprehensive API documentation with Swagger.",
    tags: ["NestJS", "TypeScript", "REST API", "GraphQL", "Socket.io", "MongoDB", "Redis", "Swagger"],
    github: "https://github.com/Zeyad-Ashraf-77/E-commerce-Nest.git",
    live: "#",
    featured: false,
    color: "from-teal-400 to-cyan-600",
    icon: "🔌",
  },
   {
    id: 1,
    title: "Amazon Clone",
    description:
      "A streamlined web application replicating the fundamental features of Amazon including product listing, cart, authentication, and checkout flow with Stripe payments.",
    tags: ["TypeScript", "Next.js", "Firebase", "Stripe", "Tailwind CSS"],
    github: "https://github.com/Zeyad-Ashraf-77/Amazon-Clone",
    live: "#",
    featured: true,
    color: "from-orange-400 to-amber-600",
    icon: "🛒",
  },
  {
    id: 2,
    title: "Twitter Clone",
    description:
      "A social media web application mimicking Twitter's core features: account creation, posting tweets, reactions, following, and a real-time feed.",
    tags: ["React.js", "Node.js", "MongoDB", "Socket.io", "Express"],
    github: "https://github.com/Zeyad-Ashraf-77/Twitter-Clone",
    live: "#",
    featured: true,
    color: "from-sky-400 to-cyan-600",
    icon: "🐦",
  },
  {
    id: 3,
    title: "Real Estate Dashboard",
    description:
      "A sophisticated dashboard displaying revenue statistics, agent analytics, property reviews, and management tools for real estate professionals.",
    tags: ["TypeScript", "React.js", "Recharts", "MUI", "Refine"],
    github: "https://github.com/Zeyad-Ashraf-77/Real-Estate-Dashboard",
    live: "#",
    featured: true,
    color: "from-emerald-400 to-green-600",
    icon: "🏠",
  },
  {
    id: 4,
    title: "HooBank Landing Page",
    description:
      "A modern, responsive UI/UX landing page for a fintech company. Built with React.js and Tailwind CSS with smooth animations and professional design.",
    tags: ["React.js", "Tailwind CSS", "JavaScript", "Vite"],
    github: "https://github.com/Zeyad-Ashraf-77/HooBank-Landing-Page",
    live: "#",
    featured: true,
    color: "from-blue-400 to-indigo-600",
    icon: "💳",
  },
  {
    id: 5,
    title: "Space Tourism",
    description:
      "A multi-page space tourism website with beautiful animation effects, routing, and immersive UI. Showcases mastery of TypeScript and motion design.",
    tags: ["TypeScript", "React Router", "Framer Motion", "CSS Modules"],
    github: "https://github.com/Zeyad-Ashraf-77/Space-Tourism",
    live: "#",
    featured: true,
    color: "from-violet-400 to-purple-600",
    icon: "🚀",
  },
  {
    id: 6,
    title: "Match Four Game",
    description:
      "An entertaining two-player game (human vs bot) built in JavaScript. Features AI opponent logic, win detection, and a polished interactive UI.",
    tags: ["JavaScript", "HTML5 Canvas", "CSS3", "Game AI"],
    github: "https://github.com/Zeyad-Ashraf-77/Match-Four-Game",
    live: "#",
    featured: true,
    color: "from-pink-400 to-rose-600",
    icon: "🎮",
  },
];

export const experience = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Freelance",
    period: "2023 – Present",
    description:
      "Building full-stack web applications for clients across different industries. Delivering end-to-end solutions from UI/UX design to deployment, specializing in MERN stack and Next.js.",
    skills: ["Next.js", "React", "Node.js","Nest.js", "MongoDB", "TypeScript"],
    type: "work",
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Open Source Contributions",
    period: "2022 – Present",
    description:
      "Contributing to open-source projects and building public repositories. Maintaining clean, documented code with a focus on performance and reusability.",
    skills: ["React", "TypeScript", "GitHub", "Git", "Documentation"],
    type: "work",
  },
  {
    id: 3,
    role: "Computer Science Student",
    company: "Ain-Shams University",
    period: "2021 – Present",
    description:
      "Studying Computer Science, deepening understanding of algorithms, data structures, software engineering principles, and modern development practices.",
    skills: ["Algorithms", "Data Structures", "Software Engineering", "OOP"],
    type: "education",
  },
];
