import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero.component';
import { StatsComponent } from '../stats/stats.component';
import { FeaturesComponent } from '../features/features.component';
import { ProductGalleryComponent } from '../product-gallery/product-gallery.component';
import { HowItWorksComponent } from '../how-it-works/how-it-works.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { FaqComponent } from '../faq/faq.component';
import { BookingComponent } from '../booking/booking.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    StatsComponent,
    FeaturesComponent,
    ProductGalleryComponent,
    HowItWorksComponent,
    PortfolioComponent,
    TestimonialsComponent,
    FaqComponent,
    BookingComponent
  ],
  template: `
    <app-hero></app-hero>
    <app-stats></app-stats>
    <app-features></app-features>
    <app-product-gallery></app-product-gallery>
    <app-how-it-works></app-how-it-works>
    <app-portfolio></app-portfolio>
    <app-testimonials></app-testimonials>
    <app-faq></app-faq>
    <app-booking></app-booking>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class HomeComponent {
}

