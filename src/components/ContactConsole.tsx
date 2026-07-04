import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function ContactConsole() {
  return (
    <section
      id="connect"
      className="relative pt-40 pb-20 px-6 sm:px-12 md:px-16 bg-[#050505] overflow-hidden border-t border-white/5 flex flex-col items-center justify-between min-h-[80vh]"
    >
      {/* Subtle, soft ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/[0.015] blur-[150px] rounded-full pointer-events-none" />

      {/* Main Centered Content */}
      <div className="max-w-2xl mx-auto flex flex-col items-center justify-center text-center my-auto space-y-16">
        
        {/* Header Block */}
        <div className="space-y-6">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-mono text-[10px] text-[#737373] tracking-[0.3em] uppercase block"
          >
            Get in Touch
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-medium text-4xl sm:text-6xl text-white tracking-tight"
          >
            Let's Work Together
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#888888] font-display font-light text-base sm:text-lg max-w-lg mx-auto leading-relaxed"
          >
            Need my motion design and video editing expertise on your next project? I'd love to hear about it.
          </motion.p>
        </div>

        {/* Contact Links Block */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16 w-full max-w-md pt-4">
          
          {/* Instagram Item */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center space-y-3"
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#525252]">Instagram</span>
            <a
              href="https://www.instagram.com/mastergaf_?igsh=MW95cXpxeTU3MGl1cQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-1.5 font-display text-base sm:text-lg text-white/80 hover:text-white transition-all duration-300 ease-out"
            >
              <span className="relative">
                @mastergaf_
                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white/20 group-hover:bg-white scale-x-100 origin-left transition-transform duration-300" />
              </span>
              <ArrowUpRight size={14} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </a>
          </motion.div>

          {/* Email Item */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center space-y-3"
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#525252]">Email</span>
            <a
              href="mailto:gafarolarenwaju22@gmail.com"
              className="group relative flex items-center gap-1.5 font-display text-base sm:text-lg text-white/80 hover:text-white transition-all duration-300 ease-out"
            >
              <span className="relative text-ellipsis overflow-hidden whitespace-nowrap max-w-[280px] sm:max-w-xs">
                gafarolarenwaju22@gmail.com
                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white/20 group-hover:bg-white scale-x-100 origin-left transition-transform duration-300" />
              </span>
              <ArrowUpRight size={14} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0" />
            </a>
          </motion.div>

        </div>

      </div>

      {/* Cinematic Studio Footer */}
      <div className="w-full max-w-7xl mx-auto pt-20 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6 font-display text-[10px] text-[#525252]">
        <div className="space-y-1 text-center sm:text-left">
          <p className="text-[#888888] font-medium uppercase tracking-wider">Gafar Tinuoye / Studio 2026</p>
          <p className="font-light tracking-wide uppercase text-[9px]">All creative rights reserved.</p>
        </div>
        <div className="flex gap-4 items-center uppercase tracking-widest text-[9px] font-medium">
          <a href="mailto:gafarolarenwaju22@gmail.com" className="hover:text-white transition-colors duration-200">Email</a>
          <span className="text-white/10">/</span>
          <a 
            href="https://www.instagram.com/mastergaf_?igsh=MW95cXpxeTU3MGl1cQ==" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors duration-200"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
