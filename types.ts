import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
  company: string;
  logo: string;
  quote: string;
  author: string;
  role: string;
  accentColor: 'red' | 'blue';
}
