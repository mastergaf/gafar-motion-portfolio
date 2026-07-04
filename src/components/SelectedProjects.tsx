import React from "react";
import { motion } from "motion/react";
import { Play, ArrowRight, Video, Cpu, Film, Layers } from "lucide-react";

export interface SelectedProjectItem {
  id: string;
  title: string;
  description: string;
  role: string;
  software: string[];
  client?: string; // Optional client
  youtubeEmbedUrl?: string; // Optional YouTube embed URL for easy future replacement
  aspectRatio?: "video" | "portrait"; // Aspect ratio preference
}

interface SelectedProjectsProps {
  customProjects?: SelectedProjectItem[];
}

export default function SelectedProjects({ customProjects }: SelectedProjectsProps) {
  // 6 Premium curated projects (First two are real, others are placeholders)
  const defaultProjects: SelectedProjectItem[] = [
    {
      id: "courtnetra-ad",
      title: "Courtnetra – Product Feature Motion Ad",
      description: "A 10-second cinematic motion graphics advertisement created to showcase Courtnetra's unique features through engaging animation, clean typography, and fast-paced visual storytelling.",
      client: "Courtnetra × Metaminds",
      role: "Motion Graphics Designer\nMotion Animator\nVideo Editor",
      software: ["Adobe After Effects", "Adobe Illustrator", "Adobe Premiere Pro"],
      youtubeEmbedUrl: "https://www.youtube.com/embed/UK0B2gsRe_s",
      aspectRatio: "video"
    },
    {
      id: "orvalon-bootcamp",
      title: "Orvalon Digital – Digital Bootcamp Campaign",
      description: "A high-converting vertical motion graphics advertisement created to promote Orvalon Digital's July Digital Bootcamp. The video was designed to clearly communicate the value of the program and was used across multiple social media platforms as part of the brand's paid advertising campaign.",
      client: "Orvalon Digital",
      role: "Motion Graphics Designer\nMotion Animator\nVideo Editor",
      software: ["Adobe After Effects", "Adobe Premiere Pro", "Adobe Illustrator"],
      youtubeEmbedUrl: "https://www.youtube.com/embed/8aoUdSNy4gI",
      aspectRatio: "portrait"
    },
    {
      id: "orvalon-recruitment",
      title: "Orvalon Digital – Talent Recruitment Campaign",
      description: "A vertical motion graphics social media campaign designed to position Orvalon Digital as a platform where talented creatives can discover job opportunities, showcase their skills, and gain recognition for their work. The content was created to attract new talents and drive registrations through engaging visual storytelling.",
      client: "Orvalon Digital",
      role: "Motion Graphics Designer\nMotion Animator\nVideo Editor",
      software: ["Adobe After Effects", "Adobe Premiere Pro", "Adobe Illustrator"],
      youtubeEmbedUrl: "https://www.youtube.com/embed/uRLDQk0m_3A",
      aspectRatio: "portrait"
    },
    {
      id: "courtnetra-explainer",
      title: "Courtnetra – Product Feature Explainer",
      description: "A motion graphics-driven product explainer designed to demonstrate how the Courtnetra app simplifies legal workflows for Indian lawyers. The animation showcases the platform's key features and user experience through engaging visual storytelling, relying primarily on motion graphics and UI animation.",
      client: "Courtnetra × Metaminds",
      role: "Motion Graphics Designer\nMotion Animator\nVideo Editor",
      software: ["Adobe After Effects", "Adobe Premiere Pro", "Adobe Illustrator"],
      youtubeEmbedUrl: "https://www.youtube.com/embed/ukIYCG7nNTI",
      aspectRatio: "portrait"
    },
    {
      id: "moltbook-explainer",
      title: "MoltBook – AI Platform Explainer",
      description: "An educational social media video created to introduce MoltBook, a platform where AI agents interact with one another. The project combines live-action footage with motion graphics, animated icons, and clean visual design to simplify complex concepts and improve audience engagement.",
      client: "Metaminds",
      role: "Video Editor",
      software: ["Adobe Premiere Pro"],
      youtubeEmbedUrl: "https://www.youtube.com/embed/7oIgldTWhYc",
      aspectRatio: "portrait"
    },
    {
      id: "prince-bookshop",
      title: "Prince Bookshop – Brand Advertisement",
      description: "A commercial advertisement created to promote Prince Bookshop and its range of educational materials, including school books, novels, past questions, handouts, and other academic resources. The project combines live-action B-roll, motion typography, and motion graphics to communicate the brand's products in a clear and engaging way.",
      client: "Prince Bookshop",
      role: "Motion Graphics Designer\nVideo Editor",
      software: ["Adobe After Effects", "Adobe Premiere Pro", "Adobe Illustrator"],
      youtubeEmbedUrl: "https://www.youtube.com/embed/enFwlaf6EGo",
      aspectRatio: "video"
    }
  ];

  const displayProjects = customProjects || defaultProjects;

  return (
    <section
      id="selected-projects"
      className="relative py-32 px-6 sm:px-12 md:px-16 bg-[#070707] border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title Header */}
        <div className="mb-28 text-center max-w-2xl mx-auto space-y-4">
          <span className="font-display text-[10px] text-[#A3A3A3] tracking-[0.3em] uppercase flex items-center justify-center gap-2 font-medium">
            <span className="inline-block w-1.5 h-1.5 bg-[#A3A3A3] rounded-full animate-pulse" />
            Curated Exhibition
          </span>
          <h2 className="font-display font-medium text-3xl sm:text-5xl text-white tracking-tight">
            Selected Projects
          </h2>
          <div className="h-[1px] w-12 bg-white/10 mx-auto mt-6" />
        </div>

        {/* Exhibition List */}
        <div className="space-y-40 md:space-y-48">
          {displayProjects.map((project, index) => {
            const isMediaLeft = index % 2 === 0;

            return (
              <div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
              >
                {/* Media Container (Occupies 7 columns on desktop) */}
                <div
                  className={`lg:col-span-7 w-full ${
                    isMediaLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`relative rounded-2xl border border-white/10 bg-[#0F0F0F] overflow-hidden group shadow-[0_40px_80px_rgba(0,0,0,0.85)] hover:border-white/20 transition-all duration-500 ${
                      project.aspectRatio === "portrait"
                        ? "aspect-[9/16] max-w-[340px] mx-auto"
                        : "aspect-video w-full"
                    }`}
                  >
                    {/* YOUTUBE EMBED NOTE:
                        To replace this empty placeholder with a live YouTube video later,
                        uncomment and configure the iframe below, or pass 'youtubeEmbedUrl' prop.
                    */}
                    {project.youtubeEmbedUrl ? (
                      <iframe
                        src={project.youtubeEmbedUrl}
                        className="absolute inset-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        frameBorder="0"
                      />
                    ) : (
                      /* Beautiful, premium minimalist placeholder representation */
                      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-[#0B0B0B]/90 to-black/80 flex flex-col items-center justify-center p-6 text-center select-none">
                        
                        {/* Subtle blueprint digital lines background to give a technical, premium feel */}
                        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
                        
                        {/* Interactive decorative central glyph */}
                        <div className="relative z-10 w-16 h-16 rounded-full border border-white/5 bg-white/5 flex items-center justify-center text-[#737373] group-hover:text-white group-hover:scale-105 group-hover:border-white/20 transition-all duration-500">
                          <Play size={16} className="ml-0.5 opacity-40 group-hover:opacity-100 transition-opacity" />
                        </div>
                        
                        {/* Technical corner accents */}
                        <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white/10" />
                        <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-white/10" />
                        <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-white/10" />
                        <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-white/10" />

                        <span className="font-mono text-[8px] text-[#525252] uppercase tracking-[0.3em] mt-4">
                          [ VIDEO PLACEHOLDER / {project.id.toUpperCase()} ]
                        </span>
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Text Content (Occupies 5 columns on desktop) */}
                <div
                  className={`lg:col-span-5 flex flex-col gap-8 ${
                    isMediaLeft ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: isMediaLeft ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    className="space-y-6"
                  >
                    {/* Index Indicator & Client */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-[#525252] block">
                        // 0{index + 1}
                      </span>
                      {project.client && (
                        <span className="font-display text-[10px] text-[#A3A3A3] tracking-[0.2em] uppercase font-medium">
                          {project.client}
                        </span>
                      )}
                    </div>

                    {/* Project Title */}
                    <h3 className="font-display font-medium text-2xl sm:text-3xl text-white tracking-tight">
                      {project.title}
                    </h3>

                    {/* Project Description */}
                    <p className="font-display text-sm font-light text-[#A3A3A3] leading-relaxed">
                      {project.description}
                    </p>

                    {/* Divider */}
                    <div className="h-[1px] w-full bg-white/5 my-4" />

                    {/* Metadata Specs Grid */}
                    <div className="grid grid-cols-2 gap-6 pt-2 font-display text-xs">
                      <div className="space-y-1.5">
                        <span className="text-[#525252] uppercase tracking-wider text-[9px] block">Role</span>
                        <span className="text-white font-medium whitespace-pre-line leading-relaxed">{project.role}</span>
                      </div>
                      <div className="space-y-1.5">
                        <span className="text-[#525252] uppercase tracking-wider text-[9px] block">Software</span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.software.map((sw, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-white font-medium bg-[#161616] px-2 py-0.5 rounded border border-white/5 text-[10px]"
                            >
                              {sw}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Call to Action Button */}
                    <div className="pt-6">
                      <button className="group flex items-center gap-2.5 px-5 py-2.5 border border-white/10 hover:border-white/20 text-[#A3A3A3] hover:text-white rounded-full font-display text-xs transition-colors duration-300 cursor-pointer">
                        Explore Story
                        <ArrowRight size={12} className="transform group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
