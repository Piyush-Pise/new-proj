import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'University Varsity Collection',
      category: 'Varsity Jackets',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80',
      description: 'Custom varsity jackets for State University football team',
      tags: ['Varsity', 'Embroidery', 'Team Wear']
    },
    {
      id: 2,
      title: 'Fraternity Custom Tees',
      category: 'T-Shirts',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80',
      description: 'Bold designs for fraternity events and gatherings',
      tags: ['Custom Print', 'Bulk Order', 'Event']
    },
    {
      id: 3,
      title: 'Basketball Team Jerseys',
      category: 'Jerseys',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&q=80',
      description: 'Professional jerseys with custom numbers and names',
      tags: ['Athletic', 'Team', 'Performance']
    },
    {
      id: 4,
      title: 'College Hoodie Collection',
      category: 'Hoodies',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80',
      description: 'Cozy hoodies for campus life and student organizations',
      tags: ['Comfort', 'Campus', 'Student Life']
    },
    {
      id: 5,
      title: 'Graduation Apparel',
      category: 'Custom',
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80',
      description: 'Special graduation collection with custom designs',
      tags: ['Graduation', 'Memorial', 'Special Event']
    },
    {
      id: 6,
      title: 'Sports Team Uniforms',
      category: 'Athletic',
      image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=600&q=80',
      description: 'Complete uniform sets for various sports teams',
      tags: ['Uniforms', 'Sports', 'Team']
    }
  ];

  selectedItem: PortfolioItem | null = null;

  openModal(item: PortfolioItem) {
    this.selectedItem = item;
  }

  closeModal() {
    this.selectedItem = null;
  }
}

