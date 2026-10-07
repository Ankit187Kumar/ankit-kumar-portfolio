"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ExternalLink, ArrowRight } from "lucide-react";
import ProjectModal, { type Project } from "@/components/ui/ProjectModal";
import { getProjectArt } from "@/components/ui/ProjectArt";
import HoverPreview from "@/components/ui/HoverPreview";

const projects: Project[] = [
  {
    id: "kiosk",
    num: "01",
    title: "AI PHOTO-TO-VIDEO KIOSK",
    category: "INTERACTIVE EXPERIENCE • AI",
    description: "Interactive 1080×1920 portrait kiosk for Holobox, tablet and exhibition environments with AI video generation.",
    longDescription: "A full-stack interactive kiosk application designed specifically for the Holobox — a holographic display device used in exhibition environments. Users interact through a portrait-oriented touchscreen to capture a photo, select a theme frame, fill in their details, complete a quiz, and receive an AI-generated personalized video with a QR code for download.",
    problem: "Exhibition environments needed a memorable interactive touchpoint that could engage visitors, collect data, and leave them with a shareable digital keepsake — all without requiring technical expertise from the user.",
    solution: "Built a two-mode kiosk: a LOCAL MODE using FFmpeg for instant video generation, and an AI MODE using Replicate's Stable Video Diffusion (SVD) for AI-powered video synthesis. The complete user journey is guided, gamified, and delivers an MP4 download via QR code.",
    userFlow: ["PHOTO CAPTURE", "THEME FRAME", "USER DETAILS", "QUIZ", "VIDEO GENERATION", "QR CODE", "MP4 DOWNLOAD"],
    architecture: ["React + Vite (Frontend)", "Node.js + Express (Backend)", "MongoDB (Data Storage)", "FFmpeg (Local Mode)", "Replicate SVD (AI Mode)", "Vercel (Deployment)"],
    techStack: ["React", "Vite", "Node.js", "Express", "MongoDB", "FFmpeg", "Replicate SVD", "Vercel"],
    contribution: "Sole developer. Designed and built the complete user experience, kiosk UI, backend API, dual video generation pipeline, and QR delivery system.",
    challenges: "Optimizing video generation latency in AI mode while maintaining a seamless kiosk experience. Managing portrait 1080×1920 canvas constraints and ensuring stability in exhibition environments.",
    result: "A deployed, exhibition-ready interactive kiosk used on Holobox hardware with dual-mode AI video generation and complete user journey.",
    liveDemo: "https://gameverse-opal.vercel.app/",
    tags: ["React", "Vite", "Node.js", "Express", "MongoDB", "FFmpeg", "AI Video", "Vercel"],
    color: "#3d63d1",
    previewImage: "/projects/kiosk.png",
  },
  {
    id: "scanner",
    num: "02",
    title: "BUSINESS CARD SCANNER & ADMIN DASHBOARD",
    category: "MOBILE • WEB • OCR",
    description: "Unity/C# mobile app for business card scanning with OCR extraction, cloud sync, and management dashboard.",
    longDescription: "An enterprise-grade system combining a Unity/C# mobile application for business card scanning with an intelligent OCR extraction engine, cloud synchronization, and a full-featured web-based admin dashboard with analytics and reporting.",
    problem: "Manual business card data entry was time-consuming, error-prone, and created data silos across teams in cross-functional environments.",
    solution: "Built a Unity-based mobile scanning app that sends card images through an OCR pipeline to automatically extract contact information, syncs it to the cloud via Node.js APIs, and presents it through a feature-rich admin dashboard.",
    userFlow: ["BUSINESS CARD", "OCR SCAN", "DATA EXTRACTION", "CLOUD SYNC", "DASHBOARD", "ANALYTICS"],
    architecture: ["Unity/C# (Mobile App)", "OCR Engine (Extraction)", "Node.js + JavaScript (Backend API)", "Google Apps Script (Automation)", "Cloud Database (Storage)", "Admin Dashboard (Analytics)", "Vercel (Deployment)"],
    techStack: ["Unity", "C#", "OCR", "Node.js", "JavaScript", "Google Apps Script", "Vercel"],
    contribution: "Designed and developed the Unity mobile application, integrated OCR processing, built the Node.js backend API, created the admin dashboard, and implemented Google Apps Script automation.",
    challenges: "Achieving reliable OCR accuracy across varied card designs, fonts, and lighting conditions. Ensuring data consistency between the mobile app and cloud dashboard in real-time.",
    result: "70% reduction in manual contact-entry time. Deployed across cross-functional teams with real-time cloud sync.",
    tags: ["Unity", "C#", "OCR", "Node.js", "Google Apps Script", "Vercel"],
    color: "#7c3aed",
    previewImage: "/projects/scanner.png",
    previewVideo: "/projects/scanner-demo.mp4",
  },
  {
    id: "handslash",
    num: "03",
    title: "HAND SLASH QUIZ",
    category: "INTERACTIVE • COMPUTER VISION",
    description: "Beat Saber-inspired gesture-controlled quiz where users use real hands as virtual LED batons to slash correct answers.",
    longDescription: "A futuristic, gesture-controlled quiz experience built on Next.js 14 and MediaPipe Hands. Inspired by Beat Saber, users extend both hands in front of a webcam and use them as virtual LED batons — right hand is red, left hand is blue — to physically slash flying answer bubbles. Real-time collision detection, particle effects, and synthesized sound effects create an immersive gamified quiz environment.",
    problem: "Traditional quiz interfaces are static and passive. Creating a fully gesture-controlled, real-time interactive quiz accessible via the browser without special hardware was a unique engineering challenge.",
    solution: "Used MediaPipe Hands for real-time two-hand tracking entirely in the browser. Mapped hand landmark positions to virtual baton collision zones over flying answer bubbles, with synthesized audio feedback and particle explosion effects on correct answers.",
    userFlow: ["WEBCAM ACCESS", "HAND CALIBRATION", "QUIZ START", "ANSWER BUBBLES APPEAR", "GESTURE SLASH", "COLLISION DETECT", "SCORE UPDATE", "FINAL SCORE"],
    architecture: ["Next.js 14 (Framework)", "MediaPipe Hands (Hand Tracking)", "Canvas API (Rendering)", "Web Audio API (Sound)", "localStorage (Score Storage)", "Vercel (Deployment)"],
    techStack: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "MediaPipe Hands", "Web Audio API", "localStorage", "Vercel"],
    contribution: "Full solo development — game concept, hand tracking integration, collision detection algorithm, particle system, audio synthesis, and responsive UI.",
    challenges: "Achieving stable 2-hand landmark detection at 30+ fps in various lighting. Implementing accurate real-time collision detection between hand batons and moving answer bubbles without perceptible latency.",
    result: "A fully browser-based gesture-controlled quiz with real-time hand tracking, particle effects, and sound — running entirely on webcam input with no special hardware.",
    liveDemo: "https://hand-slash-quiz.vercel.app/",
    tags: ["Next.js 14", "TypeScript", "MediaPipe", "Web Audio API", "Vercel"],
    color: "#0891b2",
    previewImage: "/projects/handslash.png",
  },
  {
    id: "handmaze",
    num: "04",
    title: "HAND MAZE GAME",
    category: "COMPUTER VISION • INTERACTIVE",
    description: "Webcam-controlled maze game where users navigate a procedurally generated maze using real hand gestures.",
    longDescription: "A Python-based real-time interactive game where the player navigates a procedurally generated maze purely through hand gestures captured via webcam. MediaPipe Hands detects pinch gestures and hand position in real-time. OpenCV renders the maze with collision detection, dynamic scoring, path tracking, and user management with high scores and best time recording.",
    problem: "Creating a real-time playable maze game controlled entirely by hand gestures via webcam, with no keyboard or mouse, while maintaining stable tracking and responsive gameplay.",
    solution: "Combined MediaPipe's hand landmark detection with OpenCV rendering. Pinch gestures control player movement direction and speed. NumPy handles procedural maze generation and collision physics. A user system tracks scores and best times.",
    userFlow: ["WEBCAM OPEN", "HAND DETECTED", "GESTURE CALIBRATION", "MAZE GENERATED", "PINCH TO MOVE", "COLLISION CHECK", "SCORE UPDATE", "WIN / RESET"],
    architecture: ["Webcam (Input)", "MediaPipe Hands (Tracking)", "Gesture Detection (Logic)", "OpenCV (Rendering)", "NumPy (Maze Generation)", "Collision Detection", "Score Management"],
    techStack: ["Python", "OpenCV", "MediaPipe", "NumPy"],
    contribution: "Complete development — hand tracking integration, procedural maze generation algorithm, collision detection system, gesture-to-movement mapping, and user/score management.",
    challenges: "Stabilizing hand tracking in varying lighting and background conditions. Tuning pinch detection thresholds for responsive but stable movement without jitter.",
    result: "A fully playable real-time gesture-controlled maze game running at 30fps via standard webcam with procedural maze generation, scoring, and user management.",
    liveDemo: "https://hand-maze-game.vercel.app/",
    tags: ["Python", "OpenCV", "MediaPipe", "NumPy"],
    color: "#3d63d1",
    previewImage: "/projects/handmaze.png",
  },
  {
    id: "rbac",
    num: "05",
    title: "ROLE-BASED ACCESS CONTROL SYSTEM",
    category: "FULL-STACK WEB APPLICATION",
    description: "Complete user management system with dynamic role assignment, permission control, and REST API backend.",
    longDescription: "A full-stack enterprise web application implementing a comprehensive Role-Based Access Control system. Admins can manage users, assign roles with granular permissions, and control active/inactive status — all through a clean Material UI dashboard with a robust Node.js/Express/MongoDB backend.",
    problem: "Applications serving multiple user types need a centralized, secure system for managing who can access what — without hardcoding permissions or relying on simple boolean flags.",
    solution: "Built a complete RBAC system: a React + Redux Toolkit frontend for state management and a Node.js + Express + MongoDB backend for API and persistence. Users are assigned roles; roles carry dynamic permission sets; APIs enforce access control at each endpoint.",
    userFlow: ["LOGIN", "ROLE CHECK", "DASHBOARD ACCESS", "USER MANAGEMENT", "ROLE ASSIGNMENT", "PERMISSION CONTROL", "API CALL", "DATABASE"],
    architecture: ["React + Redux Toolkit (Frontend)", "Material UI (Component Library)", "Axios (API Client)", "Node.js + Express (Backend)", "MongoDB (Database)", "Postman (API Testing)"],
    techStack: ["React", "Material UI", "Axios", "Redux Toolkit", "React Redux", "Node.js", "Express.js", "MongoDB"],
    contribution: "Full-stack development — frontend state management with Redux, Material UI dashboard, RESTful API design with Express, MongoDB schema design, and backend error handling.",
    challenges: "Designing a flexible permission model that avoids over-permissioning while remaining simple enough to manage through the UI. Ensuring Redux state and backend state remain consistent.",
    result: "A fully functional RBAC system with dynamic role/permission management, responsive dashboard, and complete REST API backend.",
    tags: ["React", "Redux", "Material UI", "Node.js", "Express", "MongoDB"],
    color: "#7c3aed",
    previewImage: "/projects/rbac.png",
  },
  {
    id: "foodshop",
    num: "06",
    title: "FOOD SHOP WEB PAGE",
    category: "FRONTEND / WEB",
    description: "Responsive food shop frontend with product cards, modern UI layout, and mobile-friendly design.",
    longDescription: "A clean, responsive frontend web page for a food shop — featuring product cards, a modern visual hierarchy, mobile-first layout, and smooth interactive UI elements built with vanilla HTML, CSS, and JavaScript.",
    problem: "Small food businesses need an attractive, fast-loading web presence that works across all device sizes.",
    solution: "Built a lightweight, responsive frontend using HTML, CSS, and vanilla JavaScript. Focused on visual hierarchy, product card design, and mobile optimization without any framework overhead.",
    userFlow: ["LANDING PAGE", "PRODUCT BROWSE", "CARD INTERACTION", "MOBILE LAYOUT"],
    architecture: ["HTML (Structure)", "CSS (Styling)", "JavaScript (Interactivity)", "Vercel (Deployment)"],
    techStack: ["HTML", "CSS", "JavaScript", "Vercel"],
    contribution: "Full frontend design and development.",
    challenges: "Creating a visually appealing design with clean typography and product cards using no CSS framework.",
    result: "A clean, responsive food shop web page deployed on Vercel with modern UI.",
    liveDemo: "https://food-shop-web-page.vercel.app/",
    tags: ["HTML", "CSS", "JavaScript", "Vercel"],
    color: "#0891b2",
    previewImage: "/projects/foodshop.png",
  },
  {
    id: "teamportal",
    num: "07",
    title: "TEAM MANAGEMENT PORTAL",
    category: "FULL-STACK WEB APPLICATION",
    description: "Team & project management dashboard for tracking employees, projects, tasks, and progress in one place.",
    longDescription: "A full-stack team management portal for organizing teams, projects, and daily work. Admins can add employees, create projects, assign tasks, and monitor progress through a centralized dashboard — with live stats on total employees, projects, assignments, completions, and overdue work, plus per-project progress bars, due dates, and assigned team members.",
    problem: "Small teams need a single place to track who's working on what, how projects are progressing, and what's overdue — without juggling spreadsheets or scattered tools.",
    solution: "Built a dashboard-driven portal with employee and project management, task assignment, and progress tracking, backed by a MongoDB database hosted on Render and a frontend deployed on Vercel.",
    userFlow: ["LOGIN", "DASHBOARD OVERVIEW", "ADD EMPLOYEE / PROJECT", "ASSIGN TASK", "TRACK PROGRESS", "VIEW REPORTS"],
    architecture: ["Frontend (Vercel)", "REST API (Backend)", "MongoDB (Render)", "Vercel (Deployment)"],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Render", "Vercel"],
    contribution: "Full-stack development — dashboard UI, employee/project/task management, progress tracking, and backend API with MongoDB.",
    challenges: "Designing a dashboard that surfaces the right stats at a glance while keeping employee, project, and task data in sync across the app.",
    result: "A deployed team management portal with live dashboard stats, employee and project tracking, task assignment, and progress monitoring.",
    liveDemo: "https://team-management-portal-neon.vercel.app/",
    tags: ["React", "Node.js", "MongoDB", "Render", "Vercel"],
    color: "#3d63d1",
    previewImage: "/projects/teamportal.png",
  },
  {
    id: "shopledger",
    num: "08",
    title: "SHOPLEDGER – MULTI-SHOP BUSINESS MANAGEMENT",
    category: "FULL-STACK WEB APPLICATION",
    description: "All-in-one business suite for managing multiple shops, employees, salaries, expenses, stock, and cash flow from one dashboard.",
    longDescription: "ShopLedger is an all-in-one business management platform for managing multiple shops, employees, salaries, expenses, stock, and daily cash flow from a single dashboard. It supports attendance-based salary calculation, employee advances, final settlements, shop-wise cash/UPI tracking, stock management, and role-based access for owners and managers.",
    problem: "Small business owners running multiple shops needed a single platform to track employee attendance, salaries, daily cash and UPI collections, expenses, and stock — without juggling spreadsheets across locations.",
    solution: "Built a multi-shop business suite with a Next.js/TypeScript frontend and a Node.js/Express/TypeScript backend on MongoDB. Each shop has isolated employees, expenses, stock, and transactions, with attendance-based salary logic (2 paid leaves/month, deductions for extra leaves), JWT auth, and owner/manager role-based access scoped to assigned shops.",
    userFlow: ["LOGIN", "SELECT SHOP", "DASHBOARD OVERVIEW", "MARK ATTENDANCE", "RECORD EXPENSES / CASH FLOW", "MANAGE STOCK", "SALARY & SETTLEMENTS", "REPORTS"],
    architecture: ["Next.js + TypeScript (Frontend)", "Tailwind CSS + shadcn/ui (UI)", "Node.js + Express + TypeScript (Backend)", "MongoDB + Mongoose (Database)", "JWT + bcrypt (Auth)", "Cloudinary (Media)", "Vercel (Frontend Hosting)", "Render (Backend Hosting)"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Node.js", "Express", "MongoDB", "Mongoose", "JWT", "bcrypt", "Cloudinary"],
    contribution: "Full-stack development — multi-shop dashboard UI, attendance and salary calculation logic, cash flow and expense tracking, stock management, role-based access control, and REST API backend.",
    challenges: "Designing attendance-based salary calculations with paid-leave rules and deductions. Keeping shop-scoped data (employees, stock, cash flow) fully isolated per shop while supporting a business-wide owner view. Securing sensitive data (Aadhaar encryption/masking) and audit history for financial records.",
    result: "A deployed multi-shop business suite with live dashboards, attendance-based payroll, cash flow tracking, stock management, and role-based access for owners and managers.",
    tags: ["Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "JWT", "Vercel", "Render"],
    color: "#059669",
    previewImage: "/projects/shopledger.png",
  },
  {
    id: "tafear",
    num: "09",
    title: "TAFE AR — INTERACTIVE TRACTOR PRODUCT EXPERIENCE",
    category: "AUGMENTED REALITY • PRODUCT VIZ",
    description: "Interactive AR product experience for the Massey Ferguson 8055 tractor, visualizing hidden components and features through digital overlays.",
    longDescription: "TAFE AR is an interactive Augmented Reality product visualization experience built for the Massey Ferguson 8055 tractor. The experience combines real-world machinery with 3D AR content to visualize hidden mechanical components, product features, operator comfort, and agricultural attachments through interactive digital overlays.",
    problem: "Traditional tractor demonstrations make it difficult to explain internal mechanical components, hidden systems, attachment mechanisms, and detailed product features without physically opening or demonstrating the machinery.",
    solution: "Built an interactive AR product demonstration that layers digital 3D content directly onto the physical tractor. Users can explore internal components, bonnet and engine visualization, LED lighting, operator-area features, and agricultural implements through interactive AR animations, feature callouts, and holographic visual effects.",
    userFlow: ["LAUNCH EXPERIENCE", "VIEW PHYSICAL TRACTOR", "AR CONTENT APPEARS", "EXPLORE TRACTOR FEATURES", "REVEAL INTERNAL COMPONENTS", "EXPLORE OPERATOR AREA", "VISUALIZE AGRICULTURAL IMPLEMENT", "VIEW FEATURE CALLOUTS", "REPLAY / EXPLORE AGAIN"],
    architecture: ["Unity 3D + C# (AR Experience & Logic)", "AR Tracking & Alignment", "3D Asset Integration (Tractor & Implements)", "Interactive Visualization (Component Reveals)", "3D Animation (Mechanical Movements)", "AR UI (Panels, Callouts, Navigation)", "VFX (Holographic Overlays, Glow, Scanning)", "Real-Time Rendering"],
    techStack: ["Unity 3D", "C#", "Augmented Reality", "AR Tracking", "3D Animation", "VFX", "Interactive UI"],
    contribution: "AR / Interactive Experience Developer — developed the AR product experience, integrated 3D assets, implemented interactive feature visualization, created AR UI and navigation, worked on component animations and holographic VFX, and handled positioning and alignment of virtual elements with the physical tractor.",
    challenges: "Creating an engaging AR experience while keeping virtual components accurately aligned with the physical tractor. Presenting complex mechanical systems in a simple, understandable way through 3D visualization, animation, interactive callouts and AR effects.",
    result: "An immersive AR product demonstration that transforms the physical Massey Ferguson 8055 tractor into an interactive digital experience, enabling customers to explore hidden components, product features and agricultural attachments in an engaging way.",
    tags: ["Unity 3D", "C#", "AR", "3D Animation", "VFX", "Interactive UI"],
    color: "#dc2626",
    previewImage: "/projects/tafear.png",
    previewVideo: "/projects/TafeAR.mp4",
  },
  {
    id: "vrtraining",
    num: "10",
    title: "VR TRAINING — IMMERSIVE TRAINING EXPERIENCE",
    category: "VIRTUAL REALITY • TRAINING",
    description: "Immersive VR training simulation letting users practice real-world industrial procedures in a controlled virtual environment.",
    longDescription: "An immersive Virtual Reality training experience designed to simulate a real-world training environment. The project uses an interactive 3D environment to allow users to understand and practice training procedures in a controlled virtual space.",
    problem: "Traditional training can require physical equipment, dedicated training spaces, repeated demonstrations, and controlled environments. This can make practical training expensive, time-consuming, and difficult to repeat.",
    solution: "Developed a VR-based training environment where users can enter a simulated 3D environment and interact with training elements virtually. The experience focuses on guided interaction, realistic visualization, and practical learning through immersive simulation.",
    userFlow: ["LAUNCH VR EXPERIENCE", "ENTER VIRTUAL ENVIRONMENT", "UNDERSTAND TRAINING AREA", "FOLLOW TRAINING INSTRUCTIONS", "INTERACT WITH VIRTUAL OBJECTS", "PERFORM TRAINING PROCEDURE", "COMPLETE TRAINING", "RESTART / REPEAT"],
    architecture: ["Unity 3D + C# (VR Environment & Logic)", "3D Environment & Asset Integration", "VR Interaction (Objects & Training Elements)", "3D Animation (Process Demonstration)", "VR UI (Instructions & Navigation)", "Real-Time Rendering"],
    techStack: ["Unity 3D", "C#", "Virtual Reality", "3D Environment", "VR UI", "3D Animation"],
    contribution: "VR / Interactive Experience Developer — developed the immersive VR training environment, integrated 3D assets, implemented interaction logic, created the training flow and UI, worked on animations, and optimized the experience for interactive VR usage.",
    challenges: "Creating an intuitive VR interaction system while maintaining a realistic and easy-to-understand training environment. Required careful placement of 3D assets, interaction points, animations and UI elements to create a smooth training workflow.",
    result: "An immersive and repeatable VR training experience that transforms conventional training procedures into an interactive 3D simulation, enabling users to learn and practice processes inside a controlled virtual environment.",
    tags: ["Unity 3D", "C#", "VR", "3D Environment", "Interactive Training"],
    color: "#2563eb",
    previewImage: "/projects/vrtraining.png",
    previewVideo: "/projects/vrtraining.mp4",
  },
  {
    id: "yeniai",
    num: "11",
    title: "YENI AI — VR AI INTERVIEW",
    category: "VIRTUAL REALITY • AI INTERVIEW",
    description: "Immersive VR AI-powered interview and skill-assessment experience with realistic virtual interviewers and performance analytics.",
    longDescription: "VR AI Interview is an immersive AI-powered interview and skill-assessment experience designed to simulate a realistic interview environment. Users enter a virtual interview space, interact with AI-powered virtual interviewers, answer technical and communication-based questions, and receive structured performance feedback at the end of the session.",
    problem: "Traditional interview preparation often lacks the realism and interaction of an actual interview — no realistic environment, interactive interviewer, consistent evaluation, communication-focused assessment, measurable data, or actionable feedback for improvement.",
    solution: "Created an immersive VR interview environment where users participate in a simulated interview with virtual AI interviewers. The system guides the user through the complete journey — from entering the virtual environment and answering questions to receiving performance insights and a personalized action plan, evaluating both technical and communication skills.",
    userFlow: ["ENTER VR EXPERIENCE", "MEET VIRTUAL INTERVIEWER", "START INTERVIEW", "ANSWER QUESTIONS", "TECHNICAL + COMMUNICATION ASSESSMENT", "PERFORMANCE EVALUATION", "VIEW INSIGHTS", "VIEW SUMMARY", "GET PERSONALIZED ACTION PLAN"],
    architecture: ["VR Environment (3D Interview Space)", "3D Avatars (Virtual Interviewers)", "Interactive UI (Panels, Navigation, Dashboards)", "Real-Time Interaction", "Assessment Visualization", "Analytics & Feedback Engine"],
    techStack: ["Virtual Reality", "AI Interview", "3D Avatars", "Interactive UI", "Skill Assessment", "Performance Analytics"],
    contribution: "VR / Interactive Experience Developer — developed the immersive VR interview environment, integrated virtual interviewer avatars, created interactive interview UI and question flow, implemented navigation and interactions, integrated technical and communication assessment screens, and built the performance dashboard, insights, summary, and action plan experiences.",
    challenges: "Creating a natural VR interview experience that feels immersive without overwhelming the user. Simplifying complex performance data (speaking pace, filler words, technical and communication scores) into a clear, structured feedback journey: Insights → Summary → Action Plan.",
    result: "An immersive, interactive, and measurable VR interview experience combining virtual interviewers, AI interaction, technical and communication assessment, and performance analytics — bridging the gap between practice and real-world interview readiness.",
    tags: ["Virtual Reality", "AI Interview", "3D Avatars", "Performance Analytics", "Interactive UI"],
    color: "#1d4ed8",
    previewImage: "/projects/yeniai.png",
    previewVideo: "/projects/yeniai.mp4",
  },
  {
    id: "nbgstarflex",
    num: "12",
    title: "NBG STARFLEX — INTERACTIVE 3D TOUCHSCREEN CONFIGURATOR",
    category: "INTERACTIVE 3D • TOUCHSCREEN",
    description: "Interactive 3D TouchScreen product configurator for NBG's STARFLEX industrial printing machine, with modular configuration and customer enquiry flow.",
    longDescription: "An interactive 3D TouchScreen product configurator designed to simplify the demonstration and configuration of NBG's STARFLEX industrial printing machine. The experience lets users explore the machine in 3D, understand individual production modules, build different machine configurations, view technical specifications, and move toward an enquiry through an engaging interactive interface.",
    problem: "Industrial printing machines consist of multiple complex modules and configurations that are difficult to explain through brochures, static images, technical drawings, or verbal presentations. Customers need to understand how components fit together and how configurations affect final dimensions and specifications.",
    solution: "Built an interactive 3D TouchScreen configurator where users navigate the complete STARFLEX machine, explore modules like Unwinder, Gravure, Flexo Printing, Web Guide, Corona, Delam-Relam, Cold Foil, Die Cutting, Turn Bar and Rewinder, and understand how components combine into a full production line — combining 3D visualization, module selection, feature information, specifications, and a customer enquiry journey.",
    userFlow: ["LAUNCH EXPERIENCE", "VIEW STARFLEX 3D MACHINE", "EXPLORE MACHINE MODULES", "SELECT MACHINE COMPONENTS", "CONFIGURE PRODUCTION LINE", "VIEW FEATURE INFORMATION", "VIEW MACHINE SPECIFICATIONS", "REVIEW FINAL CONFIGURATION", "PROCEED TO ENQUIRY", "REGISTER CUSTOMER DETAILS"],
    architecture: ["3D Product Visualization (Real-Time Rendering)", "Interactive TouchScreen Navigation", "Modular Configuration System", "3D Camera Interaction", "Interactive UI (Specs, Panels, Controls)", "Customer Journey (Enquiry / Registration)"],
    techStack: ["Interactive 3D", "TouchScreen", "Product Configurator", "3D Visualization", "Interactive UI"],
    contribution: "Interactive 3D / TouchScreen Experience Developer — developed the interactive 3D product visualization, integrated and optimized STARFLEX 3D assets, built machine navigation and module-based configuration, developed TouchScreen UI and 3D camera controls, integrated component information and feature callouts, and built the configuration summary and enquiry/registration flow.",
    challenges: "Creating an intuitive interactive experience for a highly complex industrial machine without overwhelming the user with modules and configuration possibilities. Maintaining accurate 3D positioning and smooth TouchScreen interaction while connecting technical product information with a customer-friendly sales journey.",
    result: "An interactive 3D TouchScreen product configurator that transforms the complex NBG STARFLEX printing machine into an engaging digital sales experience, letting customers explore components, configure the production line, review specifications, and move toward an enquiry through a single interface.",
    tags: ["Interactive 3D", "TouchScreen", "Product Configurator", "3D Visualization"],
    color: "#1e3a8a",
    previewImage: "/projects/nbg-starflex.png",
    previewVideo: "/projects/nbg-starflex.mp4",
  },
];

const filters = ["ALL", "AR / WEBAR", "VR", "INTERACTIVE", "WEB", "AI / DATA"];

const filterMap: Record<string, string[]> = {
  ALL: ["kiosk", "scanner", "handslash", "handmaze", "rbac", "foodshop", "teamportal", "shopledger", "tafear", "vrtraining", "yeniai", "nbgstarflex"],
  "AR / WEBAR": ["tafear"],
  VR: ["vrtraining", "yeniai"],
  INTERACTIVE: ["kiosk", "handslash", "handmaze", "tafear", "vrtraining", "yeniai", "nbgstarflex"],
  WEB: ["rbac", "foodshop", "kiosk", "teamportal", "shopledger"],
  "AI / DATA": ["kiosk", "scanner", "handslash", "handmaze", "yeniai"],
};

export default function SelectedWork() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);

  const visibleIds = filterMap[activeFilter] ?? projects.map((p) => p.id);
  const visible = projects.filter((p) => visibleIds.includes(p.id));

  return (
    <section id="work" className="relative py-28 px-6 lg:px-12" ref={ref}>
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(72,224,255,0.25), transparent)" }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
          <h2 className="heading-lg" style={{ color: "#0f172a" }}>
            Projects I&apos;ve built.
          </h2>
          <p className="mt-3 text-sm" style={{ color: "#475569" }}>
            Experiments, products and interactive experiences.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className="px-4 py-2 rounded-full text-[0.65rem] font-medium tracking-[0.15em] uppercase transition-all duration-200"
              style={{
                background: activeFilter === f ? "rgba(77,125,255,0.15)" : "rgba(15,23,42,0.04)",
                border: `1px solid ${activeFilter === f ? "rgba(77,125,255,0.4)" : "rgba(15,23,42,0.08)"}`,
                color: activeFilter === f ? "#3d63d1" : "#475569",
                boxShadow: activeFilter === f ? "0 0 15px rgba(77,125,255,0.15)" : "none",
              }}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((project, i) => {
            const isFeatured = i === 0 || i === 2;
            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`group glass-card rounded-2xl overflow-hidden cursor-pointer ${isFeatured ? "md:col-span-2 lg:col-span-1" : ""}`}
                style={{
                  border: "1px solid rgba(15,23,42,0.08)",
                  transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = `${project.color}35`;
                  el.style.transform = "translateY(-4px)";
                  el.style.boxShadow = `0 20px 60px rgba(15,23,42,0.1), 0 0 30px ${project.color}10`;
                  setHoveredProject(project);
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(15,23,42,0.08)";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                  setHoveredProject(null);
                }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Visual preview */}
                <div
                  className="relative h-40 overflow-hidden"
                  style={{
                    background: project.previewImage
                      ? "#0e1116"
                      : `linear-gradient(135deg, ${project.color}15 0%, rgba(7,8,11,0.8) 100%)`,
                  }}
                >
                  {project.previewImage ? (
                    <>
                      <Image
                        src={project.previewImage}
                        alt={`${project.title} preview`}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div
                        className="absolute inset-0"
                        style={{ background: "linear-gradient(to top, rgba(7,8,11,0.55) 0%, transparent 45%)" }}
                      />
                    </>
                  ) : (
                    <>
                      {/* Project illustration */}
                      <div className="absolute inset-0 grid-bg opacity-30" />
                      <div
                        className="absolute inset-0 flex items-center justify-center"
                        style={{
                          background: `radial-gradient(ellipse 60% 60% at 50% 50%, ${project.color}12 0%, transparent 70%)`,
                        }}
                      >
                        {(() => {
                          const Art = getProjectArt(project.id);
                          return <Art color={project.color} />;
                        })()}
                      </div>
                      <span
                        className="absolute bottom-2 right-3 text-3xl font-black opacity-[0.12] tracking-tighter select-none"
                        style={{ color: project.color }}
                      >
                        {project.num}
                      </span>
                    </>
                  )}
                  {/* Category pill */}
                  <div className="absolute top-3 left-3">
                    <span
                      className="text-[0.55rem] font-medium tracking-[0.15em] uppercase px-2 py-1 rounded-full"
                      style={{
                        background: "rgba(255,255,255,0.12)",
                        border: `1px solid ${project.color}55`,
                        color: "#ffffff",
                      }}
                    >
                      {project.category}
                    </span>
                  </div>
                  {project.liveDemo && (
                    <div className="absolute top-3 right-3">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: "#4ade80", boxShadow: "0 0 8px rgba(74,222,128,0.5)" }}
                        title="Live"
                      />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[0.55rem] tracking-[0.2em] mb-1" style={{ color: project.color }}>
                        {project.num}
                      </p>
                      <h3 className="text-sm font-bold tracking-tight leading-tight" style={{ color: "#0f172a" }}>
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs leading-relaxed line-clamp-2" style={{ color: "#475569" }}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 4).map((t) => (
                      <span key={t} className="tech-tag" style={{ fontSize: "0.55rem", padding: "0.15rem 0.5rem" }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <button
                      className="flex items-center gap-1 text-[0.6rem] font-medium tracking-wider transition-colors"
                      style={{ color: project.color }}
                      aria-label={`View case study for ${project.title}`}
                    >
                      VIEW CASE STUDY
                      <ArrowRight
                        size={10}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </button>
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1 text-[0.6rem] hover:text-[#3d63d1] transition-colors"
                        style={{ color: "#64748b" }}
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <ExternalLink size={10} /> LIVE
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Hover preview popup */}
      <HoverPreview active={!!hoveredProject}>
        {hoveredProject && (
          <div
            className="relative w-full max-w-3xl rounded-2xl overflow-hidden"
            style={{
              border: `1px solid ${hoveredProject.color}45`,
              boxShadow: `0 40px 100px rgba(0,0,0,0.5), 0 0 60px ${hoveredProject.color}20`,
            }}
          >
            {hoveredProject.previewImage ? (
              <Image
                src={hoveredProject.previewImage}
                alt={`${hoveredProject.title} large preview`}
                width={1200}
                height={800}
                className="w-full h-auto object-contain bg-[#0e1116]"
              />
            ) : (
              (() => {
                const Art = getProjectArt(hoveredProject.id);
                return (
                  <div
                    className="flex flex-col items-center justify-center gap-4 p-16 bg-[#0e1116]"
                    style={{ background: `linear-gradient(135deg, ${hoveredProject.color}15 0%, #0e1116 100%)` }}
                  >
                    <Art color={hoveredProject.color} />
                    <p className="text-sm text-center max-w-md text-white/70">{hoveredProject.description}</p>
                  </div>
                );
              })()
            )}
            <div className="absolute top-0 left-0 right-0 p-4" style={{ background: "linear-gradient(to bottom, rgba(7,8,11,0.75), transparent)" }}>
              <p className="text-sm font-bold tracking-wide text-white">{hoveredProject.title}</p>
            </div>
          </div>
        )}
      </HoverPreview>

      {/* Case study modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
