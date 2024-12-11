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

    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScroll.bind(this));
  }

  onScroll() {
    if (!this.visible && window.scrollY > 200) {
      this.showModal();
      this.visible = true;
    }
  }

  showModal() {
    this.modal?.classList.remove('hidden');
    this.modal?.showModal();
  }

  closeModal() {
    this.modal?.classList.add('hidden');
    this.modal?.close();
  }

  onClose() {
    this.closeModal();
  }

  agendarCita() {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
    this.closeModal();
  }
}
