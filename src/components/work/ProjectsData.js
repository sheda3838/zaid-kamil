// Roomy
import roomyHome from "../../assets/projects/roomy/home-page.png"
import roomyChat from "../../assets/projects/roomy/chat-system.png"
import roomyCompat from "../../assets/projects/roomy/compatibilty-view.png"
import roomyDiscover from "../../assets/projects/roomy/discover-rooms.png"
import roomyMobile from "../../assets/projects/roomy/mobile-home.jpeg"
import roomyProfile from "../../assets/projects/roomy/my-profile.png"

// Mia
import miaAdmin from "../../assets/projects/mia-e-commerce/admin_dashboard.png"
import miaChat from "../../assets/projects/mia-e-commerce/chat_interface.png"
import miaHome from "../../assets/projects/mia-e-commerce/home_page.png"

// TuteSkillz
import tsBook from "../../assets/projects/tuteskillz/book-session.png"
import tsHome from "../../assets/projects/tuteskillz/home.png"
import tsMedium from "../../assets/projects/tuteskillz/medium.png"
import tsSession from "../../assets/projects/tuteskillz/session-details.png"
import tsTutors from "../../assets/projects/tuteskillz/tutors.png"

// Unique Palette
import upAbout from "../../assets/projects/u_palette/about.png"
import upGallery from "../../assets/projects/u_palette/gallery.png"
import upHome from "../../assets/projects/u_palette/home.png"
import upPayment from "../../assets/projects/u_palette/payment.png"

// Client Work
import dfHero from "../../assets/projects/dream-flower/hero.png"
import dfAbout from "../../assets/projects/dream-flower/about.png"
import dfGallery from "../../assets/projects/dream-flower/gallery.png"
import dfServices from "../../assets/projects/dream-flower/services.png"
import dfTestimonials from "../../assets/projects/dream-flower/testimonials.png"

import agHero from "../../assets/projects/authentic-gems/hero.png"
import agAbout from "../../assets/projects/authentic-gems/about.png"
import agBuyers from "../../assets/projects/authentic-gems/buyers.png"
import agCertifications from "../../assets/projects/authentic-gems/certifications.png"
import agCollection from "../../assets/projects/authentic-gems/collection.png"

import jbHero from "../../assets/projects/jungle-beach/hero.png"
import jbAbout from "../../assets/projects/jungle-beach/about.png"
import jbActivities from "../../assets/projects/jungle-beach/activities.png"
import jbMeals from "../../assets/projects/jungle-beach/meals.png"
import jbMemories from "../../assets/projects/jungle-beach/memories.png"

import ytHero from "../../assets/projects/yathama/hero.png"
import ytAbout from "../../assets/projects/yathama/about.png"
import ytMission from "../../assets/projects/yathama/mission.png"
import ytNews from "../../assets/projects/yathama/news.png"
import ytProjects from "../../assets/projects/yathama/projects.png"

import flHero from "../../assets/projects/fit-life/hero.png"
import flAbout from "../../assets/projects/fit-life/about.png"
import flPricing from "../../assets/projects/fit-life/pricing.png"
import flServices from "../../assets/projects/fit-life/services.png"
import flTrainers from "../../assets/projects/fit-life/trainers.png"

// Experiments
import crmDash from "../../assets/projects/crm/dashboard.png"
import crmDetails from "../../assets/projects/crm/details.png"
import crmLeads from "../../assets/projects/crm/leads.png"
import crmLogin from "../../assets/projects/crm/login.png"

import srBoard from "../../assets/projects/service-request-board/job_board.png"
import srLogin from "../../assets/projects/service-request-board/login.png"
import srNew from "../../assets/projects/service-request-board/new_job.png"
import srRegister from "../../assets/projects/service-request-board/register.png"

import taFeed from "../../assets/projects/travel-app/feed.png"
import taModal from "../../assets/projects/travel-app/modal.png"
import taMyExperiences from "../../assets/projects/travel-app/myExperiences.png"

export const featuredProjects = [
  {
    id: "roomy",
    type: "hero",
    title: "Roomy",
    badges: ["FLAGSHIP", "FULL STACK"],
    description: "Roomy is a roommate and room discovery platform designed to help users find compatible roommates and suitable accommodations based on lifestyle preferences, budget, location, and living habits.",
    technologies: ["Next.js", "React", "TypeScript", "MongoDB", "Auth.js", "Pusher", "Cloudinary", "Tailwind CSS"],
    features: ["Compatibility-Based Matching", "Room Discovery", "Roommate Discovery", "Real-Time Messaging", "Smart Filtering"],
    images: [roomyHome, roomyChat, roomyCompat, roomyDiscover, roomyProfile],
    mobileImage: roomyMobile,
    github: "https://github.com/sheda3838/roomy.git",
    liveDemo: "https://roomy-seven-drab.vercel.app/",
    challenges: "The main challenge was solving the 'human element' in shared living. Superficial listings ignore lifestyle compatibility which leads to conflicts. I engineered a proprietary, weighted scoring algorithm to match users based on sleep schedules, cleanliness, guest policies, and budget overlaps.",
    learned: "Mastered Server-First Architecture using Next.js App Router and Server Actions. Implemented robust real-time communication via Pusher WebSockets without polling, and managed complex relational schemas in MongoDB using Mongoose."
  },
  {
    id: "mia",
    type: "featured",
    title: "Mia",
    badges: ["AI PROJECT"],
    description: "A modern, fully functional e-commerce platform integrated with Llama 3, featuring a smart shopping assistant that understands natural language, searches products, tracks orders, and manages cancellations.",
    technologies: ["React 18", "Node.js", "Express.js", "SQLite", "Llama 3.2 3B", "Tailwind CSS"],
    features: ["Natural Language Search", "Dynamic Suggestions", "Order Management", "Contextual Memory", "Intent-Based Tagging"],
    images: [miaHome, miaChat, miaAdmin],
    github: "https://github.com/sheda3838/ecommerce-chatbot.git",
    challenges: "Bridging the gap between unstructured LLM text and structured database actions. I developed an 'Intent-Based Tagging' system where the AI injects tags like [SEARCH] or [STOCK_CHECK] into its output, which the backend then parses to execute the correct SQL queries.",
    learned: "Gained significant experience in running local AI models via Ollama, prompt engineering to force deterministic outputs, and building streaming UIs for a responsive chat experience."
  },
  {
    id: "tuteskillz",
    type: "featured",
    title: "TuteSkillz",
    badges: ["ACADEMIC", "MERN STACK"],
    description: "A full-stack platform connecting middle school students with verified undergraduate or recently graduated tutors for one-to-one tutoring sessions tailored to each student's needs.",
    technologies: ["React.js", "Node.js", "Express.js", "MySQL", "TiDB Cloud"],
    features: ["Role-Based Access Control", "Session Requests & Scheduling", "Payment Integration", "Live Sessions", "File Uploads"],
    images: [tsHome, tsTutors, tsSession, tsBook, tsMedium],
    github: "https://github.com/sheda3838/tuteskillz.git",
    challenges: "Building a shared dashboard ecosystem that caters correctly to three different roles (Students, Tutors, and Admins) while ensuring secure session management and access control. Additionally, embedding live sessions and managing seamless payment workflows.",
    learned: "Strengthened my full-stack capabilities by integrating a MERN front-end with a MySQL relational database. Gained hands-on experience with regex validation, handling multipart file uploads, and securely connecting multi-user workflows."
  },
  {
    id: "unique-palette",
    type: "featured",
    title: "Unique Palette",
    badges: ["ACADEMIC", "LARAVEL"],
    description: "An elegant e-commerce platform for art enthusiasts featuring a custom cart system, secure checkout, and a robust admin panel to manage artworks and orders.",
    technologies: ["Laravel 12", "PHP", "MySQL", "Livewire", "Jetstream", "Sanctum", "Tailwind CSS"],
    features: ["Stripe Payment Gateway", "OAuth Integration", "Token-Based API Auth", "Role-Based Access", "Automatic XSS & CSRF Protection"],
    images: [upHome, upGallery, upAbout, upPayment],
    github: "https://github.com/sheda3838/unique-palette",
    liveDemo: "http://lucky-eagerness-production.up.railway.app",
    challenges: "Migrating a legacy raw PHP application into the modern Laravel 12 ecosystem. Ensuring zero security vulnerabilities by rigorously manually testing for SQL Injection, XSS, and CSRF vectors, and integrating Stripe without compromising PCI compliance.",
    learned: "Deepened my understanding of the MVC pattern, robust token-based API authentication with Sanctum, and reactive frontends utilizing Laravel Livewire without heavy client-side JavaScript."
  }
];

export const clientWork = [
  {
    id: "dream-flower",
    title: "Dream Flower",
    badges: ["CLIENT WORK"],
    description: "A beautiful portfolio and services website for a boutique florist.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    features: ["Responsive Design", "Service Catalog", "Testimonial Carousel", "Contact Form"],
    images: [dfHero, dfAbout, dfServices, dfGallery, dfTestimonials],
    liveDemo: "https://example.com"
  },
  {
    id: "authentic-gems",
    title: "Authentic Gems",
    badges: ["CLIENT WORK"],
    description: "A premium catalog showcasing high-value gemstones to international buyers.",
    technologies: ["Next.js", "Tailwind CSS", "Stripe"],
    features: ["Product Catalog", "Secure Checkout", "International Shipping Integration", "High-Resolution Image Gallery"],
    images: [agHero, agAbout, agCollection, agCertifications, agBuyers],
    liveDemo: "https://example.com"
  },
  {
    id: "jungle-beach",
    title: "Jungle Beach",
    badges: ["CLIENT WORK"],
    description: "An immersive landing page for a tropical resort, featuring booking capabilities.",
    technologies: ["Vue.js", "Nuxt.js", "Tailwind CSS"],
    features: ["Room Booking System", "Activity Catalog", "Interactive Map", "Multilingual Support"],
    images: [jbHero, jbAbout, jbActivities, jbMeals, jbMemories],
    liveDemo: "https://example.com"
  },
  {
    id: "orphanage",
    title: "Orphanage (Yathama)",
    badges: ["CLIENT WORK"],
    description: "A charity website enabling easy donations and raising awareness.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    features: ["Donation Portal", "Blog & News Section", "Volunteer Registration", "Project Showcases"],
    images: [ytHero, ytAbout, ytMission, ytProjects, ytNews],
    liveDemo: "https://example.com"
  },
  {
    id: "gym-website",
    title: "Gym Website (Fit Life)",
    badges: ["CLIENT WORK"],
    description: "A high-conversion landing page for a local gym including membership tiers.",
    technologies: ["Next.js", "Tailwind CSS", "PostgreSQL"],
    features: ["Membership Registration", "Class Scheduling", "Trainer Profiles", "Member Dashboard"],
    images: [flHero, flAbout, flServices, flTrainers, flPricing],
    liveDemo: "https://example.com"
  }
];

export const engineeringPlayground = [
  {
    id: "crm-app",
    title: "CRM Application",
    badges: ["EXPERIMENT"],
    description: "A custom dashboard for tracking leads and sales pipelines.",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    features: ["Lead Tracking", "Sales Pipeline", "Authentication", "Real-Time Analytics"],
    learned: "Gained experience in state management and real-time database syncing with Firebase.",
    images: [crmDash, crmLeads, crmDetails, crmLogin],
    github: "https://github.com"
  },
  {
    id: "service-board",
    title: "Service Request Board",
    badges: ["EXPERIMENT"],
    description: "A job board architecture allowing users to post and bid on local tasks.",
    technologies: ["Next.js", "PostgreSQL", "Prisma"],
    features: ["Job Posting", "Bidding System", "User Roles", "Database Migrations"],
    learned: "Learned how to design relational databases using Prisma ORM and Next.js Server Actions.",
    images: [srBoard, srNew, srRegister, srLogin],
    github: "https://github.com"
  },
  {
    id: "travel-app",
    title: "Travel App",
    badges: ["EXPERIMENT", "MERN STACK"],
    description: "A localized marketplace platform where authenticated users can publish, browse, and search unique travel experiences globally.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    features: ["JWT Authentication", "Experience Posting", "Global Public Feed", "Full-Text Search", "Pagination"],
    learned: "Solidified full-stack MERN architecture, robust stateless authentication via JWT, Axios interceptors, and efficient MongoDB document relations using Mongoose.populate().",
    images: [taFeed, taMyExperiences, taModal],
    github: "https://github.com/sheda3838/travel-app.git"
  }
];
