import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feature {
  icon: string;
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  features: Feature[] = [
    {
      icon: '✓',
      title: 'In‑person quality check',
      description: 'A Fretor visits you to showcase real fabric samples and print quality before you commit.',
      image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=600&q=80'
    },
    {
      icon: '⚡',
      title: 'Fast setup',
      description: 'Get your marketplace set up in about 10 minutes after booking. Quick and hassle-free.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80'
    },
    {
      icon: '🎨',
      title: 'Custom styles',
      description: 'Create your own unique designs for t-shirts, varsity jackets, jerseys, and more.',
      image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=600&q=80'
    }
  ];
}

