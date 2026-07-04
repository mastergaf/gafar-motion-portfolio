import { Project } from "../types";
import { FEATURED_YOUTUBE_URL } from "../config";

export const projects: Project[] = [
  {
    id: "hyperion",
    title: "CIPM RECAP",
    category: "Motion Graphics video",
    client: "Hyperion Tech Corp",
    year: "2026",
    role: "Lead Motion Designer & Art Director",
    description: "A premium, fully volumetric brand identity launch system designed around liquid gold dynamics and high-frequency structural transformations. Inspired by cosmic gravity fields and sleek architectural glass.",
    color: "#ec922d", // Gold
    videoUrl: FEATURED_YOUTUBE_URL,
    imageUrl: "https://picsum.photos/seed/hyperion/1200/800",
    objectives: [
      "Define a multi-dimensional motion grammar for a deep tech brand.",
      "Animate fluid gold simulations with high physical precision.",
      "Compose a cinematic 60-second narrative arc for the product launch keynote."
    ],
    specs: {
      duration: "0:58 Min",
      fps: "60 FPS",
      ratio: "9:16 UHD",
      software: ["AfterEffects", "Premiere Pro"]
    },
    choreography: [
      {
        title: "Volumetric Aggregation",
        description: "Scattered golden nano-structures coalesce under simulated negative gravity. Smooth, low-frequency cubic-bezier paths build anticipation.",
        ease: "cubic-bezier(0.25, 1, 0.5, 1)"
      },
      {
        title: "Tension & Release Ramping",
        description: "High-speed centrifugal compression instantly snapped to a absolute standstill, accentuating pristine geometric alignment.",
        ease: "custom-kinetic-snap"
      },
      {
        title: "Glass Refraction Pulse",
        description: "A localized electromagnetic sweep refracting ambient light, revealing wireframe schematics in microscopic detail.",
        ease: "ease-out"
      }
    ]
  },
  {
    id: "aether",
    title: "AETHER",
    category: "Generative Kinetic Field",
    client: "Soundwave Laboratories",
    year: "2025",
    role: "Houdini FX Artist & Sound Visualizer",
    description: "An interactive, sound-reactive kinetic art installation translated into millions of shimmering glass particulate fields. Features custom auditory-visual synchronization algorithms and organic turbulence forces.",
    color: "#3b82f6", // Electric Blue
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-glowing-particles-background-vivid-blue-41551-large.mp4",
    imageUrl: "https://picsum.photos/seed/aether/1200/800",
    objectives: [
      "Translate raw acoustic frequency bands into non-linear vector forces.",
      "Simulate 5,000,000 micro-refractive particle strings running in real-time.",
      "Design an immersive audio-visual responsive loop for premium ambient environments."
    ],
    specs: {
      duration: "1:15 Min",
      fps: "24 FPS (Cinematic)",
      ratio: "2.39:1 CinemaScope",
      software: ["Houdini FX", "Redshift", "Premiere Pro", "Ableton Live"]
    },
    choreography: [
      {
        title: "Acoustic Resonance Trigger",
        description: "Frequency spikes directly dictate particle velocity and chromatic dispersion. High notes ignite micro-refractions.",
        ease: "elastic(1, 0.3)"
      },
      {
        title: "Fluid Turbulence Swirl",
        description: "Perlin noise structures swirl the field into majestic physical spirals. Easing behaves with heavy momentum simulated drag.",
        ease: "dampened-inertia"
      },
      {
        title: "Phase Inversion Drift",
        description: "Opposing wave currents cross paths, creating visual interference nodes that instantly flatten upon phase alignment.",
        ease: "linear-interp"
      }
    ]
  },
  {
    id: "chronos",
    title: "CHRONOS",
    category: "Kinetic Typography Study",
    client: "Zentrum Helvetica",
    year: "2025",
    role: "Type Animator & Kinetic Designer",
    description: "A mechanical exploration of temporal font mechanics, variable axes, and speed-ramped letter layouts. Combines brutalist architectural grids with expressive, snappy physical kinetic typography.",
    color: "#a855f7", // Violet
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-spinning-white-object-on-black-background-43187-large.mp4",
    imageUrl: "https://picsum.photos/seed/chronos/1200/800",
    objectives: [
      "Establish a modular grid system that dynamically scales based on motion speed.",
      "Animate variable-axis typography weight vectors smoothly in micro-steps.",
      "Pioneer kinetic text arrangements reflecting mechanical gears and chronometer wheels."
    ],
    specs: {
      duration: "0:30 Min",
      fps: "30 FPS",
      ratio: "9:16 & 16:9",
      software: ["After Effects", "Figma", "Illustrator", "Javascript Canvas"]
    },
    choreography: [
      {
        title: "Variable Weight Sweeps",
        description: "Letter weights cycle from Hairline to Ultra-Black synced with pendulum kinetic rotations. Perfectly linear easing inside circles.",
        ease: "linear"
      },
      {
        title: "Mechanical Snapping",
        description: "Grids rotate 90 degrees with an aggressive overshoot, mimicking high-tension horological components.",
        ease: "cubic-bezier(0.87, 0, 0.13, 1)"
      },
      {
        title: "Type Decimation Blur",
        description: "Characters shear, tear, and disintegrate into temporal horizontal slices at speeds exceeding 1200px/sec.",
        ease: "exponential-in"
      }
    ]
  }
];
