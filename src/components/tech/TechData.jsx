import React from 'react';
import { featuredProjects, clientWork, engineeringPlayground } from "../work/ProjectsData";

// Icons
import iconJs from "../../assets/icons/JavaScript-logo.png";
import iconTs from "../../assets/icons/TypeScript-logo.png";
import iconNext from "../../assets/icons/nextjs.png";
import iconReact from "../../assets/icons/react.png";
import iconTailwind from "../../assets/icons/tailwind.png";
import iconNode from "../../assets/icons/nodejs.png";
import iconExpress from "../../assets/icons/express.png";
import iconLaravel from "../../assets/icons/laravel.png";
import iconPhp from "../../assets/icons/php.png";
import iconMongo from "../../assets/icons/mongodb.png";
import iconMysql from "../../assets/icons/mysql.png";
import iconTidb from "../../assets/icons/tidb-cloud.png";
import iconAuthjs from "../../assets/icons/authjs.png";
import iconPusher from "../../assets/icons/pusher.png";
import iconCloudinary from "../../assets/icons/cloudinary.png";
import iconLivewire from "../../assets/icons/livewire.png";
import iconOllama from "../../assets/icons/ollama.png";
import iconFormspree from "../../assets/icons/formspree.png";
import iconFramerMotion from "../../assets/icons/framer-motion.png";
import iconJetstream from "../../assets/icons/jetstream.png";
import iconJwt from "../../assets/icons/jwt.png";
import iconLucideReact from "../../assets/icons/lucide-react.png";
import iconPayhere from "../../assets/icons/payhere.png";
import iconReactRouter from "../../assets/icons/react-router.png";
import iconRecharts from "../../assets/icons/recharts.png";
import iconSanctum from "../../assets/icons/sanctum.png";
import iconStripe from "../../assets/icons/stripe.png";
import iconThreejs from "../../assets/icons/three-js.png";
import iconVite from "../../assets/icons/vite.png";
import iconAgile from "../../assets/icons/agile.png";
import iconGithub from "../../assets/icons/github.png";
import iconGit from "../../assets/icons/git.png";
import iconPostman from "../../assets/icons/postman.png";
import iconVercel from "../../assets/icons/vercel.png";
import iconRailway from "../../assets/icons/railway.png";
import iconCsharp from "../../assets/icons/csharp.png";
import iconPython from "../../assets/icons/python.png";
import iconRestApi from "../../assets/icons/rest-api.png";
import iconSqlServer from "../../assets/icons/sql-server.png";
import iconSqlite from "../../assets/icons/sqlite.png";

// Fallback lucide icons
import { Database, Code2, Globe } from "lucide-react";

const CATEGORY_MAP = {
  "Frontend": ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion", "Three.js", "React Router", "Vite", "React Icons", "HTML/CSS"],
  "Backend": ["Node.js", "Express", "Laravel", "PHP", "Livewire", "Auth.js", "JWT", "Sanctum", "Jetstream", "Python", "C#"],
  "Databases": ["MongoDB", "MySQL", "SQLite", "PostgreSQL", "SQL Server"],
  "AI & Machine Learning": ["Llama 3.2 3B", "OpenAI", "Prompt Engineering"],
  "Cloud & Deployment": ["Cloudinary", "Vercel", "Railway", "TiDB Cloud"],
  "Tools & Workflow": ["Pusher", "Stripe", "Lucide React", "Formspree", "Recharts", "Git", "GitHub", "Postman", "Agile", "PayHere", "REST API"]
};

// Normalize names
const normalizeTechName = (tech) => {
  if (tech.includes("React") && !["React Router", "React Icons", "Lucide React"].includes(tech)) return "React";
  if (tech === "Express.js") return "Express";
  if (tech.includes("Laravel")) return "Laravel";
  return tech;
};

// Map normalized name to Icon component or Image
const getTechIcon = (name) => {
  const map = {
    "React": <img src={iconReact} alt="React" className="w-5 h-5 object-contain" />,
    "Next.js": <img src={iconNext} alt="Next.js" className="w-5 h-5 object-contain bg-white rounded-full p-[2px]" />,
    "TypeScript": <img src={iconTs} alt="TypeScript" className="w-5 h-5 object-contain" />,
    "JavaScript": <img src={iconJs} alt="JavaScript" className="w-5 h-5 object-contain" />,
    "Tailwind CSS": <img src={iconTailwind} alt="Tailwind CSS" className="w-5 h-5 object-contain" />,
    "Node.js": <img src={iconNode} alt="Node.js" className="w-5 h-5 object-contain" />,
    "Express": <img src={iconExpress} alt="Express" className="w-5 h-5 object-contain bg-white rounded p-[2px]" />,
    "Laravel": <img src={iconLaravel} alt="Laravel" className="w-5 h-5 object-contain" />,
    "PHP": <img src={iconPhp} alt="PHP" className="w-5 h-5 object-contain" />,
    "Python": <img src={iconPython} alt="Python" className="w-5 h-5 object-contain" />,
    "C#": <img src={iconCsharp} alt="C#" className="w-5 h-5 object-contain" />,
    "MongoDB": <img src={iconMongo} alt="MongoDB" className="w-5 h-5 object-contain" />,
    "MySQL": <img src={iconMysql} alt="MySQL" className="w-5 h-5 object-contain bg-white rounded p-[2px]" />,
    "SQL Server": <img src={iconSqlServer} alt="SQL Server" className="w-5 h-5 object-contain" />,
    "SQLite": <img src={iconSqlite} alt="SQLite" className="w-5 h-5 object-contain" />,
    "TiDB Cloud": <img src={iconTidb} alt="TiDB Cloud" className="w-5 h-5 object-contain" />,
    "Auth.js": <img src={iconAuthjs} alt="Auth.js" className="w-5 h-5 object-contain" />,
    "Pusher": <img src={iconPusher} alt="Pusher" className="w-5 h-5 object-contain" />,
    "Cloudinary": <img src={iconCloudinary} alt="Cloudinary" className="w-5 h-5 object-contain" />,
    "Livewire": <img src={iconLivewire} alt="Livewire" className="w-5 h-5 object-contain" />,
    "Llama 3.2 3B": <img src={iconOllama} alt="Llama 3.2 3B" className="w-5 h-5 object-contain bg-white rounded-full p-[2px]" />,
    "Framer Motion": <img src={iconFramerMotion} alt="Framer Motion" className="w-5 h-5 object-contain" />,
    "Three.js": <img src={iconThreejs} alt="Three.js" className="w-5 h-5 object-contain bg-white rounded-full p-[2px]" />,
    "React Router": <img src={iconReactRouter} alt="React Router" className="w-5 h-5 object-contain" />,
    "Vite": <img src={iconVite} alt="Vite" className="w-5 h-5 object-contain" />,
    "JWT": <img src={iconJwt} alt="JWT" className="w-5 h-5 object-contain" />,
    "Sanctum": <img src={iconSanctum} alt="Sanctum" className="w-5 h-5 object-contain" />,
    "Jetstream": <img src={iconJetstream} alt="Jetstream" className="w-5 h-5 object-contain" />,
    "Stripe": <img src={iconStripe} alt="Stripe" className="w-5 h-5 object-contain" />,
    "Lucide React": <img src={iconLucideReact} alt="Lucide React" className="w-5 h-5 object-contain" />,
    "Formspree": <img src={iconFormspree} alt="Formspree" className="w-5 h-5 object-contain" />,
    "Recharts": <img src={iconRecharts} alt="Recharts" className="w-5 h-5 object-contain" />,
    "Git": <img src={iconGit} alt="Git" className="w-5 h-5 object-contain" />,
    "GitHub": <img src={iconGithub} alt="GitHub" className="w-5 h-5 object-contain bg-white rounded-full p-[1px]" />,
    "Postman": <img src={iconPostman} alt="Postman" className="w-5 h-5 object-contain" />,
    "Agile": <img src={iconAgile} alt="Agile" className="w-5 h-5 object-contain" />,
    "PayHere": <img src={iconPayhere} alt="PayHere" className="w-5 h-5 object-contain bg-white rounded p-[2px]" />,
    "REST API": <img src={iconRestApi} alt="REST API" className="w-5 h-5 object-contain" />,
    "Vercel": <img src={iconVercel} alt="Vercel" className="w-5 h-5 object-contain bg-white rounded-full p-[2px]" />,
    "Railway": <img src={iconRailway} alt="Railway" className="w-5 h-5 object-contain bg-white rounded-full p-[2px]" />
  };
  
  return map[name] || <Code2 className="w-5 h-5 text-gray-400" />;
};

export const getCategorizedTech = () => {
  const allProjects = [...featuredProjects, ...clientWork, ...engineeringPlayground];
  
  // 1. Extract and aggregate
  const techMap = {}; // name -> { name, projects: Set(), icon, category }
  
  allProjects.forEach(proj => {
    if (!proj.technologies) return;
    
    proj.technologies.forEach(rawTech => {
      const name = normalizeTechName(rawTech);
      
      if (!techMap[name]) {
        // Find category
        let category = "Tools & Workflow";
        for (const [cat, techs] of Object.entries(CATEGORY_MAP)) {
          if (techs.includes(name)) {
            category = cat;
            break;
          }
        }
        
        techMap[name] = {
          name,
          category,
          icon: getTechIcon(name),
          projects: new Set()
        };
      }
      
      techMap[name].projects.add(proj.title);
    });
  });

  // Inject Global Tools that might not be explicitly tied to a single project
  const globalTechs = [
    { name: "Git", projects: ["Version Control & Workflow"] },
    { name: "GitHub", projects: ["Code Hosting & CI/CD"] },
    { name: "Postman", projects: ["API Development & Testing"] },
    { name: "Agile", projects: ["Project Management"] },
    { name: "Vercel", projects: ["Frontend Hosting"] },
    { name: "Railway", projects: ["Backend Hosting"] },
    { name: "PayHere", projects: ["Payment Gateway"] },
    { name: "Python", projects: ["Scripts & Backend Services"] },
    { name: "C#", projects: ["Backend Development"] },
    { name: "SQL Server", projects: ["Enterprise Databases"] },
    { name: "REST API", projects: ["System Architecture & Integration"] }
  ];

  globalTechs.forEach(tech => {
    if (!techMap[tech.name]) {
        let category = "Tools & Workflow";
        for (const [cat, techs] of Object.entries(CATEGORY_MAP)) {
          if (techs.includes(tech.name)) {
            category = cat;
            break;
          }
        }
        
        techMap[tech.name] = {
          name: tech.name,
          category,
          icon: getTechIcon(tech.name),
          projects: new Set()
        };
    }
    tech.projects.forEach(p => techMap[tech.name].projects.add(p));
  });

  // 2. Format into Category Arrays
  const categories = Object.keys(CATEGORY_MAP).map(catName => ({
    name: catName,
    items: []
  }));

  Object.values(techMap).forEach(tech => {
    const cat = categories.find(c => c.name === tech.category);
    if (cat) {
      cat.items.push({
        ...tech,
        projects: Array.from(tech.projects)
      });
    }
  });

  // Remove empty categories
  return categories.filter(c => c.items.length > 0);
};
