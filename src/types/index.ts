export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface LCAModule {
  title: string;
  description: string;
}

export interface ContactInfo {
  icon: string;
  title: string;
  content: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface ComponentProps {
  className?: string;
}