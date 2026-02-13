
import { Project, ProcessStep, Testimonial } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'THE MONOLITH HOUSE',
    category: 'RESIDENTIAL',
    location: 'CHENNAI, INDIA',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000',
    year: '2023',
    description: "A testament to brutalist elegance, The Monolith House stands as a solitary yet inviting structure amidst the chaotic urban fabric of Chennai. Utilizing exposed concrete and locally sourced timber, the design facilitates natural cross-ventilation while ensuring privacy. The central courtyard acts as the lungs of the house, bringing light and life into every corner.",
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1200',
    ],
    details: {
      area: '4,500 Sq. Ft.',
      typology: 'Luxury Villa',
      status: 'Completed'
    },
    testimonial: {
      text: "Living here feels like being in a modern art gallery that is also a warm home. The play of light is magical.",
      clientName: "Rakesh Menon",
      role: "Art Collector"
    }
  },
  {
    id: '2',
    title: 'URBAN LOFT OFFICE',
    category: 'INTERIOR',
    location: 'BENGALURU, INDIA',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000',
    year: '2022',
    description: "Reimagining the workspace for the post-pandemic era, this project transforms a rigid industrial warehouse into a fluid, collaborative ecosystem. Biophilic design principles are integrated with smart modular furniture to create zones that encourage both deep work and serendipitous interactions.",
    gallery: [
      'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=1200',
    ],
    details: {
      area: '12,000 Sq. Ft.',
      typology: 'Commercial Interior',
      status: 'Completed'
    },
    testimonial: {
      text: "Our productivity soared after moving in. The design truly understands how modern teams function.",
      clientName: "Sarah Thomas",
      role: "CTO, NextGen Tech"
    }
  },
  {
    id: '3',
    title: 'ZEPHYR RESIDENCE',
    category: 'ARCHITECTURE',
    location: 'HYDERABAD, INDIA',
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=2000',
    year: '2023',
    description: "Perched on a rocky terrain, Zephyr Residence is designed to float above the landscape. Large cantilevered decks offer panoramic views while shading the glazed facades from the harsh Hyderabad sun. The material palette creates a dialogue between the raw stone of the site and the refined steel of the structure.",
    gallery: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    ],
    details: {
      area: '6,200 Sq. Ft.',
      typology: 'Hillside Villa',
      status: 'Completed'
    },
    testimonial: {
      text: "A masterpiece of engineering and art. Every morning view from the deck is breathtaking.",
      clientName: "Anand Reddy",
      role: "Entrepreneur"
    }
  },
  {
    id: '4',
    title: 'NORDIC RETREAT',
    category: 'RESIDENTIAL',
    location: 'WAYANAD, INDIA',
    imageUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=2000',
    year: '2021',
    description: "Inspired by Scandinavian simplicity but rooted in the tropical context of Wayanad, this retreat serves as a sanctuary for a writer. Steep pitched roofs handle the monsoon rains effortlessly, while the interiors are wrapped in warm wood to create a cozy, contemplative atmosphere.",
    gallery: [
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=1200',
    ],
    details: {
      area: '3,000 Sq. Ft.',
      typology: 'Holiday Home',
      status: 'Completed'
    },
    testimonial: {
      text: "The perfect escape. Silence has been designed into the very walls of this house.",
      clientName: "Meera Nair",
      role: "Author"
    }
  },
  {
    id: '5',
    title: 'CANVAS APARTMENT',
    category: 'INTERIOR',
    location: 'MUMBAI, INDIA',
    imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=2000',
    year: '2024',
    description: "A minimalism-inspired apartment in the heart of Mumbai, designed as a blank canvas for the owner's extensive art collection. White walls, light oak flooring, and concealed storage create a serene backdrop, allowing the art and the panoramic city views to take center stage.",
    gallery: [
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&q=80&w=1200',
    ],
    details: {
      area: '2,800 Sq. Ft.',
      typology: 'Luxury Apartment',
      status: 'Completed'
    },
    testimonial: {
      text: "They turned my chaotic brief into a Zen masterpiece. It's the calmest place in Mumbai.",
      clientName: "Arjun Rampal",
      role: "Filmmaker"
    }
  },
  {
    id: '6',
    title: 'HORIZON HQ',
    category: 'ARCHITECTURE',
    location: 'GURGAON, INDIA',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000',
    year: '2023',
    description: "A corporate headquarters that challenges the glass box norm. Horizon HQ features a dynamic facade of perforated metal screens that respond to solar orientation, reducing heat gain while creating a constantly changing visual pattern. Inside, a central atrium connects all floors visually and socially.",
    gallery: [
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200',
    ],
    details: {
      area: '50,000 Sq. Ft.',
      typology: 'Corporate HQ',
      status: 'Completed'
    },
    testimonial: {
      text: "A landmark building that truly represents our company's forward-thinking ethos.",
      clientName: "Sanjeev Gupta",
      role: "CEO, Horizon Corp"
    }
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
    name: 'Vikram S',
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
