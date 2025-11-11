import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
  bookingForm: FormGroup;
  isSubmitting = false;
  submitMessage = '';
  submitSuccess = false;

  productTypes = [
    'T-Shirts',
    'Varsity Jackets',
    'Jerseys',
    'Hoodies',
    'Custom Styles',
    'Other'
  ];

  constructor(
    private fb: FormBuilder,
    private bookingService: BookingService
  ) {
    this.bookingForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[\d\s\-\+\(\)]+$/)]],
      productType: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() {
    return this.bookingForm.controls;
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      this.isSubmitting = true;
      this.submitMessage = '';

      this.bookingService.submitBooking(this.bookingForm.value).subscribe({
        next: (response) => {
          this.isSubmitting = false;
          this.submitSuccess = true;
          this.submitMessage = response.message;
          this.bookingForm.reset();
          setTimeout(() => {
            this.submitSuccess = false;
            this.submitMessage = '';
          }, 5000);
        },
        error: (error) => {
          this.isSubmitting = false;
          this.submitSuccess = false;
          this.submitMessage = 'Something went wrong. Please try again later.';
          console.error('Booking error:', error);
        }
      });
    } else {
      this.markFormGroupTouched();
    }
  }

  private markFormGroupTouched() {
    Object.keys(this.bookingForm.controls).forEach(key => {
      const control = this.bookingForm.get(key);
      control?.markAsTouched();
    });
  }
}

