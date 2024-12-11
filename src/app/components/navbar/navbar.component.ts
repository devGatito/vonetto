import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { PromoModalComponent } from '../promo-modal/promo-modal.component'; 
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    PromoModalComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'], 
})
export class NavbarComponent {
  menuOpen = false;

  @ViewChild(PromoModalComponent) promoModal!: PromoModalComponent;

  toggleMenu() {
    if (window.innerWidth < 768) {
      this.menuOpen = !this.menuOpen;
    }
  }

  showPromo() {
    this.promoModal.showModal();
  }
}
