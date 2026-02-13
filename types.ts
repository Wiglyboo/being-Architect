
export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  imageUrl: string;
  year: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
}
