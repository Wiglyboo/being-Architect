
export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  imageUrl: string;
  year: string;
  description?: string;
  gallery?: string[];
  testimonial?: {
    text: string;
    clientName: string;
    role: string;
  };
  details?: {
    area: string;
    typology: string;
    status: string;
  };
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
