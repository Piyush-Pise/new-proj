import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
  college?: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Student Council President',
      college: 'State University',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
      text: 'Frete made ordering our custom varsity jackets so easy! The Fretor came to our campus and showed us real fabric samples. The quality exceeded our expectations.',
      rating: 5
    },
    {
      id: 2,
      name: 'Marcus Johnson',
      role: 'Fraternity President',
      college: 'Tech College',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
      text: 'Best custom apparel service we\'ve used. Fast setup, great quality, and the in-person visit really made a difference. Our jerseys look amazing!',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Sports Team Captain',
      college: 'City University',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
      text: 'The custom hoodies we ordered are perfect! The whole process was smooth, and having someone visit us in person to check quality was a game-changer.',
      rating: 5
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Club Organizer',
      college: 'Community College',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
      text: 'Frete delivered exactly what we needed. Professional service, great communication, and the custom t-shirts turned out better than we imagined.',
      rating: 5
    }
  ];

  currentIndex = 0;

  get currentTestimonial(): Testimonial {
    return this.testimonials[this.currentIndex];
  }

  nextTestimonial() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prevTestimonial() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  goToTestimonial(index: number) {
    this.currentIndex = index;
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0).map((_, i) => i);
  }
}

