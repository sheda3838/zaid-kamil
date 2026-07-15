# Zaid Kamil - Software Engineer Portfolio

![Portfolio Preview](./public/og-image.jpg)

A modern, highly performant, and interactive personal portfolio showcasing my engineering journey, software projects, and technical skills. Built with the latest frontend technologies focusing on beautiful UI/UX, 3D background interactions, and lightning-fast performance.

## Key Features

- **Immersive 3D Experience:** Interactive WebGL background using Three.js and React Three Fiber.
- **Dynamic Theming:** Seamless Dark and Light mode transitions with Tailwind CSS and Framer Motion.
- **Scroll Spy Navigation:** Active section highlighting and smooth scrolling across the application.
- **Responsive Design:** Flawless layout across Desktop, Tablet, and Mobile screens.
- **Performance Optimized:** Lazy loading, chunk splitting, and highly optimized rendering targeting 95+ Lighthouse scores.
- **SEO Ready:** Fully implemented Open Graph tags, JSON-LD structured data, and search engine metadata.
- **Serverless Contact Form:** Spam-protected contact form powered by Formspree.

## Technology Stack

- **Framework:** React 19, Vite
- **Styling:** Tailwind CSS v4, clsx, tailwind-merge
- **Animations:** Framer Motion
- **3D Graphics:** Three.js, @react-three/fiber
- **Icons:** Lucide React
- **Deployment:** Vercel (Configured for CI/CD)

## Project Structure

```text
src/
├── assets/         # Static assets, images, and CV
├── components/     # React components organized by features
│   ├── background/ # Three.js background scene
│   ├── contact/    # Formspree contact form
│   ├── hero/       # Landing view and CTA
│   ├── navigation/ # Navbar and mobile drawer
│   ├── tech/       # Technology arsenal section
│   ├── timeline/   # Career and academic journey
│   └── work/       # Featured projects and client work
├── lib/            # Utility functions (cn, etc.)
└── index.css       # Global styles and Tailwind directives
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sheda3838/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`.

### Building for Production

To create an optimized production build:
```bash
npm run build
```
The output will be available in the `dist/` directory, ready to be deployed.

## Performance & Accessibility

This portfolio is rigorously audited for performance and accessibility:
- Zero unused dependencies.
- Split vendor chunking to maximize caching efficiency.
- Semantic HTML and ARIA labels on all interactive elements.
- Strict React hooks purity for reliable, flash-free rendering.

## License

This project is open-source and available under the MIT License.

## Contact

- **LinkedIn:** [linkedin.com/in/zaidkamil](https://www.linkedin.com/in/kamilzaid/)
- **GitHub:** [@sheda3838](https://github.com/sheda3838)
