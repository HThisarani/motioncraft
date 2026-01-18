```markdown
# MotionCraft

MotionCraft is a frontend web project focused on motion-driven user interfaces and cinematic web experiences. The application demonstrates how modern animation techniques, video backgrounds, and clean layouts can be combined to create an immersive website.

---

## Overview

The project features a fullscreen video-based hero section, animated navigation, and interactive content sections.  
It is built with performance and responsiveness in mind using modern frontend tooling.

---

## Features

Cinematic Hero Section  
- Fullscreen background video  
- 3D flip animations on page load  
- Floating text effects with continuous motion  
- Mouse parallax effects for interactive depth  

Interactive Navigation  
- Glassmorphism design with active section tracking  
- Smooth scrolling between sections  
- Animated page transitions  
- Responsive mobile menu with staggered animations  

Dynamic Content Sections  
- Letter-by-letter entrance animations  
- 3D card blast-in effects from different angles  
- Floating particles and light sweep effects  
- Scroll-triggered animations using Intersection Observer  
- Interactive cards with hover effects  

Modern Call-to-Action Section  
- Gradient animated buttons  
- Trust indicators and status badges  
- Responsive layout for all devices  

Professional Footer  
- Animated link indicators  
- Social media icons with gradient effects  
- Multi-column responsive grid layout  

Performance Optimization  
- Fast development and builds using Vite  
- Lightweight CSS-based animations  
- Optimized animation timing  

Responsive Design  
- Optimized for desktop, tablet, and mobile screens  

---

## Technology Stack

Frontend: React (Vite)  
Styling: Tailwind CSS  
Animations: CSS Animations, Intersection Observer API, requestAnimationFrame  
Media: MP4 background video  
Deployment: Vercel  
Version Control: Git and GitHub  

---

## Project Structure

```
motioncraft/
├─ src/
│  ├─ components/
│  │  ├─ Navbar.jsx
│  │  ├─ Hero.jsx
│  │  └─ Section.jsx
│  ├─ pages/
│  │  └─ Home.jsx
│  ├─ assets/
│  │  └─ hero-video.mp4
│  ├─ index.css
│  └─ main.jsx
├─ public/
├─ package.json
└─ README.md
```

---

## Local Setup

Step 1: Clone the repository

```bash
git clone https://github.com/HThisarani/motioncraft.git
cd motioncraft
```

Step 2: Install dependencies

```bash
npm install
```

Step 3: Run the development server

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

---

## Deployment

This project is deployed using Vercel.

Deployment steps:
1. Push the repository to GitHub  
2. Import the project into Vercel  
3. Select Vite as the framework  
4. Deploy the application  

---

## Purpose

This project was created to demonstrate modern frontend development practices, motion-based UI design, and the integration of video and animation in web applications. It showcases advanced CSS animations, 3D transforms, and interactive user experiences.

---

## License

This project is intended for educational and portfolio use.
```