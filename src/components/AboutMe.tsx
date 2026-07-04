import React, { useState } from "react";
import { motion } from "motion/react";
import { User } from "lucide-react";

export default function AboutMe() {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="about"
      className="relative pt-32 pb-12 px-6 sm:px-12 md:px-16 bg-[#050505] overflow-hidden border-t border-white/5"
    >
      {/* Background ambient lighting subtle glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-white/[0.01] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Portrait */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative aspect-[3/4] w-full max-w-[400px] mx-auto rounded-2xl border border-white/10 bg-[#0A0A0A] overflow-hidden group shadow-[0_30px_60px_rgba(0,0,0,0.8)] hover:border-white/20 transition-all duration-500"
            >
              {!imageError ? (
                <>
                  {/* Image element with lazy loading and error handler */}
                  <img
                    src="/assets/gafar_portrait.jpg"
                    onError={() => setImageError(true)}
                    alt="Gafar Tinuoye Portrait"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Sophisticated glassmorphism overlay with abstract grid lines for editorial cinematic framing */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Abstract geometric focus corners to enhance cinematic portfolio vibe */}
                  <div className="absolute top-6 left-6 w-4 h-4 border-t border-l border-white/20 group-hover:border-white/40 transition-colors duration-500 pointer-events-none" />
                  <div className="absolute top-6 right-6 w-4 h-4 border-t border-r border-white/20 group-hover:border-white/40 transition-colors duration-500 pointer-events-none" />
                  <div className="absolute bottom-6 left-6 w-4 h-4 border-b border-l border-white/20 group-hover:border-white/40 transition-colors duration-500 pointer-events-none" />
                  <div className="absolute bottom-6 right-6 w-4 h-4 border-b border-r border-white/20 group-hover:border-white/40 transition-colors duration-500 pointer-events-none" />

                  {/* Shimmer overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.04] to-white/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out pointer-events-none" />
                </>
              ) : (
                /* Elegant Cinematic Placeholder when no image is uploaded yet */
                <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-[#080808] to-[#030303] flex flex-col items-center justify-center p-8 select-none">
                  {/* Abstract geometric focus corners */}
                  <div className="absolute top-6 left-6 w-4 h-4 border-t border-l border-white/10 group-hover:border-white/25 transition-colors duration-500" />
                  <div className="absolute top-6 right-6 w-4 h-4 border-t border-r border-white/10 group-hover:border-white/25 transition-colors duration-500" />
                  <div className="absolute bottom-6 left-6 w-4 h-4 border-b border-l border-white/10 group-hover:border-white/25 transition-colors duration-500" />
                  <div className="absolute bottom-6 right-6 w-4 h-4 border-b border-r border-white/10 group-hover:border-white/25 transition-colors duration-500" />

                  {/* Centered details */}
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center text-[#404040] group-hover:text-white/40 group-hover:bg-white/[0.04] transition-all duration-500">
                      <User size={24} strokeWidth={1.5} />
                    </div>
                    <div className="space-y-2">
                      <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#525252] group-hover:text-[#737373] transition-colors duration-500">
                        Portrait Photography
                      </p>
                      <p className="font-display text-[11px] text-[#333] group-hover:text-[#525252] transition-colors duration-500 font-light max-w-[200px] leading-relaxed">
                        To add your photo, upload your portrait as <span className="text-white/40 font-mono text-[10px]">gafar_portrait.jpg</span> to the <span className="text-white/40 font-mono text-[10px]">/assets/</span> folder
                      </p>
                    </div>
                  </div>

                  {/* Diagonal subtle line pattern */}
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.001)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.001)_50%,rgba(255,255,255,0.001)_75%,transparent_75%,transparent)] bg-[size:20px_20px] opacity-20 pointer-events-none" />
                </div>
              )}
            </motion.div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-10 text-left">
            
            {/* Header */}
            <div className="space-y-4">
              <h2 className="font-display font-medium text-3xl sm:text-5xl text-white tracking-tight">
                About Me
              </h2>
              <div className="h-[1px] w-12 bg-white/10" />
            </div>

            {/* Paragraph Text */}
            <div className="font-display font-light text-[#A3A3A3] text-sm sm:text-base leading-relaxed space-y-6 max-w-xl">
              <p>
                Hi, I'm <span className="text-white font-medium">Gafar Tinuoye</span>, or <span className="text-white font-medium">Gaf</span>, a Motion Graphics Designer and Video Editor.
              </p>
              <p>
                I enjoy turning ideas into visuals that people actually understand, remember, and act on. Whether it's a product launch, an explainer, or a social campaign, I believe motion should do more than look good; it should communicate.
              </p>
              <p>
                Over the past 3+ years, I've worked with brands including <span className="text-white">Guguru Talent Management</span>, <span className="text-white">Metaminds</span>, and <span className="text-white">Orvalon Digital</span>. I'm obsessed with one thing: helping brands tell better stories.
              </p>
              <p>
                I'm always looking for opportunities to collaborate with brands, agencies, and creative teams to tell stories that move people—and ultimately help brands turn attention into action.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
