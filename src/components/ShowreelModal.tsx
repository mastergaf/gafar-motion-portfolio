import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Play, Pause, Volume2, VolumeX, Layers, Eye, RefreshCw } from "lucide-react";
import { Project } from "../types";
import { getYouTubeId } from "../config";

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  initialProjectIndex?: number;
}

export default function ShowreelModal({
  isOpen,
  onClose,
  projects,
  initialProjectIndex = 0,
}: ShowreelModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(initialProjectIndex);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [overlayGrid, setOverlayGrid] = useState(false);
  const [overlayCurves, setOverlayCurves] = useState(true);
  const [audioMeterLeft, setAudioMeterLeft] = useState(10);
  const [audioMeterRight, setAudioMeterRight] = useState(15);

  const activeProject = projects[currentProjectIndex];
  const youtubeId = getYouTubeId(activeProject?.videoUrl || "");
  const isYouTube = !!youtubeId && (activeProject?.videoUrl?.includes("youtube.com") || activeProject?.videoUrl?.includes("youtu.be") || activeProject?.videoUrl?.includes("embed"));

  // Synchronize initial project if changed from parent
  useEffect(() => {
    setCurrentProjectIndex(initialProjectIndex);
  }, [initialProjectIndex]);

  // Sound levels generator when playing
  useEffect(() => {
    if (!isPlaying) {
      setAudioMeterLeft(2);
      setAudioMeterRight(2);
      return;
    }

    const interval = setInterval(() => {
      // Create organic dancing levels
      setAudioMeterLeft(Math.floor(Math.random() * 80) + 10);
      setAudioMeterRight(Math.floor(Math.random() * 85) + 10);
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play().catch((err) => console.log("Video play interrupted:", err));
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration || 45); // fallback 45s
    }
  };

  const handleScrub = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
    }
    setCurrentTime(time);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (videoRef.current) {
      videoRef.current.volume = vol;
      videoRef.current.muted = vol === 0;
    }
    setIsMuted(vol === 0);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const nextMute = !isMuted;
      videoRef.current.muted = nextMute;
      setIsMuted(nextMute);
    }
  };

  const changeSpeed = () => {
    const rates = [0.25, 0.5, 1, 1.5, 2];
    const currentIndex = rates.indexOf(playbackRate);
    const nextRate = rates[(currentIndex + 1) % rates.length];
    setPlaybackRate(nextRate);
    if (videoRef.current) {
      videoRef.current.playbackRate = nextRate;
    }
  };

  // Convert time to cinematic frame number (assuming 24 FPS)
  const getFrameNumber = () => {
    return Math.floor(currentTime * 24);
  };

  const getTotalFrames = () => {
    return Math.floor(duration * 24) || 1080;
  };

  // Handle keyframe click jumps (Keyframes placed at specific ratios)
  const jumpToKeyframe = (ratio: number) => {
    const targetTime = duration * ratio;
    if (videoRef.current) {
      videoRef.current.currentTime = targetTime;
    }
    setCurrentTime(targetTime);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-6xl bg-[#0B0B0B] border border-white/10 rounded-xl overflow-hidden flex flex-col shadow-[0_25px_100px_rgba(0,0,0,0.8)]"
        >
          {/* Header Controls */}
          <div className="h-14 px-6 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-display text-xs text-white tracking-wider font-medium">
                {activeProject.title} — {activeProject.category}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-[#A3A3A3] hover:text-white hover:bg-white/5 rounded-md transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Core Player & Side Panel Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 border-b border-white/5 flex-1 bg-[#0B0B0B]">
            {/* Visual stage (Colspan 3) */}
            <div className="lg:col-span-3 bg-black relative flex items-center justify-center group overflow-hidden min-h-[300px] md:min-h-[480px]">
                           {/* Actual Video / YouTube Tag */}
              {isYouTube ? (
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&controls=1&rel=0&modestbranding=1&playsinline=1`}
                  className="w-full h-full aspect-video min-h-[300px] md:min-h-[480px] pointer-events-auto z-0"
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                  allowFullScreen
                  frameBorder="0"
                />
              ) : (
                <video
                  ref={videoRef}
                  src={activeProject.videoUrl}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  loop
                  playsInline
                  className="w-full h-full object-contain pointer-events-auto"
                  referrerPolicy="no-referrer"
                  onClick={handlePlayPause}
                />
              )}

              {/* Live interactive keyframe speed-curve visualization layer */}
              {!isYouTube && overlayCurves && (
                <div className="absolute left-6 bottom-6 z-10 px-4 py-3 rounded-lg border border-white/5 bg-black/75 max-w-[180px] pointer-events-none hidden md:block">
                  <p className="font-display text-[8px] text-white uppercase tracking-widest mb-1.5 flex items-center justify-between font-medium">
                    <span>Easing Curve</span>
                    <span>Bezier</span>
                  </p>
                  <svg viewBox="0 0 100 40" className="w-full h-12 stroke-white/60 fill-none">
                    {/* Render visual curve based on project */}
                    {currentProjectIndex === 0 ? (
                      // Snappy Curve
                      <path d="M 0,40 C 25,40 5,0 100,0" strokeWidth="1.5" />
                    ) : currentProjectIndex === 1 ? (
                      // Elastic curve
                      <path d="M 0,40 Q 30,10 50,25 T 100,0" strokeWidth="1.5" />
                    ) : (
                      // Linear curve
                      <path d="M 0,40 L 100,0" strokeWidth="1.5" />
                    )}
                    <line x1="0" y1="40" x2="100" y2="40" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                    {/* Dynamic playhead on curve */}
                    <circle
                      cx={(currentTime / (duration || 1)) * 100}
                      cy={
                        currentProjectIndex === 0 
                          ? 40 - Math.pow(currentTime / (duration || 1), 3) * 40
                          : 40 - (currentTime / (duration || 1)) * 40
                      }
                      r="2"
                      fill="#FFFFFF"
                    />
                  </svg>
                  <p className="font-display text-[7px] text-[#737373] mt-1 uppercase font-light">
                    Cubic: (0.25, 1.0, 0.5, 1.0)
                  </p>
                </div>
              )}

              {/* Playback rate indicator overlay */}
              {!isYouTube && (
                <div className="absolute top-4 left-4 z-10 font-display text-[9px] bg-black/80 border border-white/5 px-2 py-1 rounded text-[#A3A3A3] font-medium tracking-wider uppercase">
                  Rate: {playbackRate}x
                </div>
              )}

              {/* Big play button when paused */}
              {!isYouTube && !isPlaying && (
                <button
                  onClick={handlePlayPause}
                  className="absolute w-16 h-16 rounded-full bg-white hover:bg-neutral-200 text-black flex items-center justify-center transform hover:scale-105 transition-all z-20 cursor-pointer"
                >
                  <Play size={20} fill="currentColor" className="ml-1" />
                </button>
              )}
            </div>

            {/* Sidebar panel (Colspan 1) */}
            <div className="lg:col-span-1 p-6 flex flex-col gap-5 bg-[#161616]/40">
              <div className="space-y-1">
                <p className="font-display text-[9px] text-[#737373] tracking-widest uppercase font-medium">Content Type</p>
                <h3 className="font-display font-medium text-base text-white">Social Media Content</h3>
              </div>

              {/* Project list with switchers */}
              <div className="flex flex-col gap-2">
                {projects.map((proj, idx) => {
                  if (proj.id === "aether" || proj.id === "chronos") return null;
                  return (
                    <button
                      key={proj.id}
                      onClick={() => {
                        setCurrentProjectIndex(idx);
                        setIsPlaying(false);
                        setCurrentTime(0);
                        if (videoRef.current) {
                          videoRef.current.currentTime = 0;
                        }
                      }}
                      className={`p-3 text-left rounded-lg transition-colors border font-display text-xs flex flex-col gap-1.5 cursor-pointer ${
                        currentProjectIndex === idx
                          ? "bg-[#161616] border-white/10 text-white"
                          : "bg-transparent border-transparent text-[#A3A3A3] hover:bg-[#161616]/40 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="font-medium tracking-wide">{proj.title}</span>
                        <span className="text-[10px] text-[#737373] font-light">{proj.specs.duration}</span>
                      </div>
                      <span className="text-[10px] text-[#737373] font-light lowercase truncate max-w-[180px]">
                        {proj.category}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Specs parameters */}
              <div className="space-y-3 pt-4 border-t border-white/5 font-display text-[10px]">
                <p className="text-[#737373] tracking-widest uppercase font-medium">Motion Attributes</p>
                <div className="grid grid-cols-2 gap-y-3 gap-x-2">
                  <div className="space-y-0.5">
                    <p className="text-[#737373] uppercase font-medium">Framerate</p>
                    <p className="text-[#A3A3A3] font-light">{activeProject.specs.fps}</p>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[#737373] uppercase font-medium">Resolution</p>
                    <p className="text-[#A3A3A3] font-light">{activeProject.specs.ratio}</p>
                  </div>
                  <div className="space-y-0.5 col-span-2">
                    <p className="text-[#737373] uppercase font-medium">Software Suite</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {activeProject.specs.software.map((sw) => (
                        <span key={sw} className="px-2 py-0.5 bg-[#161616] border border-white/5 rounded text-[#A3A3A3] text-[9px]">
                          {sw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Custom Timeline Controls Panel */}
          {!isYouTube && (
            <div className="p-6 bg-[#161616] flex flex-col gap-4">
              {/* Scrubber slider track */}
              <div className="space-y-1">
                <div className="flex items-center justify-between font-display text-[10px] text-[#A3A3A3] font-medium">
                  <div className="flex items-center gap-2">
                    <span className="text-white">Timeline Track</span>
                    <span className="text-white/10">/</span>
                    <span className="text-[#737373]">Frame {getFrameNumber()} of {getTotalFrames()}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#A3A3A3]">
                    <span>{currentTime.toFixed(2)}s</span>
                    <span className="text-white/10">/</span>
                    <span>{duration.toFixed(2)}s</span>
                  </div>
                </div>

                <div className="relative pt-2">
                  {/* Visual marker track for keyframes */}
                  <div className="absolute top-[15px] left-0 right-0 h-1.5 pointer-events-none z-10 flex justify-between px-1.5">
                    <span
                      onClick={() => jumpToKeyframe(0)}
                      className="w-1.5 h-1.5 bg-white/40 rotate-45 cursor-pointer hover:bg-white transition-colors"
                      title="Keyframe 1"
                    />
                    <span
                      onClick={() => jumpToKeyframe(0.25)}
                      className="w-1.5 h-1.5 bg-white/40 rotate-45 cursor-pointer hover:bg-white transition-colors"
                      title="Keyframe 2"
                    />
                    <span
                      onClick={() => jumpToKeyframe(0.6)}
                      className="w-1.5 h-1.5 bg-white/40 rotate-45 cursor-pointer hover:bg-white transition-colors"
                      title="Keyframe 3"
                    />
                    <span
                      onClick={() => jumpToKeyframe(0.85)}
                      className="w-1.5 h-1.5 bg-white/40 rotate-45 cursor-pointer hover:bg-white transition-colors"
                      title="Keyframe 4"
                    />
                    <span
                      onClick={() => jumpToKeyframe(1.0)}
                      className="w-1.5 h-1.5 bg-white/40 rotate-45 cursor-pointer hover:bg-white transition-colors"
                      title="Keyframe 5"
                    />
                  </div>

                  <input
                    type="range"
                    min={0}
                    max={duration || 100}
                    step={0.01}
                    value={currentTime}
                    onChange={handleScrub}
                    className="w-full h-1 bg-[#0B0B0B] rounded-lg appearance-none cursor-ew-resize accent-white relative z-20"
                  />
                </div>
              </div>

              {/* Controller interface buttons */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                {/* Play controls */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={handlePlayPause}
                    className="w-10 h-10 rounded-full bg-white text-black hover:bg-neutral-200 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    {isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" className="ml-0.5" />}
                  </button>

                  {/* Audio indicators */}
                  <div className="flex items-center gap-2">
                    <button onClick={toggleMute} className="text-[#A3A3A3] hover:text-white transition-colors cursor-pointer">
                      {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                    </button>
                    <input
                      type="range"
                      min={0}
                      max={1}
                      step={0.05}
                      value={volume}
                      onChange={handleVolumeChange}
                      className="w-20 h-1 bg-[#0B0B0B] rounded-lg appearance-none cursor-pointer accent-white"
                    />
                  </div>

                  {/* Simulated VU Audio Meter (Awwwards look) */}
                  <div className="hidden sm:flex items-center gap-1.5 bg-[#0B0B0B] px-3 py-1.5 rounded border border-white/5 font-display text-[9px] text-[#737373]">
                    <span className="uppercase font-medium tracking-wider">VU:</span>
                    <div className="flex flex-col gap-[2px] w-12 justify-center">
                      {/* Left VU */}
                      <div className="h-1 bg-[#161616] rounded-sm overflow-hidden relative">
                        <div
                          className="h-full bg-white transition-all duration-75"
                          style={{ width: `${audioMeterLeft}%` }}
                        />
                      </div>
                      {/* Right VU */}
                      <div className="h-1 bg-[#161616] rounded-sm overflow-hidden relative">
                        <div
                          className="h-full bg-white transition-all duration-75"
                          style={{ width: `${audioMeterRight}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* View helper and overlays toggle buttons */}
                <div className="flex items-center gap-3 font-display text-[10px]">
                  <button
                    onClick={() => setOverlayCurves(!overlayCurves)}
                    className={`flex items-center gap-1.5 px-3 py-2 border rounded-full transition-colors cursor-pointer ${
                      overlayCurves
                        ? "bg-white/10 border-white/25 text-white font-medium"
                        : "bg-transparent border-white/10 text-[#A3A3A3] hover:text-white"
                    }`}
                  >
                    <Eye size={11} />
                    Curve Analyzer
                  </button>

                  <button
                    onClick={changeSpeed}
                    className="flex items-center gap-1 bg-transparent hover:bg-white/5 text-[#A3A3A3] hover:text-white border border-white/10 hover:border-white/20 px-3 py-2 rounded-full transition-colors cursor-pointer"
                  >
                    <RefreshCw size={11} />
                    Speed: {playbackRate}x
                  </button>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
