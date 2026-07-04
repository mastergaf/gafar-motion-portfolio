import React, { useState } from "react";
import { motion } from "motion/react";
import { Menu, X, Play, Sun, Moon } from "lucide-react";

interface NavbarProps {
  onOpenReel: () => void;
  activeSection: string;
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

export default function Navbar({
  onOpenReel,
  activeSection,
  theme,
  onToggleTheme,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#showreel" },
    { label: "Work", href: "#selected-projects" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#connect" },
  ];

  return (
    <header 
      id="main-navbar"
      className="fixed top-0 left-0 w-full z-50 bg-transparent py-4 sm:py-6"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 flex items-center justify-between">
        {/* Logo / Brand */}
        <a href="#showreel" className="flex items-center select-none group">
          <span className="font-display font-bold text-sm tracking-[0.25em] text-white transition-opacity duration-300 hover:opacity-85">
            GAFAR TINUOYE
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`font-display text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 py-1 hover:text-white font-medium ${
                activeSection === item.href.substring(1)
                  ? "text-white"
                  : "text-[#737373]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Subtle, Understated Play Button & Theme Toggle */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={onOpenReel}
            className="group flex items-center gap-2 font-display text-[10px] tracking-[0.18em] text-white uppercase transition-opacity duration-300 hover:opacity-80 cursor-pointer font-medium"
          >
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            FEATURED PROJECT
          </button>

          <div className="w-[1px] h-3 bg-current opacity-15" />

          <button
            onClick={onToggleTheme}
            aria-label="Toggle Theme"
            className="p-1.5 text-[#A3A3A3] hover:text-white rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center hover:bg-white/5"
          >
            {theme === "dark" ? (
              <Moon size={13} className="stroke-[2.5px]" />
            ) : (
              <Sun size={13} className="stroke-[2.5px]" />
            )}
          </button>
        </div>

        {/* Mobile menu toggle with theme button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            aria-label="Toggle Theme"
            className="p-2 text-[#A3A3A3] hover:text-white rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center hover:bg-white/5"
          >
            {theme === "dark" ? (
              <Moon size={15} className="stroke-[2.5px]" />
            ) : (
              <Sun size={15} className="stroke-[2.5px]" />
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 -mr-2 text-[#A3A3A3] hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-18 left-0 w-full bg-[#161616]/95 backdrop-blur-xl border-b border-white/5 p-6 flex flex-col gap-6"
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-display text-xs tracking-widest uppercase py-2 border-b border-white/5 ${
                  activeSection === item.href.substring(1)
                    ? "text-white font-medium"
                    : "text-[#A3A3A3]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenReel();
            }}
            className="w-full flex items-center justify-center gap-2 bg-white hover:bg-neutral-200 text-black font-display text-[11px] tracking-wider font-medium py-3 rounded transition-colors duration-300 cursor-pointer"
          >
            <Play size={11} fill="currentColor" />
            FEATURED PROJECT
          </button>
        </motion.div>
      )}
    </header>
  );
}
