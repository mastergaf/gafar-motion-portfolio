import React from "react";
import { motion } from "motion/react";
import { Film, PlayCircle, Eye, Layers } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Layers size={18} className="text-[#A3A3A3]" />,
      title: "Motion Graphics Design",
      description:
        "High-end 2D and 3D kinetic elements, customized typography, vector animations, and logo integration designed to define and project your brand identity through premium visual motion.",
    },
    {
      icon: <Film size={18} className="text-[#A3A3A3]" />,
      title: "Video Editing",
      description:
        "Cinematic narrative pacing, precise clip-stitching, seamless multi-source B-roll synchronization, post-production design, and professional color-grading.",
    },
    {
      icon: <PlayCircle size={18} className="text-[#A3A3A3]" />,
      title: "Social Ads Campaigns",
      description:
        "Optimized vertical (9:16) and landscape (16:9) video ads tailored for Instagram, TikTok, LinkedIn, and YouTube. Engineered to hook attention in the first 3 seconds and convert viewers into actions.",
    },
    {
      icon: <Eye size={18} className="text-[#A3A3A3]" />,
      title: "Product Explainers",
      description:
        "Transforming complex application features, interface interactions (UI animation), and SaaS platforms into clear, engaging, and easy-to-understand cinematic explainer stories.",
    },
  ];

  return (
    <section
      id="services"
      className="relative pt-16 pb-32 px-6 sm:px-12 md:px-16 bg-[#070707] overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-24 text-center max-w-2xl mx-auto space-y-4">
          <h2 className="font-display font-medium text-3xl sm:text-5xl text-white tracking-tight">
            My Services
          </h2>
          <div className="h-[1px] w-12 bg-white/10 mx-auto mt-6" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="group p-8 rounded-2xl border border-white/5 bg-[#121212]/20 hover:bg-[#121212]/40 hover:border-white/10 transition-all duration-300 text-left space-y-6"
            >
              <div className="w-10 h-10 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-center group-hover:bg-white/[0.05] group-hover:border-white/10 transition-colors duration-300">
                {service.icon}
              </div>
              
              <div className="space-y-2">
                <h3 className="font-display font-medium text-lg text-white group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-display font-light text-[#737373] group-hover:text-[#A3A3A3] text-sm leading-relaxed transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
