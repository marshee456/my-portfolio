export interface ProjectFile {
  name: string;
  type: 'source' | 'document' | 'image' | 'excel' | 'pdf';
  url: string;
  size?: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  technologies: string[];
  features: string[];
  startDate: string;
  endDate?: string;
  status: 'completed' | 'in-progress' | 'planned';
  
  // File attachments
  files: ProjectFile[];
  
  // Links
  liveUrl?: string;
  githubUrl?: string;
  
  // Media
  imageUrl?: string;
  screenshots: string[];
  
  // Academic info (for thesis projects)
  isThesis?: boolean;
  advisor?: string;
  keywords?: string[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location?: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  type: 'internship' | 'fulltime' | 'parttime' | 'contract';
  responsibilities: string[];
  technologies: string[];
  achievements?: string[];
}

// ... other interfaces from previous guide