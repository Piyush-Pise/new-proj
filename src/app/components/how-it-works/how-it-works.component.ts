import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface Step {
  number: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.css'
})
export class HowItWorksComponent {
  steps: Step[] = [
    {
      number: '01',
      title: 'Book a Fretor',
      description: 'Fill out our simple booking form with your details and preferred product type.'
    },
    {
      number: '02',
      title: 'In-Person Visit',
      description: 'A Fretor visits you to showcase real fabric samples and print quality in person.'
    },
    {
      number: '03',
      title: 'Fast Setup',
      description: 'Get your marketplace set up in about 10 minutes. Choose your designs and place your order.'
    },
    {
      number: '04',
      title: 'Custom Delivery',
      description: 'Receive your custom apparel delivered with trust and quality guaranteed.'
    }
  ];
}

