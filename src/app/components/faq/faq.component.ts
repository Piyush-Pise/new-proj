import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  faqs: FAQItem[] = [
    {
      id: 1,
      question: 'How does the in-person visit work?',
      answer: 'A Fretor will schedule a visit to your location (campus, office, etc.) at your convenience. They bring real fabric samples, print quality examples, and design options. You can see and feel the quality before making any commitment. The visit typically takes 15-30 minutes.'
    },
    {
      id: 2,
      question: 'How long does it take to get my custom apparel?',
      answer: 'After booking and finalizing your design, production typically takes 2-3 weeks. Rush orders can be accommodated for an additional fee. We\'ll keep you updated throughout the process with production status updates.'
    },
    {
      id: 3,
      question: 'What\'s the minimum order quantity?',
      answer: 'We accept orders of any size! Whether you need 5 custom t-shirts or 500 varsity jackets, we can handle it. Larger orders may qualify for volume discounts - ask your Fretor for details.'
    },
    {
      id: 4,
      question: 'Can I see samples before placing a large order?',
      answer: 'Absolutely! During the in-person visit, your Fretor will bring physical samples of fabrics, prints, and finished products. You can also request sample pieces for larger orders to ensure everything meets your expectations.'
    },
    {
      id: 5,
      question: 'What types of customization are available?',
      answer: 'We offer embroidery, screen printing, heat transfer, direct-to-garment printing, and more. You can customize colors, add logos, names, numbers, and create completely unique designs. Our Fretor will discuss all available options during your visit.'
    },
    {
      id: 6,
      question: 'Do you offer design services?',
      answer: 'Yes! If you have an idea but need help bringing it to life, our design team can create custom graphics and layouts for you. Design services are included with your order, and you\'ll have the opportunity to review and approve designs before production.'
    },
    {
      id: 7,
      question: 'What if I\'m not satisfied with my order?',
      answer: 'We stand behind our quality. If you\'re not completely satisfied, contact us within 7 days of delivery. We\'ll work with you to make it right, whether that means reprinting, adjusting, or refunding - your satisfaction is our priority.'
    },
    {
      id: 8,
      question: 'How do I book a Fretor visit?',
      answer: 'Simply fill out the booking form on our website with your contact information, preferred product type, and availability. A Fretor will contact you within 24 hours to schedule your visit. You can also call us directly for faster scheduling.'
    }
  ];

  openItemId: number | null = null;

  toggleItem(id: number) {
    this.openItemId = this.openItemId === id ? null : id;
  }

  isOpen(id: number): boolean {
    return this.openItemId === id;
  }
}

