import { Component } from '@angular/core';
import { CarouselComponent } from "../carousel/carousel.component";

@Component({
  selector: 'app-welcome-section',
  standalone: true,
  imports: [CarouselComponent, CarouselComponent],
  templateUrl: './welcome-section.component.html',
  styleUrl: './welcome-section.component.scss',
})
export class WelcomeSectionComponent {
  showMobileText: boolean = false;
  imagesCarousel = [
    'assets/images/VON-ACC1-4096.jpg',
    'assets/images/VON-PLAYG-4096.jpg',
    'assets/images/VON-PARK4-4096.jpg',
    // 'assets/images/VON-PAL1-4096.jpg',
    // 'assets/images/VON-CANCHA-4096.jpg'
  ]
  constructor() {}

  ngOnInit(): void {
    window.addEventListener('resize', () => {
      this.showMobileText = window.innerWidth < 768;
    });
  }
}
