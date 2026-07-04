import React from "react";
import { motion } from "motion/react";

export default function CreativeProcess() {
  const steps = [
    {
      num: "01",
      title: "Concept & Storytelling",
      subtitle: "The Foundation",
      description:
        "Every motion design project begins with a clear creative brief. I collaborate with you to structure scripts, conceptualize visual pacing, and outline the narrative direction that aligns with your brand objectives.",
    },
    {
      num: "02",
      title: "Styleframes & Storyboarding",
      subtitle: "The Visual Blueprint",
      description:
        "Before jumpstarting into layout and animation, I establish key static styleframes using Photoshop or Illustrator. This locks in the art direction, typography pairings, and compositional elements for preview.",
    },
    {
      num: "03",
      title: "Motion & Animation",
      subtitle: "The Dynamic Flow",
      description:
        "With storyboards approved, I animate the assets in After Effects. I focus intensely on custom easing curve profiles, kinetic timing, and secondary motion to ensure every frame communicates beautifully.",
    },
    {
      num: "04",
      title: "Sound Design & Delivery",
      subtitle: "The Final Impact",
      description:
        "The experience is rounded out with clean sound effects, audio syncs, and cinematic pacing. I render the files into multiple optimized, high-fidelity responsive formats ready to share.",
    },
  ];

  return (
    <section
      id="process"
      className="relative py-32 px-6 sm:px-12 md:px-16 bg-[#050505] overflow-hidden border-t border-white/5"
    >
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/[0.005] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-24 text-center max-w-2xl mx-auto space-y-4">
          <h2 className="font-display font-medium text-3xl sm:text-5xl text-white tracking-tight">
            Creative Process
          </h2>
          <div className="h-[1px] w-12 bg-white/10 mx-auto mt-6" />
        </div>

        {/* Process Stepper Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="relative p-6 rounded-2xl border border-white/5 bg-[#121212]/10 hover:bg-[#121212]/20 hover:border-white/10 transition-all duration-300 flex flex-col justify-between text-left h-full"
            >
              <div className="space-y-6">
                {/* Step number styled beautifully */}
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-4xl font-extralight text-[#333333] group-hover:text-white/20 transition-colors duration-300">
                    {step.num}
                  </span>
                  <span className="font-display text-[9px] text-[#525252] tracking-wider uppercase font-light">
                    {step.subtitle}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-medium text-base text-white">
                    {step.title}
                  </h3>
                  <p className="font-display font-light text-[#737373] text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
