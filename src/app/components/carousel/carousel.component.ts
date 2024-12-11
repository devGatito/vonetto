import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  @Input() images = [
    'assets/images/VON-ACC1-4096.jpg',
    'assets/images/TREN-68-4096.jpg',
    'assets/images/TREN-89-4096-V2.jpg',
    'assets/images/TREN-89-4096.jpg',
  ];
  @Input() class = 'carousel__slider-images'

  currentIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 4000);
  }

  showImage(index: number) {
    this.currentIndex = index;
    clearInterval(this.intervalId);
    this.startAutoSlide();
  }
}
