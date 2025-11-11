import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: 'img[loading="lazy"]',
  standalone: true
})
export class LazyImageDirective implements OnInit, OnDestroy {
  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLImageElement>) {}

  ngOnInit() {
    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset['src']) {
              img.src = img.dataset['src'] || '';
              img.classList.add('loaded');
            }
            this.observer?.unobserve(img);
          }
        });
      }, {
        rootMargin: '50px'
      });

      this.observer.observe(this.el.nativeElement);
    } else {
      // Fallback for browsers without IntersectionObserver
      this.el.nativeElement.classList.add('loaded');
    }
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}

