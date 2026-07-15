import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Loader2,
  ArrowRight,
} from "lucide-react";
import { cn } from "../../lib/utils";
import profileImg from "../../assets/profile/Me.png";

const FORM_ENDPOINT = "https://formspree.io/f/xdaqkvvz";

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const ROTATING_ROLES = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
];

const SOCIAL_LINKS = [
  { icon: GithubIcon, href: "https://github.com/sheda3838", label: "GitHub" },
  {
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/kamilzaid/",
    label: "LinkedIn",
  },
  {
    icon: InstagramIcon,
    href: "https://instagram.com/__.sheda.__",
    label: "Instagram",
  },
];

const AVAILABILITY = [
  "Software Engineering Internships",
  "Freelance Projects",
  "Collaborations",
];

export function ContactSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isCopied, setIsCopied] = useState(false);
  const [formState, setFormState] = useState("idle"); // idle, loading, success, error
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  // Rotate roles
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROTATING_ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("kamilzaid53@gmail.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const validateForm = (formData) => {
    const newErrors = {};
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    if (!name || name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!subject || subject.trim().length < 2) {
      newErrors.subject = "Subject is required.";
    }
    if (!message || message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    return newErrors;
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();
    if (formState === "loading") return;

    const formData = new FormData(e.target);
    const formErrors = validateForm(formData);

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setErrors({});
    setFormState("loading");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (response.ok) {
        setFormState("success");
        formRef.current?.reset();
        setTimeout(() => setFormState("idle"), 5000);
      } else {
        setFormState("error");
      }
    } catch (error) {
      console.error("Formspree submission failed:", error);
      setFormState("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex flex-col justify-center items-center py-24 lg:py-32 overflow-hidden z-10"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col h-full lg:justify-center">
        {/* Intro */}
        <div className="w-full flex flex-col items-start lg:items-center text-left lg:text-center mb-12 lg:mb-16 mt-0 lg:mt-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6 }}
            className="text-sm md:text-base text-blue-500 font-medium mb-4 italic"
          >
            "You've seen my journey, explored my projects, and discovered the
            technologies I work with. Now let's build something meaningful
            together."
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground mb-4"
          >
            Let's Build Something Amazing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-sm md:text-base max-w-2xl"
          >
            Whether you have an internship opportunity, an exciting project, or
            simply want to connect, I'd love to hear from you.
          </motion.p>
        </div>

        {/* 2-Column Layout */}
        <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          {/* Left Column - Developer Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex flex-col gap-6"
          >
            {/* Glass Profile Card */}
            <div className="relative p-6 lg:p-8 rounded-[2rem] border border-border/40 bg-background/95 shadow-xl hover:shadow-blue-500/10 transition-shadow duration-500 flex flex-col h-full overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-500/10 to-transparent -z-10" />

              <div className="flex items-center gap-6 mb-6">
                <div className="relative w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-full overflow-hidden border-2 border-blue-500/30">
                  <img
                    src={profileImg}
                    alt="Zaid Kamil"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-foreground mb-1">
                    Zaid Kamil
                  </h3>
                  <div className="h-6 overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={roleIndex}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500"
                      >
                        {ROTATING_ROLES[roleIndex]}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] uppercase tracking-widest font-bold text-emerald-500">
                      Open to Internship
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                Passionate about building modern web applications, solving
                real-world problems, and continuously learning new technologies.
              </p>

              {/* Contact Actions */}
              <div className="flex flex-col gap-3 flex-1 justify-center">
                <button
                  onClick={handleCopyEmail}
                  className="group flex items-center justify-between p-3 md:p-4 rounded-xl bg-muted/30 hover:bg-blue-500/10 border border-transparent hover:border-blue-500/20 transition-all duration-300 relative overflow-hidden cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-500" />
                    <span className="text-sm font-semibold text-foreground group-hover:text-blue-500 transition-colors">
                      kamilzaid53@gmail.com
                    </span>
                  </div>
                  <span className="text-xs font-bold text-muted-foreground group-hover:text-blue-500 transition-colors">
                    Copy
                  </span>

                  {/* Toast */}
                  <AnimatePresence>
                    {isCopied && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="absolute inset-0 flex items-center justify-center bg-blue-500 text-white text-sm font-bold z-10"
                      >
                        Email copied!
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>

                <a
                  href="tel:+94721426157"
                  className="group flex items-center gap-3 p-3 md:p-4 rounded-xl bg-muted/30 hover:bg-blue-500/10 border border-transparent hover:border-blue-500/20 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-semibold text-foreground group-hover:text-blue-500 transition-colors">
                    +94 72 142 6157
                  </span>
                </a>

                <a
                  href="https://wa.me/94721426157?text=Hi%20Zaid%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-3 md:p-4 rounded-xl bg-muted/30 hover:bg-blue-500/10 border border-transparent hover:border-blue-500/20 transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5 text-blue-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span className="text-sm font-semibold text-foreground group-hover:text-blue-500 transition-colors">
                    WhatsApp
                  </span>
                </a>

                <div className="flex items-center gap-3 p-3 md:p-4 rounded-xl bg-muted/30">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-semibold text-foreground">
                    Colombo, Sri Lanka
                  </span>
                </div>
              </div>

              {/* Socials & Availability */}
              <div className="mt-8 pt-6 border-t border-border/50 flex flex-col sm:flex-row gap-6 items-center justify-between">
                <div className="flex gap-4">
                  {SOCIAL_LINKS.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full flex items-center justify-center bg-muted/50 hover:bg-blue-500 hover:text-white text-muted-foreground transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>

                <div className="flex flex-col items-end gap-2 text-right">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                    Currently Available For
                  </span>
                  <div className="flex flex-wrap justify-end gap-2">
                    {AVAILABILITY.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-1 text-[10px] font-bold bg-background border border-border shadow-sm rounded-md text-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 flex flex-col h-full"
          >
            <div className="relative p-6 lg:p-10 rounded-[2rem] border border-border/40 bg-background/95 shadow-xl flex flex-col h-full w-full overflow-hidden">
              <h3 className="text-2xl font-black text-foreground mb-8">
                Send a Message
              </h3>

              <AnimatePresence>
                {formState === "success" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-background/95 backdrop-blur-md text-center px-6"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                      className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6"
                    >
                      <CheckCircle className="w-8 h-8 text-emerald-500" />
                    </motion.div>
                    <motion.h4
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-xl font-black text-foreground mb-2"
                    >
                      Message Sent Successfully
                    </motion.h4>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-sm text-muted-foreground mb-1"
                    >
                      Thanks for reaching out!
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-sm text-muted-foreground"
                    >
                      I'll get back to you as soon as possible.
                    </motion.p>
                  </motion.div>
                )}
                {formState === "error" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-background/95 backdrop-blur-md text-center px-6"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring" }}
                      className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-6"
                    >
                      <svg
                        className="w-8 h-8 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                    </motion.div>
                    <motion.h4
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-xl font-black text-foreground mb-2"
                    >
                      Something went wrong.
                    </motion.h4>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-sm text-muted-foreground mb-6"
                    >
                      Please try again or contact me directly.
                    </motion.p>
                    <button
                      type="button"
                      onClick={() => setFormState("idle")}
                      className="px-6 py-2 bg-muted/50 hover:bg-muted rounded-xl text-sm font-bold transition-colors"
                    >
                      Go Back
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <form
                ref={formRef}
                onSubmit={handleSendEmail}
                noValidate
                className="flex flex-col gap-5 flex-1 w-full relative"
              >
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder=" "
                    disabled={formState === "loading"}
                    className={cn(
                      "peer w-full bg-muted/20 border rounded-xl px-4 pt-6 pb-2 text-foreground focus:outline-none transition-all",
                      errors.name
                        ? "border-red-500/50 focus:border-red-500 focus:bg-red-500/5"
                        : "border-border/50 focus:border-blue-500/50 focus:bg-blue-500/5 disabled:opacity-50",
                    )}
                  />
                  <label
                    htmlFor="name"
                    className={cn(
                      "absolute left-4 top-4 text-xs font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:normal-case peer-placeholder-shown:font-medium peer-focus:top-2 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase cursor-text",
                      errors.name
                        ? "text-red-400 peer-focus:text-red-500"
                        : "text-muted-foreground peer-focus:text-blue-500",
                    )}
                  >
                    Full Name
                  </label>
                  <AnimatePresence>
                    {errors.name && (
                      <motion.span
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute -bottom-4 right-2 text-[10px] text-red-400 font-bold tracking-wider"
                      >
                        {errors.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder=" "
                    disabled={formState === "loading"}
                    className={cn(
                      "peer w-full bg-muted/20 border rounded-xl px-4 pt-6 pb-2 text-foreground focus:outline-none transition-all",
                      errors.email
                        ? "border-red-500/50 focus:border-red-500 focus:bg-red-500/5"
                        : "border-border/50 focus:border-blue-500/50 focus:bg-blue-500/5 disabled:opacity-50",
                    )}
                  />
                  <label
                    htmlFor="email"
                    className={cn(
                      "absolute left-4 top-4 text-xs font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:normal-case peer-placeholder-shown:font-medium peer-focus:top-2 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase cursor-text",
                      errors.email
                        ? "text-red-400 peer-focus:text-red-500"
                        : "text-muted-foreground peer-focus:text-blue-500",
                    )}
                  >
                    Email Address
                  </label>
                  <AnimatePresence>
                    {errors.email && (
                      <motion.span
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute -bottom-4 right-2 text-[10px] text-red-400 font-bold tracking-wider"
                      >
                        {errors.email}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>

                <div className="relative group">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    placeholder=" "
                    disabled={formState === "loading"}
                    className={cn(
                      "peer w-full bg-muted/20 border rounded-xl px-4 pt-6 pb-2 text-foreground focus:outline-none transition-all",
                      errors.subject
                        ? "border-red-500/50 focus:border-red-500 focus:bg-red-500/5"
                        : "border-border/50 focus:border-blue-500/50 focus:bg-blue-500/5 disabled:opacity-50",
                    )}
                  />
                  <label
                    htmlFor="subject"
                    className={cn(
                      "absolute left-4 top-4 text-xs font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:normal-case peer-placeholder-shown:font-medium peer-focus:top-2 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase cursor-text",
                      errors.subject
                        ? "text-red-400 peer-focus:text-red-500"
                        : "text-muted-foreground peer-focus:text-blue-500",
                    )}
                  >
                    Subject
                  </label>
                  <AnimatePresence>
                    {errors.subject && (
                      <motion.span
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute -bottom-4 right-2 text-[10px] text-red-400 font-bold tracking-wider"
                      >
                        {errors.subject}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>

                <div className="relative group flex-1">
                  <textarea
                    name="message"
                    id="message"
                    required
                    placeholder=" "
                    disabled={formState === "loading"}
                    className={cn(
                      "peer w-full h-full min-h-[120px] bg-muted/20 border rounded-xl px-4 pt-6 pb-2 text-foreground focus:outline-none transition-all resize-none",
                      errors.message
                        ? "border-red-500/50 focus:border-red-500 focus:bg-red-500/5"
                        : "border-border/50 focus:border-blue-500/50 focus:bg-blue-500/5 disabled:opacity-50",
                    )}
                  />
                  <label
                    htmlFor="message"
                    className={cn(
                      "absolute left-4 top-4 text-xs font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:normal-case peer-placeholder-shown:font-medium peer-focus:top-2 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase cursor-text",
                      errors.message
                        ? "text-red-400 peer-focus:text-red-500"
                        : "text-muted-foreground peer-focus:text-blue-500",
                    )}
                  >
                    Message
                  </label>
                  <AnimatePresence>
                    {errors.message && (
                      <motion.span
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute -bottom-4 right-2 text-[10px] text-red-400 font-bold tracking-wider"
                      >
                        {errors.message}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 p-[1px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-80 transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:scale-[1.01] mt-auto"
                >
                  <div className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-8 text-sm font-bold text-white transition-all">
                    <AnimatePresence mode="wait">
                      {formState === "idle" && (
                        <motion.div
                          key="idle"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center gap-2"
                        >
                          Send Message
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </motion.div>
                      )}
                      {formState === "loading" && (
                        <motion.div
                          key="loading"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="flex items-center gap-2"
                        >
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </button>

                <p className="text-center text-[11px] text-muted-foreground/60 font-semibold uppercase tracking-widest mt-1">
                  Usually replies within 24 hours
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
