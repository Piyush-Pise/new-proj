import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
}

interface Measurement {
  chest?: string;
  length?: string;
  sleeve?: string;
  waist?: string;
  shoulder?: string;
  [key: string]: string | undefined;
}

interface SizeChart {
  category: string;
  sizes: string[];
  measurements: {
    [key: string]: Measurement;
  };
}

@Component({
  selector: 'app-product-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-gallery.component.html',
  styleUrl: './product-gallery.component.css'
})
export class ProductGalleryComponent {
  selectedCategory = 'all';
  showSizeChart = false;
  selectedProductCategory = '';
  
  products: Product[] = [
    {
      id: 1,
      name: 'Custom Varsity Jackets',
      category: 'jackets',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
      description: 'Premium quality varsity jackets with custom embroidery'
    },
    {
      id: 2,
      name: 'Designer T-Shirts',
      category: 'tshirts',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
      description: 'Soft cotton tees with vibrant custom prints'
    },
    {
      id: 3,
      name: 'Team Jerseys',
      category: 'jerseys',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&q=80',
      description: 'Professional-grade team jerseys with custom numbers'
    },
    {
      id: 4,
      name: 'Premium Hoodies',
      category: 'hoodies',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80',
      description: 'Cozy hoodies perfect for college life'
    },
    {
      id: 5,
      name: 'Custom Sweatshirts',
      category: 'sweatshirts',
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80',
      description: 'Comfortable sweatshirts with your unique design'
    },
    {
      id: 6,
      name: 'Athletic Wear',
      category: 'athletic',
      image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800&q=80',
      description: 'Performance athletic wear for teams and groups'
    }
  ];

  categories = [
    { value: 'all', label: 'All Products' },
    { value: 'jackets', label: 'Varsity Jackets' },
    { value: 'tshirts', label: 'T-Shirts' },
    { value: 'jerseys', label: 'Jerseys' },
    { value: 'hoodies', label: 'Hoodies' },
    { value: 'sweatshirts', label: 'Sweatshirts' },
    { value: 'athletic', label: 'Athletic Wear' }
  ];

  get filteredProducts(): Product[] {
    if (this.selectedCategory === 'all') {
      return this.products;
    }
    return this.products.filter(p => p.category === this.selectedCategory);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  scrollToBooking() {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  openSizeChart(category: string) {
    this.selectedProductCategory = category;
    this.showSizeChart = true;
    document.body.style.overflow = 'hidden';
  }

  closeSizeChart() {
    this.showSizeChart = false;
    this.selectedProductCategory = '';
    document.body.style.overflow = '';
  }

  getSizeChart(): SizeChart {
    const charts: { [key: string]: SizeChart } = {
      'jackets': {
        category: 'Varsity Jackets',
        sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
        measurements: {
          'XS': { chest: '36"', length: '26"', sleeve: '32"', shoulder: '16"' },
          'S': { chest: '38"', length: '27"', sleeve: '33"', shoulder: '17"' },
          'M': { chest: '40"', length: '28"', sleeve: '34"', shoulder: '18"' },
          'L': { chest: '42"', length: '29"', sleeve: '35"', shoulder: '19"' },
          'XL': { chest: '44"', length: '30"', sleeve: '36"', shoulder: '20"' },
          '2XL': { chest: '46"', length: '31"', sleeve: '37"', shoulder: '21"' },
          '3XL': { chest: '48"', length: '32"', sleeve: '38"', shoulder: '22"' }
        }
      },
      'tshirts': {
        category: 'T-Shirts',
        sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
        measurements: {
          'XS': { chest: '34"', length: '26"', sleeve: '7.5"' },
          'S': { chest: '36"', length: '27"', sleeve: '8"' },
          'M': { chest: '40"', length: '28"', sleeve: '8.5"' },
          'L': { chest: '44"', length: '29"', sleeve: '9"' },
          'XL': { chest: '48"', length: '30"', sleeve: '9.5"' },
          '2XL': { chest: '52"', length: '31"', sleeve: '10"' },
          '3XL': { chest: '56"', length: '32"', sleeve: '10.5"' }
        }
      },
      'jerseys': {
        category: 'Jerseys',
        sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
        measurements: {
          'XS': { chest: '36"', length: '28"', sleeve: '8"' },
          'S': { chest: '38"', length: '29"', sleeve: '8.5"' },
          'M': { chest: '40"', length: '30"', sleeve: '9"' },
          'L': { chest: '44"', length: '31"', sleeve: '9.5"' },
          'XL': { chest: '48"', length: '32"', sleeve: '10"' },
          '2XL': { chest: '52"', length: '33"', sleeve: '10.5"' },
          '3XL': { chest: '56"', length: '34"', sleeve: '11"' }
        }
      },
      'hoodies': {
        category: 'Hoodies',
        sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
        measurements: {
          'XS': { chest: '38"', length: '26"', sleeve: '33"', shoulder: '17"' },
          'S': { chest: '40"', length: '27"', sleeve: '34"', shoulder: '18"' },
          'M': { chest: '44"', length: '28"', sleeve: '35"', shoulder: '19"' },
          'L': { chest: '48"', length: '29"', sleeve: '36"', shoulder: '20"' },
          'XL': { chest: '52"', length: '30"', sleeve: '37"', shoulder: '21"' },
          '2XL': { chest: '56"', length: '31"', sleeve: '38"', shoulder: '22"' },
          '3XL': { chest: '60"', length: '32"', sleeve: '39"', shoulder: '23"' }
        }
      },
      'sweatshirts': {
        category: 'Sweatshirts',
        sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
        measurements: {
          'XS': { chest: '38"', length: '26"', sleeve: '33"', shoulder: '17"' },
          'S': { chest: '40"', length: '27"', sleeve: '34"', shoulder: '18"' },
          'M': { chest: '44"', length: '28"', sleeve: '35"', shoulder: '19"' },
          'L': { chest: '48"', length: '29"', sleeve: '36"', shoulder: '20"' },
          'XL': { chest: '52"', length: '30"', sleeve: '37"', shoulder: '21"' },
          '2XL': { chest: '56"', length: '31"', sleeve: '38"', shoulder: '22"' },
          '3XL': { chest: '60"', length: '32"', sleeve: '39"', shoulder: '23"' }
        }
      },
      'athletic': {
        category: 'Athletic Wear',
        sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
        measurements: {
          'XS': { chest: '34"', length: '26"', sleeve: '7.5"', waist: '28"' },
          'S': { chest: '36"', length: '27"', sleeve: '8"', waist: '30"' },
          'M': { chest: '40"', length: '28"', sleeve: '8.5"', waist: '32"' },
          'L': { chest: '44"', length: '29"', sleeve: '9"', waist: '34"' },
          'XL': { chest: '48"', length: '30"', sleeve: '9.5"', waist: '36"' },
          '2XL': { chest: '52"', length: '31"', sleeve: '10"', waist: '38"' },
          '3XL': { chest: '56"', length: '32"', sleeve: '10.5"', waist: '40"' }
        }
      }
    };

    return charts[this.selectedProductCategory] || charts['tshirts'];
  }

  getMeasurementKeys(): string[] {
    const chart = this.getSizeChart();
    if (chart.sizes.length > 0) {
      const firstSize = chart.sizes[0];
      const measurements = chart.measurements[firstSize];
      if (measurements) {
        return Object.keys(measurements);
      }
    }
    return [];
  }

  getMeasurementValue(size: string, key: string): string {
    const chart = this.getSizeChart();
    const measurement = chart.measurements[size];
    if (measurement && measurement[key]) {
      return measurement[key] || '-';
    }
    return '-';
  }
}

