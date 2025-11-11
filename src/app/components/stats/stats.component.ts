import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Stat {
  number: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent {
  stats: Stat[] = [
    {
      number: '500+',
      label: 'Colleges Served',
      icon: '🏫'
    },
    {
      number: '10,000+',
      label: 'Orders Delivered',
      icon: '📦'
    },
    {
      number: '98%',
      label: 'Satisfaction Rate',
      icon: '⭐'
    },
    {
      number: '24/7',
      label: 'Support Available',
      icon: '💬'
    }
  ];
}

