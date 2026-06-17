export interface HeadlineOption {
  id: string;
  label: string;
  tagline: string;
  headline: string;
  coloredWord?: string; // Word to highlight with accent-terracota
  subheadline: string;
  demographic: string;
}

export interface PainPoint {
  id: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface ApproachStep {
  id: string;
  title: string;
  details: string;
  badge: string;
  iconName: string;
}

export interface ServiceCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  image: string;
  whatsappMsg: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  stars: number;
}
