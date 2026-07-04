export interface Project {
  id: string;
  title: string;
  category: string;
  client: string;
  year: string;
  role: string;
  description: string;
  color: string;
  videoUrl: string; // fallback stock video URL
  imageUrl: string; // fallback image URL
  objectives: string[];
  specs: {
    duration: string;
    fps: string;
    ratio: string;
    software: string[];
  };
  choreography: {
    title: string;
    description: string;
    ease: string;
  }[];
}

export interface NavigationItem {
  label: string;
  id: string;
}
