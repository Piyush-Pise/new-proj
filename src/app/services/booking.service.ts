import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface BookingRequest {
  name: string;
  email: string;
  phone: string;
  productType: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  constructor() { }

  submitBooking(booking: BookingRequest): Observable<{ success: boolean; message: string }> {
    // In a real application, this would make an HTTP call to a backend API
    console.log('Booking submitted:', booking);
    
    // Simulate API call
    return of({
      success: true,
      message: 'Your booking request has been received! A Fretor will contact you soon.'
    });
  }
}

