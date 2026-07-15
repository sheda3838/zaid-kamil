import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Mail, Download } from 'lucide-react';
import { ThemeToggle } from '../ThemeToggle';
import { cn } from '../../lib/utils';
import cvFile from '../../assets/cv/Zaid_Kamil_CV.pdf';
import logoImg from '../../assets/logo/logo.png';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Work', href: '#featured-work' },
  { label: 'Tech', href: '#tech-arsenal' },
  { label: 'Academic', href: '#academic-journey' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isClickScrolling = useRef(false);
  const scrollTimeout = useRef(null);

  const { scrollY, scrollYProgress } = useScroll();
  
  // Track scroll direction for hiding/showing navbar
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    
    // Check if scrolled past top
    if (latest > 40) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Hide navbar on scroll down, show on scroll up
    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  // Scroll spy (Intersection Observer)
  useEffect(() => {
    const observerOptions = {
      root: null,
      // Create a 20% high band in the middle of the screen
      rootMargin: '-40% 0px -40% 0px', 
      threshold: 0
    };

    const observerCallback = (entries) => {
      // Ignore observer updates while a smooth scroll is active
      if (isClickScrolling.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    NAV_LINKS.forEach((link) => {
      const id = link.href.substring(1);
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll handler
  const handleScroll = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const targetId = href.substring(1);
    
    // Immediately set active state for instant feedback
    setActiveSection(targetId);
    
    // Lock the observer during smooth scroll to prevent intermediate sections from flickering
    isClickScrolling.current = true;
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 1000);

    // Update URL history naturally without jumping
    window.history.pushState(null, '', href);

    // Slight delay to allow mobile menu to close smoothly before scrolling
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  // Close mobile menu on ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Desktop Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full pt-4 px-4 pointer-events-none"
      >
        <div 
          className={cn(
            "pointer-events-auto flex items-center justify-between w-full max-w-7xl px-3 py-2.5 rounded-full border transition-all duration-300",
            isScrolled 
              ? "bg-background/70 backdrop-blur-xl border-border/50 shadow-lg shadow-black/5" 
              : "bg-transparent border-transparent"
          )}
        >
          {/* Scroll Progress Bar - absolute inside the pill */}
          <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-full overflow-hidden opacity-50">
            <motion.div 
              className="h-full bg-gradient-to-r from-blue-600 to-cyan-500"
              style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
            />
          </div>

          {/* Logo */}
          <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="flex items-center gap-2 group ml-2 relative z-10">
            <img 
              src={logoImg} 
              alt="Logo" 
              className="w-10 h-10 object-contain rounded-full shadow-sm group-hover:scale-105 transition-transform duration-300"
            />
            <span className="font-semibold text-foreground tracking-tight hidden sm:block mr-2">Zaid Kamil</span>
          </a>

          {/* Center Links (Desktop only) */}
          <nav className="hidden lg:flex items-center gap-1 bg-muted/30 p-1.5 rounded-full border border-border/40 relative z-10 backdrop-blur-md">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={cn(
                  "relative px-4 py-1.5 rounded-full text-sm transition-colors duration-300",
                  activeSection === link.href.substring(1)
                    ? "text-blue-600 dark:text-blue-400 font-bold"
                    : "text-muted-foreground hover:text-foreground font-medium"
                )}
              >
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.2)] rounded-full -z-10 border border-blue-500/30"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <motion.span 
                  animate={{ scale: activeSection === link.href.substring(1) ? 1.05 : 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className="relative z-10 inline-block"
                >
                  {link.label}
                </motion.span>
              </a>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3 relative z-10">
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>
            <a 
              href={cvFile} 
              download 
              className="hidden md:flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:-translate-y-0.5 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </a>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2.5 rounded-full bg-muted/50 text-foreground hover:bg-muted transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[60]"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[320px] bg-background/95 backdrop-blur-xl border-l border-border/50 shadow-2xl z-[70] flex flex-col p-6"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <img 
                    src={logoImg} 
                    alt="Logo" 
                    className="w-12 h-12 object-contain rounded-full shadow-sm"
                  />
                  <span className="font-semibold text-foreground tracking-tight text-lg">Zaid Kamil</span>
                </div>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full bg-muted/50 hover:bg-muted text-foreground transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-2 mb-8 flex-1 overflow-y-auto pr-2">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className={cn(
                      "relative px-4 py-3 rounded-xl text-lg transition-colors overflow-hidden",
                      activeSection === link.href.substring(1)
                        ? "text-blue-600 dark:text-blue-400 font-bold"
                        : "text-foreground hover:bg-muted/50 font-medium"
                    )}
                  >
                    {activeSection === link.href.substring(1) && (
                      <motion.div
                        layoutId="mobileActiveNavBackground"
                        className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.2)] border border-blue-500/30 rounded-xl -z-10"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <motion.span
                      animate={{ scale: activeSection === link.href.substring(1) ? 1.02 : 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      className="relative z-10 inline-block"
                    >
                      {link.label}
                    </motion.span>
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-6 pt-4">
                <div className="flex items-center justify-between px-4">
                  <span className="text-sm font-medium text-muted-foreground">Theme</span>
                  <ThemeToggle />
                </div>
                
                <a 
                  href={cvFile} 
                  download 
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white w-full py-3.5 rounded-xl font-semibold hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:-translate-y-0.5 transition-all"
                >
                  <Download className="w-5 h-5" />
                  <span>Download CV</span>
                </a>

                <div className="flex items-center justify-center gap-4 pt-4 border-t border-border/30">
                  <a href="https://github.com/sheda3838" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-muted/50 text-muted-foreground hover:text-blue-500 hover:bg-blue-500/10 transition-colors">
                    <GithubIcon className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/kamilzaid/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-muted/50 text-muted-foreground hover:text-blue-500 hover:bg-blue-500/10 transition-colors">
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                  <a href="https://instagram.com/__.sheda.__" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-muted/50 text-muted-foreground hover:text-blue-500 hover:bg-blue-500/10 transition-colors">
                    <InstagramIcon className="w-5 h-5" />
                  </a>
                  <a href="mailto:kamilzaid53@gmail.com" className="p-3 rounded-full bg-muted/50 text-muted-foreground hover:text-blue-500 hover:bg-blue-500/10 transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
