
import { Project, ProcessStep, Testimonial } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'THE MONOLITH HOUSE',
    category: 'RESIDENTIAL',
    location: 'CHENNAI, INDIA',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000',
    year: '2023'
  },
  {
    id: '2',
    title: 'URBAN LOFT OFFICE',
    category: 'INTERIOR',
    location: 'BENGALURU, INDIA',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000',
    year: '2022'
  },
  {
    id: '3',
    title: 'ZEPHYR RESIDENCE',
    category: 'ARCHITECTURE',
    location: 'HYDERABAD, INDIA',
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=2000',
    year: '2023'
  },
  {
    id: '4',
    title: 'NORDIC RETREAT',
    category: 'RESIDENTIAL',
    location: 'WAYANAD, INDIA',
    imageUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=2000',
    year: '2021'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'DISCOVERY',
    description: 'We dive deep into your vision, lifestyle, and site potential to establish a solid conceptual foundation.'
  },
  {
    number: '02',
    title: 'DESIGN',
    description: 'Translating dreams into sketches and 3D visualizations, where every line is drawn with purpose.'
  },
  {
    number: '03',
    title: 'DEVELOPMENT',
    description: 'Detailed drawings and material selection that bridge the gap between imagination and reality.'
  },
  {
    number: '04',
    title: 'DELIVERY',
    description: 'Project management and site supervision ensuring the final build matches the vision to the millimeter.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Vikram Sethi',
    role: 'Homeowner',
    content: "Being Architect transformed our narrow plot into a light-filled sanctuary. Their attention to spatial flow is unmatched."
  },
  {
    id: '2',
    name: 'Priya Iyer',
    role: 'CEO, TechNova',
    content: "The office interiors designed by Narasimhan have boosted our team's morale significantly. A perfect blend of function and art."
  },
  {
    id: '3',
    name: 'Rahul Varma',
    role: 'Real Estate Developer',
    content: "Working with Being Architect is seamless. They bring a level of professionalism and design thinking that is rare in the industry."
  }
];
