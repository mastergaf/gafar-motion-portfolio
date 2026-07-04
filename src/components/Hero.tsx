import React, { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import gsap from "gsap";
import { FEATURED_YOUTUBE_URL, getYouTubeId } from "../config";

interface HeroProps {
  onOpenReel: () => void;
}

export default function Hero({ onOpenReel }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const introLineRef = useRef<HTMLParagraphElement>(null);
  const supportTextRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const rightVisualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Premium GSAP staggered intro timeline
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        [
          labelRef.current,
          headlineRef.current,
          introLineRef.current,
          supportTextRef.current,
          buttonsRef.current,
        ],
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.1,
          delay: 0.2,
        }
      );

      tl.fromTo(
        rightVisualRef.current,
        {
          opacity: 0,
          scale: 0.96,
          x: 15,
        },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 1.4,
          ease: "power3.out",
        },
        "-=0.8"
      );
    }, containerRef);

    return () => ctx.revert(); // clean up GSAP animations on unmount
  }, []);

  return (
    <section
      id="showreel"
      ref={containerRef}
      className="relative min-h-[85vh] lg:min-h-[90vh] w-full flex flex-col justify-between overflow-hidden bg-[#050505] pt-28 pb-6"
    >
      {/* Background visual detail */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden select-none pointer-events-none">
        {/* Subtle background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.002)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.002)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none z-10 opacity-30" />
      </div>

      {/* Main Container aligned with Navbar */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 my-auto flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center w-full">
          
          {/* Left Column (Content) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left py-4">
            
            {/* Top Minimal Label Detail */}
            <div ref={labelRef} className="overflow-hidden mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 text-[#A3A3A3] font-display text-[10px] tracking-[0.18em] uppercase font-medium bg-white/[0.02]">
                <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full" />
                MOTION DESIGN PORTFOLIO
              </div>
            </div>

            {/* Cinematic Headline - Stark bold all-caps with line heights and matching sentence below */}
            <div className="space-y-4 mb-6">
              <h1
                ref={headlineRef}
                className="font-display text-[1.95rem] sm:text-[3.15rem] md:text-[3.85rem] lg:text-[4.35rem] xl:text-[5.05rem] font-bold tracking-tight leading-[0.88] text-white uppercase select-none"
              >
                STORIES DON'T <br />
                JUST NEED <br />
                TO BE TOLD.
              </h1>
              
              <p
                ref={introLineRef}
                className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-[#A3A3A3] tracking-wide"
              >
                They need to move.
              </p>
            </div>

            {/* Supporting text - Beautifully tightened */}
            <div className="max-w-md mb-8">
              <p
                ref={supportTextRef}
                className="text-[#737373] text-sm sm:text-base font-display font-light leading-relaxed tracking-wide"
              >
                I help brands tell their stories through high-end motion design and visual storytelling that communicates and converts.
              </p>
            </div>

            {/* Premium, Minimal Buttons */}
            <div ref={buttonsRef} className="flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href="#selected-projects"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("selected-projects");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="group flex items-center gap-2.5 bg-white text-black font-display text-xs font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:bg-neutral-100 hover:scale-[1.03] active:scale-[0.98] cursor-pointer shadow-lg shadow-black/10"
              >
                View My Works
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>

              <button
                onClick={onOpenReel}
                className="group flex items-center gap-2 bg-transparent border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-display text-xs font-medium px-8 py-3.5 rounded-full transition-all duration-300 cursor-pointer"
              >
                Featured Project
                <span className="text-[10px] text-[#A3A3A3] group-hover:text-white transition-colors ml-1">▶</span>
              </button>
            </div>

          </div>

          {/* Right Column (Cinematic Visual Element Card - Redesigned to match the screenshot) */}
          <div ref={rightVisualRef} className="lg:col-span-5 hidden lg:block">
            <div 
              onClick={onOpenReel}
              className="relative aspect-[9/16] w-full max-w-[320px] xl:max-w-[340px] ml-auto rounded-2xl border border-white/10 bg-[#0F0F0F] overflow-hidden group shadow-[0_40px_80px_rgba(0,0,0,0.85)] cursor-pointer transition-all duration-500 hover:border-white/20"
            >
              {/* Loop video styled as dark chrome 3D metallic ring */}
              <div className="absolute inset-0 w-full h-full opacity-60 grayscale brightness-65 contrast-125 scale-100 group-hover:opacity-75 group-hover:scale-[1.03] transition-all duration-700 ease-out pointer-events-none">
                <iframe
                  src={`${FEATURED_YOUTUBE_URL}?autoplay=1&mute=1&loop=1&playlist=${getYouTubeId(FEATURED_YOUTUBE_URL)}&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1&enablejsapi=1`}
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-[316%] h-full max-w-none pointer-events-none"
                  allow="autoplay; encrypted-media"
                  frameBorder="0"
                />
              </div>

              {/* Editorial dark radial/linear gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/30 z-10" />

              {/* Top Details inside Card */}
              <div className="absolute top-6 left-6 right-6 z-20 flex justify-between items-center font-display text-[9px] tracking-widest text-[#737373] uppercase">
                <div className="flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-pulse" />
                  LIVE PREVIEW
                </div>
              </div>

              {/* Centered Large Circular Play Button */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 shadow-xl shadow-black/40">
                  {/* solid play arrow */}
                  <span className="text-sm ml-1 select-none">▶</span>
                </div>
              </div>

              {/* Bottom Details inside Card */}
              <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col gap-1.5 text-left font-display text-[#737373]">
                <span className="text-white text-base font-bold tracking-wider uppercase">FEATURED PROJECT</span>
                <span className="text-[8px] font-light uppercase tracking-widest text-[#737373] leading-relaxed">
                  Cipm Conference Recap / Orvalon Digital / Motion Graphics
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Elegant scroll indicator centered at the very bottom */}
      <div className="relative w-full z-20 flex flex-col items-center gap-1.5 text-[#525252] mb-4">
        <span className="font-display text-[9px] tracking-[0.25em] font-medium select-none uppercase">SCROLL</span>
        <div className="w-[1px] h-10 bg-white/5 relative overflow-hidden">
          <motion.div
            animate={{ y: [-40, 40] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-5 bg-neutral-500 absolute top-0"
          />
        </div>
      </div>
    </section>
  );
}
