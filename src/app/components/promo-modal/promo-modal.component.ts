import { AfterViewInit, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-promo-modal',
  standalone: true,
  imports: [],
  templateUrl: './promo-modal.component.html',
  styleUrls: ['./promo-modal.component.scss'],
})
export class PromoModalComponent implements AfterViewInit, OnDestroy {
  modal!: HTMLDialogElement | null;
  visible = false;

  ngAfterViewInit(): void {
    this.modal = document.querySelector('dialog#promo');
    if (!this.modal) {
      console.error('Modal element not found!');
      return;
    }

    // Escucha el evento de scroll
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  ngOnDestroy(): void {
    // Limpia el evento de scroll
    window.removeEventListener('scroll', this.onScroll.bind(this));
  }

  onScroll() {
    if (!this.visible && window.scrollY > 200) {
      this.modal?.classList.remove('hidden');
      this.modal?.showModal();
      this.visible = true;
    }
  }

  onClose() {
    this.modal?.classList.add('hidden');
    this.modal?.close();
  }

  agendarCita() {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
    this.onClose();
  }
}
