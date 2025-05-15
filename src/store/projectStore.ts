export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullContent: string;
  liveLink: string;
  githubLink: string;
  thumbnail: string;
  technologies: string[];
  status?: string; // optional if sometimes missing
  category?: string; // optional if sometimes missing
}
